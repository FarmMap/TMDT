//Ex
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";

// In
// Styles
import classNames from "classnames/bind";
import styles from "./ProductSearch.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import useFetchProductList from "../../../data/api/Product/useFetchProductList";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";

const cx = classNames.bind(styles);

const ProductSearchPage = () => {
  const [page, setPage] = useState(1);
  const { productName } = useParams();
  const { productList } = useFetchProductList({
    page: page,
    search: productName,
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
    <DefaultLayOut>
      <Grid className={cx("wrapper")}>
        <Grid className={cx("header")}>
          <h5>Danh sách sản phẩm</h5>
        </Grid>

        <Grid className={cx("container")} container>
          {productList.map(
            (product, i) =>
              product.isActive && (
                <Grid item lg={1.5} className={cx("item")} key={i}>
                  <NavLink to={`/san-pham/${product.id}`}>
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}${product.images?.[0]}`}
                      // src={images.dauGoiDau}
                      className={cx("product-img")}
                      alt={product.name}
                    />
                    <h5 className={cx("product-name")}>{product.name}</h5>
                    <p
                      className={cx("original-price")}
                      style={{
                        color: product.productPrice?.salePrice
                          ? "var(--text-color)"
                          : "var(--primary-color)",
                      }}
                    >
                      {product.productPrice?.retailPrice?.toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      ) ?? "Đang cập nhật..."}
                    </p>

                    <Grid container>
                      <p
                        className={cx("sale-price")}
                        style={{
                          color: !product.productPrice?.salePrice
                            ? "var(--text-color)"
                            : "var(--primary-color)",
                        }}
                      >
                        {product.productPrice?.salePrice?.toLocaleString(
                          "it-IT",
                          {
                            style: "currency",
                            currency: "VND",
                          }
                        )}
                      </p>
                      <p
                        className={cx("sale-price")}
                        style={{
                          color: !product.productPrice?.salePrice
                            ? "var(--text-color)"
                            : "var(--primary-color)",
                          fontSize: "1.2rem",
                        }}
                      >
                        {product.salePrice}{" "}
                        <span>
                          {product.weight} {""}
                          {product.unit}
                        </span>
                      </p>
                    </Grid>

                    <p className={cx("feedBack")}>
                      <span className={cx("feedBack-star")}>
                        {renderStarIcons(product.rating)} <br />
                      </span>{" "}
                      30 đã bán
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
    </DefaultLayOut>
  );
};

export default ProductSearchPage;