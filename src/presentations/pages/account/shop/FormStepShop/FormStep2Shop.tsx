import React, { useState } from "react";
import { Grid, Select, MenuItem, Box, Tab } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "antd";
import DefaultDropDown from "../../../../components/defaultDropDown";
// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";

import GetPlaceVietNamPage from "./GetPlaceVietNamPage";
import useFetchProvinceList from "../../../../../data/api/Place/useFetchProvince";
import useFetchDistrictByProvinceCode from "../../../../../data/api/Place/useFetchDistrictByProvinceCode";
import useFetchWardByDistrictCode from "../../../../../data/api/Place/useFetchWardByDistrictCode";

const cx = classNames.bind(styles);

interface FormStep2ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep2Shop = (props: FormStep2ShopProps) => {
  const [showPlace, setShowPlace] = useState(false);
  const { provinceList } = useFetchProvinceList({});
  const { districtList } = useFetchDistrictByProvinceCode({
    code: props.shop.provinceCode,
  });

  const { wardList } = useFetchWardByDistrictCode({
    code: props.shop.districtCode,
  });
  return (
    <form className={cx("form-wrapper")}>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="type">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Loại hình kinh doanh
        </label>
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
        <label htmlFor="address">
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Địa chỉ đăng ký kinh doanh
        </label>
        <Grid display={"flex"} flexDirection={"column"} flex={"0.61"}>
          <DefaultDropDown
            visible={showPlace}
            childrenRender={
              <GetPlaceVietNamPage shop={props.shop} setShop={props.setShop} />
            }
          >
            <Button
              onClick={() => setShowPlace(!showPlace)}
              className={cx("addressBtn")}
            >
              <p>
                {provinceList.map(
                  (province, i) =>
                    province.code == props.shop.provinceCode && province.name
                )}{" "}
                {props.shop.provinceCode && "/"}
                {districtList.map(
                  (district, i) =>
                    district.code == props.shop.districtCode && district.name
                )}
                {props.shop.districtCode && "/"}
                {wardList.map(
                  (ward, i) => ward.code == props.shop.wardCode && ward.name
                )}
              </p>
              <ArrowDropDownIcon />
            </Button>
          </DefaultDropDown>
          <input
            value={
              props.shop.pickupAddress
                ? props.shop.pickupAddress.join("\n")
                : ""
            }
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.pickupAddress = e.currentTarget.value.split("\n");
              props.setShop(newShop);
            }}
            type="text"
            id="pickupAddress"
            placeholder="Nhập địa chỉ đăng ký kinh doanh"
          />
        </Grid>
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
