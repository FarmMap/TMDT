//Ex
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";

// In
// Styles
import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useFetchProductList from "../../../../../data/api/Product/useFetchProductList";
import images from "../../../../../assets/images";

const cx = classNames.bind(styles);

const ProductListPage = () => {
  const [page, setPage] = useState(1);
  const { productList } = useFetchProductList({
    page: page,
  });

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

  return (
    <Grid className={cx("wrapper")}>
      <Grid className={cx("header")}>
        <h5>Danh sách sản phẩm</h5>
      </Grid>

      <Grid className={cx("container")} container>
        {productList.map(
          (product, i) =>
            product.approveStatus === "APPROVED" && (
              <Grid item lg={1.6} className={cx("item")} key={i}>
                <NavLink to="/san-pham">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}${product.images}`}
                    // src={images.dauGoiDau}
                    className={cx("product-img")}
                    alt={product.name}
                  />
                  <h5 className={cx("product-name")}>{product.name}</h5>
                  <p className={cx("original-price")}>{product.price}đ</p>
                  <p className={cx("sale-price")}>{product.salePrice}đ</p>
                  <p className={cx("feedBack")}>
                    <span className={cx("feedBack-star")}>
                      {renderStarIcons(product.rating)} <br />
                    </span>{" "}
                    {product.inventory} đã bán
                  </p>
                </NavLink>
              </Grid>
            )
        )}
      </Grid>

      <Grid className={cx("more")}>
        <Button variant="outlined">Xem Thêm</Button>
      </Grid>
    </Grid>
  );
};

export default ProductListPage;
