//Externel
import React from "react";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-material-ui-carousel";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> An
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
            <Carousel indicators={false}>
              <Grid container className={cx("category-container")}>
                {productSg.productList.map((product, z) => (
                  <Grid item lg={3.7} key={z} className={cx("category-item")}>
                    <NavLink to="/san-pham">
<<<<<<< HEAD
                    <img
                      src={product.productSrc}
                      className={cx("product-img")}
                      alt="ITFSD-rauSach"
                    />
                    <h5 className={cx("product-name")}>
                      {product.productName}
                    </h5>
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
=======
                      <img
                        src={product.productSrc}
                        className={cx("product-img")}
                        alt="ITFSD-rauSach"
                      />
                      <h5 className={cx("product-name")}>
                        {product.productName}
                      </h5>
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
>>>>>>> An
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
              <Grid container className={cx("category-container")}>
                {productSg.productList.map((product, z) => (
<<<<<<< HEAD
                  <Grid item lg={3.7} className={cx("category-item")}>
                    <NavLink to="/san-pham">
                    <img
                      src={product.productSrc}
                      className={cx("product-img")}
                      alt="ITFSD-rauSach"
                    />
                    <h5 className={cx("product-name")}>
                      {product.productName}
                    </h5>
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
=======
                  <Grid item lg={3.7} key={z} className={cx("category-item")}>
                    <NavLink to="/san-pham">
                      <img
                        src={product.productSrc}
                        className={cx("product-img")}
                        alt="ITFSD-rauSach"
                      />
                      <h5 className={cx("product-name")}>
                        {product.productName}
                      </h5>
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
>>>>>>> An
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
            </Carousel>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryPage;
