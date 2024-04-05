import React, { useState } from "react";
import InfoMyShopLayout from "../InfoMyShopLayout";
import { Grid } from "@mui/material";
import { Button, Dropdown, Input, MenuProps, Space, Spin, message } from "antd";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames/bind";
import styles from "./ProductShop.module.scss";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import Table, { ColumnsType } from "antd/es/table";
import StarIcon from "@mui/icons-material/Star";
import useFetchProductList from "../../../../data/api/Product/useFetchProductList";
import { NavLink } from "react-router-dom";
import ProductType from "../../../../data/types/Product/ProductType";
import useFetchMyShop from "../../../../data/api/Shop/useFetchMyShop";
import useFetchProductPorfolio from "../../../../data/api/ProductPorfolio/useFetchProductPortfolio";
import { Console } from "console";
import useDebounce from "../../../../hooks/useDebounce";

const cx = classNames.bind(styles);

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

const ProductShopPage = () => {
  // Search
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 700);
  const [refresh, setRefresh] = useState(false);

  // Get category
  const { productPort, isLoading } = useFetchProductPorfolio({});
  const items: MenuProps["items"] = productPort.map((item) => ({
    label: item.name,
    key: item.id !== undefined ? item.id.toString() : "", // Convert to string if id is defined
  }));

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const { myShop } = useFetchMyShop({});

  // Call api
  const { productList } = useFetchProductList({
    page: 1,
    storeId: myShop.id,
    search: searchDebounce,
    shouldRefesh: refresh,
  });

  const columns: ColumnsType<ProductType> = [
    {
      title: "Hình ảnh",
      render: (text: string, record: ProductType) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={
            record.images?.length === 1
              ? `${process.env.REACT_APP_API_BASE_URL}${record.images?.map(
                  (item, i) => i === 0 && item
                )}`
              : `${(record.images || [])
                  .map(
                    (item, i) =>
                      (i === 0 && process.env.REACT_APP_API_BASE_URL) || item
                  )
                  .join("")}`
          }
          className={cx("product-img")}
          alt="Lỗi"
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Giá tiền",
      render: (text: string, record: ProductType) => (
        <span className={cx("feedBack-star")}>
          {record.productPrice?.retailPrice?.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          }) ?? "Đang cập nhật..."}
        </span>
      ),
    },
    {
      title: "Số lượng",
      render: (text: string, record: ProductType) => (
        <span className={cx("feedBack-star")}>
          {record.weight} {record.unit}
        </span>
      ),
    },

    {
      title: "Trạng thái",
      dataIndex: "function",
      render: (text: string, record: ProductType) => (
        <span className={cx("feedBack-star")}>
          {record.isActive ? "Đang bán" : "Ngừng bán"}
        </span>
      ),
    },
    {
      title: "Trạng thái duyệt sản phẩm",
      dataIndex: "function",
      render: (text: string, record: ProductType) => (
        <span className={cx("feedBack-star")}>
          {record.approveStatus === "PENDING" ? (
            <span style={{ color: "var(--yellow-color)" }}>Chưa phê duyệt</span>
          ) : record.approveStatus === "APPROVED" ? (
            <span style={{ color: "var(--primary-color)" }}>Đã phê duyệt</span>
          ) : (
            <span style={{ color: "var(--second-color)" }}>Từ chối</span>
          )}
        </span>
      ),
    },
    {
      title: "Đánh giá",
      dataIndex: "function",
      render: (text: string, record: ProductType) => (
        <p className={cx("feedBack")}>
          <span className={cx("feedBack-star")}>
            {renderStarIcons(record.rating)} <br />
          </span>{" "}
        </p>
      ),
    },
  ];

  return (
    <InfoMyShopLayout>
      <Grid>
        <Grid className={cx("wapper")}>
          <Grid className={cx("heading-sidebar")}>
            <h4>Danh sách sản phẩm</h4>
            <NavLink to="/cua-hang/danh-sach-san-pham/tao-san-pham">
              <Button type="primary">
                <AddIcon style={{ fontSize: "20px" }} />
                <span>Thêm sản phẩm</span>
              </Button>
            </NavLink>
          </Grid>
          <Grid className={cx("menu-item")}>
            <Input
              className={cx("input-search")}
              placeholder="Tìm kiếm theo tên sản phẩm, mã sản phẩm"
              value={search}
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
              prefix={isLoading ? <Spin /> : <SearchOutlined rev={undefined} />}
            />
            <Space.Compact>
              <Dropdown menu={menuProps}>
                <Button className={cx("dropdown")}>
                  <Space>
                    Danh mục sản phẩm
                    <DownOutlined rev={undefined} />
                  </Space>
                </Button>
              </Dropdown>
            </Space.Compact>
          </Grid>
          <Grid className={cx("table-list")}>
            <Table
              size="small"
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
