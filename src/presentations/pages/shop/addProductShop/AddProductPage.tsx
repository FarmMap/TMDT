import React, { useEffect, useRef, useState } from "react";
import InfoMyShopLayout from "../InfoMyShopLayout";
import { Switch } from "antd";
import { Grid } from "@mui/material";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps, UploadFile, UploadProps } from "antd";
import {
  Input,
  Upload,
  Modal,
  Dropdown,
  Button,
  Space,
  DatePicker,
  InputNumber,
  Select,
} from "antd";
import type { Dayjs } from "dayjs";
// Styles
import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";
import ProductType from "../../../../data/types/Product/ProductType";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import useFetchProductPorfolio from "../../../../data/api/ProductPorfolio/useFetchProductPortfolio";
import useCreateProductList from "../../../../data/api/Product/useCreateProductList";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const AddProductPage = () => {
  //thêm ảnh
  type FileType = UploadFile;

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj as Blob);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined rev={undefined} />
      <div style={{ marginTop: 8 }}>Thêm ảnh</div>
    </button>
  );

  //   end input number

  // API
  const [productList, setProductList] = useState<ProductType | undefined>({
    isActive: true,
  });
  //   Date
  const { RangePicker } = DatePicker;
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      let newProducts = { ...productList };
      newProducts.saleStartDate = dateStrings[0];
      newProducts.saleEndDate = dateStrings[1];
      setProductList(newProducts);
    } else {
      // console.log('Clear');
    }
  };
  //   end

  // Ref để tham chiếu tới input file
  const fileInputRef = useRef(null);

  // Onchange setImg
  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
    file,
  }) => {
    setFileList(newFileList);

    // Create an array of File objects
    const fileObjects: File[] = await Promise.all(
      newFileList.map(async (file) => {
        if (file.originFileObj) {
          return file.originFileObj as File;
        }

        // If the file is not uploaded yet, fetch the blob
        const response = await fetch(file.url as string);
        const blob = await response.blob();

        // Create a new File object
        return new File([blob], file.name);
      })
    );

    // Update productList with the selected images
    let newProducts = { ...productList };
    newProducts.images = fileObjects;
    setProductList(newProducts);

    // Check if the file is removed
    if (file?.status === "removed" && file.originFileObj) {
      // Remove the deleted file from the images array
      newProducts = { ...productList };
      newProducts.images = newProducts.images?.filter(
        (img) => img !== file.originFileObj
      );
      setProductList(newProducts);
    }
  };
  console.log();

  // Get category
  const { productPort } = useFetchProductPorfolio({});

  // dropdown danh mục sản phẩm
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  const items: MenuProps["items"] = productPort.map((item) => ({
    label: item.name,
    key: item.id !== undefined ? item.id.toString() : "", // Convert to string if id is defined
  }));

  const handleMenuClick: MenuProps["onClick"] = (info) => {
    const categoryId = parseInt(info.key || "", 10); // Convert string to number
    if (!isNaN(categoryId)) {
      let newProducts = { ...productList };
      newProducts.productCategoryId = categoryId;
      setProductList(newProducts);

      // Assuming you get the name from another source, modify this part accordingly
      const categoryName = getCategoryNameById(categoryId);
      setSelectedCategoryName(categoryName || ""); // Set the selected category name
    }
  };

  // You need a function to get the category name based on the ID
  const getCategoryNameById = (categoryId: number): string => {
    // Logic to get category name based on the ID, replace this with your actual logic
    const category = productPort.find((item) => item.id === categoryId);
    return category?.name || "";
  };

  const menuProps = {
    items,

    onClick: handleMenuClick,
  };

  // submit
  const {
    isCreated,
    error: createProducErr,
    createProductList,
  } = useCreateProductList({
    storeId: 2,
  });
  const handleSubmit = () => {
    createProductList({ products: productList });
  };

  useEffect(() => {
    if (isCreated) {
      toast.success("Tạo sản phẩm thành công");
    } else if (createProducErr) {
      toast.error(createProducErr);
    }
  }, [createProducErr, isCreated]);

  const selectAfter = (
    <Select
      onChange={(value) => {
        let newProductList = { ...productList };
        newProductList.unit = value;
        setProductList(newProductList);
      }}
      defaultValue="tan"
      style={{ width: 60 }}
    >
      <Option value="tan">Tấn</Option>
      <Option value="ta">Tạ</Option>
      <Option value="yen">Yến</Option>
      <Option value="kg">Kg</Option>
      <Option value="gram">Gram</Option>
      <Option value="trai">Trái</Option>
      <Option value="cai">Cái</Option>
    </Select>
  );

  return (
    <InfoMyShopLayout>
      <Grid>
        <Grid className={cx("wapper")}>
          <h2 className={cx("heading")}>Tạo sản phẩm</h2>
          <Grid className={cx("container")}>
            <Grid item lg={6.5} className={cx("part-one")}>
              <h3>Thông tin chung</h3>
              <Grid>
                <p>Tên sản phẩm</p>
                <Input
                  value={productList?.name ?? ""}
                  onChange={(e) => {
                    let newProducts = { ...productList };
                    newProducts.name = e.currentTarget.value;
                    setProductList(newProducts);
                  }}
                  placeholder="Nhập tên sản phẩm"
                />
              </Grid>
              <Grid className={cx("product-code")}>
                <Grid className={cx("type-input")}>
                  <p>Số lượng</p>
                  <Input
                    type="number"
                    value={productList?.inventory ?? ""}
                    onChange={(e) => {
                      let newProducts = { ...productList };
                      newProducts.inventory = parseInt(e.currentTarget.value);
                      setProductList(newProducts);
                    }}
                  />
                </Grid>
                <Grid className={cx("type-input")}>
                  <p>Khối lượng</p>
                  <InputNumber
                    addonAfter={selectAfter}
                    defaultValue={0}
                    value={productList?.weight ?? ""}
                    onChange={(value) => {
                      if (value !== null && value !== undefined) {
                        let newProducts = { ...productList };
                        newProducts.weight =
                          parseInt(value.toString(), 10) || 0; // Convert to number
                        setProductList(newProducts);
                      }
                    }}
                  />
                </Grid>
              </Grid>

              <Grid className={cx("price-product")}>
                <Grid className={cx("details")}>
                  <p
                    onClick={() =>
                      setIsDescriptionVisible(!isDescriptionVisible)
                    }
                  >
                    Mô tả sản phẩm
                  </p>
                  {isDescriptionVisible && (
                    <TextArea
                      className={cx("text-area")}
                      value={productList?.description ?? ""}
                      onChange={(e) => {
                        let newProducts = { ...productList };
                        newProducts.description = e.currentTarget.value;
                        setProductList(newProducts);
                      }}
                      placeholder="Nhập mô tả sản phẩm"
                      rows={4}
                    />
                  )}
                </Grid>
                <h3>Giá sản phẩm</h3>
                <Grid className={cx("price-product")}>
                  <Grid className={cx("type-input")}>
                    <p>Giá</p>
                    <Input
                      type="number"
                      value={productList?.retailPrice ?? ""}
                      onChange={(e) => {
                        let newProducts = { ...productList };
                        newProducts.retailPrice = e.currentTarget.value;
                        setProductList(newProducts);
                      }}
                    />
                  </Grid>

                  <Grid className={cx("type-input")}>
                    <p>Giá khuyến mãi</p>
                    <Input
                      type="number"
                      value={productList?.salePrice ?? ""}
                      onChange={(e) => {
                        let newProducts = { ...productList };
                        newProducts.salePrice = e.currentTarget.value;
                        setProductList(newProducts);
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid >
                  <p>Ngày bắt đầu / kết thúc khuyến mãi</p>
                  <RangePicker onChange={onRangeChange} />
                </Grid>

                <Grid className={cx("img-product")}>
                  <h3>Ảnh sản phẩm</h3>
                  <Upload
                    className={cx("img-product")}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    ref={fileInputRef}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {productList?.images?.length !== undefined
                      ? productList?.images?.length > 10
                        ? null
                        : uploadButton
                      : uploadButton}
                  </Upload>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} className={cx("part-two")}>
              <Grid className={cx("category-product")}>
                <h3>Thông tin bổ sung</h3>
                <Grid className={cx("menu-item")}>
                  <p>Danh mục sản phẩm</p>
                  <Dropdown menu={menuProps}>
                    <Button className={cx("dropdown")}>
                      <Space className={cx("title-category")}>
                        {selectedCategoryName || "Chọn danh mục"}
                        <DownOutlined rev={undefined} />
                      </Space>
                    </Button>
                  </Dropdown>
                </Grid>
              </Grid>
              <Grid className={cx("status")}>
                <p>Trạng thái</p>
                <a>Chờ xét duyệt</a>
              </Grid>
              <Grid className={cx("switch")}>
                <p>Cho phép bán</p>
                <Switch
                  defaultChecked
                  onChange={(checked) => {
                    let newProducts = { ...productList };
                    newProducts.isActive = checked;
                    setProductList(newProducts);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={cx("btn-save")}>
            <Button onClick={handleSubmit}>Lưu sản phẩm</Button>
          </Grid>
        </Grid>
      </Grid>
    </InfoMyShopLayout>
  );
};

export default AddProductPage;
