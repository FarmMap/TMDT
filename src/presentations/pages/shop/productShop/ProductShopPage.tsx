import React, { useState } from "react";
import InfoMyShopLayout from "../InfoMyShopLayout";
import { Grid } from "@mui/material";
import {
  Button,
  Dropdown,
  Input,
  MenuProps,
  Popconfirm,
  Space,
  message,
} from "antd";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames/bind";
import styles from "./ProductShop.module.scss";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import Table, { ColumnsType } from "antd/es/table";
import StarIcon from "@mui/icons-material/Star";
import useFetchProductList from "../../../../data/api/Product/useFetchProductList";

const cx = classNames.bind(styles);
interface DataType {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  saleStartDate?: string;
  saleEndDate?: string;
  quantity?: number;
  images?: File;
  inventory?: number;
  status?: boolean;
  approveStatus?: string;
  description?: string;
  rating?: string;
}

// Hàm này tạo mảng StarIcon màu vàng và màu xám dựa trên độ dài của feedBack
const renderStarIcons = (rating: string | undefined) => {
  const numericRating = parseFloat(rating ? rating : "");
  const roundedRating = Math.floor(numericRating);
  const hasHalfStar = numericRating - roundedRating > 0.5;

  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      starIcons.push(
        <span key={i} className={cx("feedBack-star")}>
          <StarIcon />
        </span>
      );
    } else if (i === roundedRating && hasHalfStar) {
      starIcons.push(
        <span key={i} className={cx("feedBack-star")}>
          <StarIcon style={{ color: "#ffd700" }} />
        </span>
      );
    } else {
      starIcons.push(
        <span key={i} className={cx("feedBack-star")}>
          <StarIcon style={{ color: "#ddd" }} />
        </span>
      );
    }
  }
  return starIcons;
};

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    // console.log(
    //   `selectedRowKeys: ${selectedRowKeys}`,
    //   "selectedRows: ",
    //   selectedRows
    // );
  },
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",

    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
  },
];
const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  // console.log("click", e);
};
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const ProductShopPage = () => {
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");
  const { productList } = useFetchProductList({
    page: 1,
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Trạng thái",
      dataIndex: "function",
      render: (text: string, record: DataType) =>
        productList.map((product, i) => (
          <span key={i} className={cx("feedBack-star")}>
            {product.status ? "Đang bán" : "Ngừng bán"}
          </span>
        )),
    },
    {
      title: "Trạng thái duyệt sản phẩm",
      dataIndex: "function",
      render: (text: string, record: DataType) =>
        productList.map((product, i) => (
          <span key={i} className={cx("feedBack-star")}>
            {product.approveStatus === "PENDING" ? (
              <span style={{ color: "var(--second-color)" }}>
                Chưa phê duyệt
              </span>
            ) : (
              <span style={{ color: "var(--primary-color)" }}>
                Đã phê duyệt
              </span>
            )}
          </span>
        )),
    },
    {
      title: "Đánh giá",
      dataIndex: "function",
      render: (text: string, record: DataType) =>
        productList.map((product, i) => (
          <p className={cx("feedBack")}>
            <span className={cx("feedBack-star")}>
              {renderStarIcons(product.rating)} <br />
            </span>{" "}
          </p>
        )),
    },
  ];
  return (
    <InfoMyShopLayout>
      <Grid>
        <Grid className={cx("wapper")}>
          <Grid className={cx("heading-sidebar")}>
            <h4>Danh sách sản phẩm</h4>
            <Button type="primary">
              <AddIcon />
              <span>Thêm sản phẩm</span>
            </Button>
          </Grid>
          <Grid className={cx("menu-item")}>
            <Input
              className={cx("input-search")}
              placeholder="Tìm kiếm theo tên sản phẩm, mã sản phẩm"
              prefix={<SearchOutlined rev={undefined} />}
            />
            <Space.Compact>
              <Dropdown menu={menuProps}>
                <Button className={cx("dropdown")}>
                  <Space>
                    Loại sản phẩm
                    <DownOutlined rev={undefined} />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown menu={menuProps}>
                <Button className={cx("dropdown")}>
                  <Space>
                    Ngày tạo
                    <DownOutlined rev={undefined} />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown menu={menuProps}>
                <Button className={cx("dropdown")}>
                  <Space>
                    Nhãn hiệu
                    <DownOutlined rev={undefined} />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown menu={menuProps}>
                <Button className={cx("dropdown")}>
                  <Space>
                    Bộ lọc khác
                    <DownOutlined rev={undefined} />
                  </Space>
                </Button>
              </Dropdown>
            </Space.Compact>
          </Grid>
          <Grid className={cx("table-list")}>
            <Table size="small"
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={productList}
              className={cx("table-row")}
            />
          </Grid>
        </Grid>
      </Grid>
    </InfoMyShopLayout>
  );
};

export default ProductShopPage;
