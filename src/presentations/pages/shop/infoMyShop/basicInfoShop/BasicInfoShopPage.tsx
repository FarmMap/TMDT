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
        <Grid className={cx("background")}></Grid>
        {/* <input hidden type="file" id="wallpapper" /> */}
        {/* <label htmlFor="wallpapper">
          <AddAPhotoOutlinedIcon />
          Cập nhật ảnh bìa
        </label> */}

        <Grid className={cx("avatar-wrapper")}>
          <DefaultAvatar superLarge avatar={images.defalutShopAvt} />
          {/* <input hidden type="file" id="avatar" /> */}
          <Grid className={cx("avatar-container")}>
            {/* <label htmlFor="avatar">
              <AddAPhotoOutlinedIcon />
            </label> */}
            <Grid>
              <p className={cx("name-shop")}>{myShop.name}</p>
              <p className={cx("link-shop")}>
                {myShop.businessType == "INDIVIDUAL"
                  ? "Cá nhân"
                  : "Doanh nghiệp"}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container marginTop={"12rem"}>
        <Grid className={cx("about-shop-wrap")}>
          <p>Tên công ty</p>
          <p>Địa chỉ shop</p>
          <p>Loại hình vận chuyển</p>
        </Grid>

        <Grid className={cx("about-shop-wrap")} style={{ flex: "1" }}>
          <span style={{ color: "var(--primary-color)", fontWeight: "600" }}>
            {myShop.companyName}
          </span>
          <span style={{ color: "#000", fontWeight: "600" }}>
            {myShop.locations?.map(
              (item, i) =>
                item.type === "STORE" && (
                  <span>
                    {item.address} - {item.province?.fullName} -{" "}
                    {item.district?.fullName} - {item.ward?.fullName}
                  </span>
                )
            )}
          </span>
          <span style={{ color: "var(--text-color)", fontWeight: "600" }}>
            {myShop.deliveryOptions?.map((item, i) => (
              <span key={i}>Vận chuyển {item.deliveryMethod.title}</span>
            ))}
          </span>
          {/* <Grid width={"100%"} style={{ textAlign: "right" }}>
            <button>Cập nhật</button>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasicInfoShopPage;
