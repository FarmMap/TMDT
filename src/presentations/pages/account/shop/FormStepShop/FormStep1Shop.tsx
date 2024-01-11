import React from "react";
import { Grid, Button } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";

// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";

const cx = classNames.bind(styles);

interface FormStep1ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep1Shop = (props: FormStep1ShopProps) => {
  return (
    <form className={cx("form-wrapper")}>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="name">Tên cửa hàng</label>
        <input
          value={props.shop.name}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.name = e.currentTarget.value;
            props.setShop(newShop);
          }}
          type="text"
          id="name"
          placeholder="Nhập tên cửa hàng"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="phone">Số điện thoại</label>
        <input
          value={props.shop.phone}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.phone = e.currentTarget.value;
            props.setShop(newShop);
          }}
          type="text"
          id="phone"
          placeholder="Nhập số điện thoại"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="type">Loại hình kinh doanh</label>
        <Grid className={cx("radio-wrapper")}>
          <input
            className={cx("radio-btn")}
            type="radio"
            value="Cá nhân"
            checked={props.shop.type === "INDIVIDUAL"}
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.type = "INDIVIDUAL";
              props.setShop(newShop);
            }}
            id="ca-nhan"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="ca-nhan">
            Cá nhân
          </label>
          <input
            className={cx("radio-btn")}
            type="radio"
            value="Doanh nghiệp"
            checked={props.shop.type === "ENTERPRISE"}
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.type = "ENTERPRISE";
              props.setShop(newShop);
            }}
            id="doanh-nghiep"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="doanh-nghiep">
            Doanh nghiệp
          </label>
        </Grid>
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="districtCode">Định danh</label>
        <input
          value={props.shop.districtCode}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.districtCode = e.currentTarget.value;
            props.setShop(newShop);
          }}
          type="text"
          id="districtCode"
          placeholder="Nhập định danh"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="taxCode">Mã số thuế</label>
        <input
          value={props.shop.taxCode}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.taxCode = e.currentTarget.value;
            props.setShop(newShop);
          }}
          type="text"
          id="taxCode"
          placeholder="Nhập mã số thuế"
        />
      </Grid>
    </form>
  );
};

export default FormStep1Shop;
