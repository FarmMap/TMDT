//Externel
import React from "react";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
// Internal
import { suggestProducts } from "../../DataHome";
// Styles
import classNames from "classnames/bind";
import styles from "./Category.module.scss";

const cx = classNames.bind(styles);

const CategoryPage = () => {
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
      <Grid container columns={12} className={cx("container")}>
        {suggestProducts.map((productSg, i) => (
          <Grid item lg={3.9} className={cx("item")} key={i}>
            <h4 className={cx("item-heading")}>{productSg.heading}</h4>
            <Grid container className={cx("category-container")}>
              {productSg.productList.map((product, z) => (
                <Grid item lg={3.7} className={cx("category-item")}>
                  <img
                    src={product.productSrc}
                    className={cx("product-img")}
                    alt="ITFSD-rauSach"
                  />
                  <h5 className={cx("product-name")}>{product.productName}</h5>
                  <p className={cx("original-price")}>
                    {product.originalPrice}
                  </p>
                  <p className={cx("sale-price")}>
                    {product.salePrice} <span>1kg</span>
                  </p>
                  <p className={cx("feedBack")}>
                    <span className={cx("feedBack-star")}>
                      {renderStarIcons(product.feedBack.length)} <br />
                    </span>{" "}
                    {product.sold} đã bán
                  </p>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryPage;