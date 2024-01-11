import React from "react";
import { Grid, Button } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";

// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";
import useFetchShippingMethod from "../../../../../data/api/ShippingMethod/useFetchShippingMethod";

const cx = classNames.bind(styles);

interface FormStep1ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep1Shop = (props: FormStep1ShopProps) => {
  const { shippingMethod } = useFetchShippingMethod({});
  return (
    <form className={cx("form-wrapper")}>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="name">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Tên cửa hàng
        </label>
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

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="type">Phương thức vận chuyển</label>
        <Grid className={cx("radio-wrapper")}>
          <input
            className={cx("radio-btn")}
            type="checkbox"
            value="Cá nhân"
            checked={
              props.shop.shippingMethodIds?.includes(shippingMethod[0]?.id) ||
              false
            }
            onChange={(e) => {
              let newShop = { ...props.shop };
              const itemId = shippingMethod[0]?.id;
              if (!newShop.shippingMethodIds) {
                newShop.shippingMethodIds = [];
              }
              if (e.target.checked) {
                newShop.shippingMethodIds.push(itemId);
              } else {
                newShop.shippingMethodIds = newShop.shippingMethodIds.filter(
                  (id) => id !== itemId
                );
              }
              props.setShop(newShop);
            }}
            id="nhanh"
            name="nhanh"
          />

          <label className={cx("label-radio")} htmlFor="nhanh">
            {shippingMethod.map((item, i) => i === 0 && item.name)}
          </label>
          <input
            className={cx("radio-btn")}
            type="checkbox"
            value="Doanh nghiệp"
            checked={
              props.shop.shippingMethodIds?.includes(shippingMethod[1]?.id) ||
              false
            }
            onChange={(e) => {
              let newShop = { ...props.shop };
              const itemId = shippingMethod[1]?.id;
              if (!newShop.shippingMethodIds) {
                newShop.shippingMethodIds = [];
              }
              if (e.target.checked) {
                newShop.shippingMethodIds.push(itemId);
              } else {
                newShop.shippingMethodIds = newShop.shippingMethodIds.filter(
                  (id) => id !== itemId
                );
              }
              props.setShop(newShop);
            }}
            id="tiet-kiem"
            name="tiet-kiem"
          />
          <label className={cx("label-radio")} htmlFor="tiet-kiem">
            {shippingMethod.map((item, i) => i === 1 && item.name)}
          </label>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormStep1Shop;
