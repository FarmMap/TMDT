// Ex
import { Grid } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// IN
// Styles
import classNames from "classnames/bind";
import styles from "./SaleShopPage.module.scss";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";
import images from "../../../../../assets/images";
import useFetchShopList from "../../../../../data/api/Shop/useFetchShopList";

const cx = classNames.bind(styles);

const SaleShopPage = () => {
  const { shopList } = useFetchShopList({
    page: 1,
  });
  return (
    <Grid className={cx("wrapper")}>
      <Grid className={cx("header")}>
        <h5>Shop bán chạy nhất</h5>
        <NavLink to={"/"}>
          Xem tất cả <ArrowForwardIosIcon />
        </NavLink>
      </Grid>

      <Grid className={cx("container")}>
        <Carousel arrows infinite={false}>
          <Grid display={"flex !important"} container columns={12} spacing={2}>
            {shopList.map((shop, i) => (
              <Grid key={i} item lg={3} sm={3}>
                <Grid className={cx("product-card")}>
                  <Grid className={cx("shop-relative")}>
                    <Grid className={cx("shop-absolute")} display={"flex"}>
                      <img src={images.defalutShopAvt} alt="Chavi" />
                      <Grid className={cx("shopInfo-wrapper")}>
                        <h4>{shop.name}</h4>
                        <span>5.0 ⭐ Xếp Hạng</span>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid className={cx("about-shop")}>
                    <p>
                      {" "}
                      <span>1</span> Đánh Giá
                    </p>
                    <p>
                      <span>2</span> Sản Phẩm
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default SaleShopPage;
