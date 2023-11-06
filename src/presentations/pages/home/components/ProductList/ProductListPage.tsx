//Ex
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";

// In
// Styles
import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import images from "../../../../../assets/images";
import { productList } from "../../DataHome";
import { NavLink } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);

const ProductListPage = () => {
  // Hàm này tạo mảng StarIcon màu vàng và màu xám dựa trên độ dài của feedBack
  const renderStarIcons = (feedBackLength: number) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < feedBackLength) {
        starIcons.push(
          <span key={i} className={cx("feedBack-star")}>
            <StarIcon />
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
  return (
    <Grid className={cx("wrapper")}>
      <Grid className={cx("header")}>
        <h5>Danh mục sản phẩm</h5>
      </Grid>

      <Grid className={cx("container")} container>
        {productList.map((product, i) => (
          <Grid item lg={1.6} className={cx("item")} key={i}>
            <NavLink to="/san-pham">
              <img
                src={product.productSrc}
                className={cx("product-img")}
                alt="ITFSD-rauSach"
              />
              <h5 className={cx("product-name")}>{product.productName}</h5>
              <p className={cx("original-price")}>{product.originalPrice}</p>
              <p className={cx("sale-price")}>
                {product.salePrice} <span>1kg</span>
              </p>
              <p className={cx("feedBack")}>
                <span className={cx("feedBack-star")}>
                  {renderStarIcons(product.feedBack.length)} <br />
                </span>{" "}
                {product.sold} đã bán
              </p>
            </NavLink>
          </Grid>
        ))}
      </Grid>

      <Grid className={cx("more")}>
        <Button variant="outlined">Xem Thêm</Button>
      </Grid>
    </Grid>
  );
};

export default ProductListPage;
