import React from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { Grid } from "@mui/material";
import images from "../../../../../assets/images";
import DefaultAvatar from "../../../../components/defaultAvatar";
import useFetchMyShop from "../../../../../data/api/Shop/useFetchMyShop";
import useFetchShippingMethod from "../../../../../data/api/ShippingMethod/useFetchShippingMethod";
// Styles
import classNames from "classnames/bind";
import styles from "./BasicInfoShopPage.module.scss";

const cx = classNames.bind(styles);
const BasicInfoShopPage = () => {
  const { myShop } = useFetchMyShop({});
  const { shippingMethod } = useFetchShippingMethod({});
  return (
    <Grid>
      <Grid className={cx("container")}>
        <img src={images.wallpapperDefault} alt="wallpapperDefault" />
        <input hidden type="file" id="wallpapper" />
        <label htmlFor="wallpapper">
          <AddAPhotoOutlinedIcon />
          Cập nhật ảnh bìa
        </label>

        <Grid className={cx("avatar-wrapper")}>
          <DefaultAvatar superLarge avatar={images.defalutShopAvt} />
          <input hidden type="file" id="avatar" />
          <Grid className={cx("avatar-container")}>
            <label htmlFor="avatar">
              <AddAPhotoOutlinedIcon />
            </label>
            <Grid>
              <p className={cx("name-shop")}>{myShop.name}</p>
              <a
                className={cx("link-shop")}
                target="_blank"
                href={"https://romano.vn/"}
                rel="noreferrer"
              >
                {`https://${myShop.name}.vn/`}
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container marginTop={"12rem"}>
        <Grid className={cx("about-shop-wrap")}>
          <p>Loại hình kinh doanh</p>
          <p>Loại hình vận chuyển</p>
          <p>Khẩu hiệu của shop</p>
        </Grid>

        <Grid className={cx("about-shop-wrap")} style={{ flex: "1" }}>
          <span style={{ color: "var(--primary-color)", fontWeight: "600" }}>
            {myShop.businessType == "INDIVIDUAL" ? "Cá nhân" : "Doanh nghiệp"}
          </span>
          <span style={{ color: "#000", fontWeight: "600" }}>
            Vận chuyển nhanh - Vận chuyển tiết kiệm
          </span>
          <input
            disabled
            style={{ flex: "1", width: "100%" }}
            value={"Khách hàng là thượng đế"}
          />
          <Grid width={"100%"} style={{ textAlign: "right" }}>
            <button>Cập nhật</button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasicInfoShopPage;
