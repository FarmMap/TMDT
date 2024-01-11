import React from "react";
import { Grid, Button } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";

// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";

const cx = classNames.bind(styles);

interface FormStep2ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep2Shop = (props: FormStep2ShopProps) => {
  return (
    <form className={cx("form-wrapper")}>
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
        <label htmlFor="companyName">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Tên công ty
        </label>
        <input
          value={props.shop.companyName}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.companyName = e.currentTarget.value;
            props.setShop(newShop);
          }}
          type="text"
          id="companyName"
          placeholder="Nhập tên công ty (Không ghi tắt)"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="phone">
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Địa chỉ lấy hàng
        </label>
        <input
          value={
            props.shop.pickupAddress ? props.shop.pickupAddress.join("\n") : ""
          }
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.pickupAddress = e.currentTarget.value.split("\n");
            props.setShop(newShop);
          }}
          type="text"
          id="pickupAddress"
          placeholder="Nhập địa chỉ lấy hàng"
        />
      </Grid>

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="email">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Email
        </label>
        <input
          value={props.shop.email}
          type={"email"}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.email = e.currentTarget.value;
            props.setShop(newShop);
          }}
          id="email"
          placeholder="Nhập email"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="taxCode">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Số điện thoại
        </label>
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
    </form>
  );
};

export default FormStep2Shop;
