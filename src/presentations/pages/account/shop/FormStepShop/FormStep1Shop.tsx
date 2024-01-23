import React, { useState } from "react";
import { Grid } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useFetchShippingMethod from "../../../../../data/api/ShippingMethod/useFetchShippingMethod";
import DefaultDropDown from "../../../../components/defaultDropDown";
import GetPlaceVietNamCollection from "./GetPlaceVNCollection";
import useFetchProvinceList from "../../../../../data/api/Place/useFetchProvince";
import useFetchDistrictByProvinceCode from "../../../../../data/api/Place/useFetchDistrictByProvinceCode";
import useFetchWardByDistrictCode from "../../../../../data/api/Place/useFetchWardByDistrictCode";
// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";
import { Button } from "antd";

const cx = classNames.bind(styles);

interface FormStep1ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep1Shop = (props: FormStep1ShopProps) => {
  const { shippingMethod } = useFetchShippingMethod({});
  const handleCheckboxChange = (index: number, isLocked: boolean) => {
    const updatedDeliveryMethods = [...(props.shop.deliveryMethods || [])];

    // Update the specific delivery method based on the checkbox index
    updatedDeliveryMethods[index] = {
      id: shippingMethod[index].id,
      isLocked: isLocked,
    };

    props.setShop({
      ...props.shop,
      deliveryMethods: updatedDeliveryMethods,
    });
  };

  const [showPlace, setShowPlace] = useState(false);
  const { provinceList } = useFetchProvinceList({});
  const { districtList } = useFetchDistrictByProvinceCode({
    code: props.shop.collectionLocation?.provinceCode,
  });

  const { wardList } = useFetchWardByDistrictCode({
    code: props.shop.collectionLocation?.districtCode,
  });
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
        <label htmlFor="address">
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Địa chỉ lấy hàng
        </label>
        <Grid display={"flex"} flexDirection={"column"} flex={"0.61"}>
          <DefaultDropDown
            visible={showPlace}
            childrenRender={
              <GetPlaceVietNamCollection
                shop={props.shop}
                setShop={props.setShop}
              />
            }
          >
            <Button
              onClick={() => setShowPlace(!showPlace)}
              className={cx("addressBtn")}
            >
              <p>
                {provinceList.map(
                  (province, i) =>
                    province.code ==
                      props.shop.collectionLocation?.provinceCode &&
                    province.name
                )}{" "}
                {props.shop.collectionLocation?.provinceCode && "/"}
                {districtList.map(
                  (district, i) =>
                    district.code ==
                      props.shop.collectionLocation?.districtCode &&
                    district.name
                )}
                {props.shop.collectionLocation?.districtCode && "/"}
                {wardList.map(
                  (ward, i) =>
                    ward.code == props.shop.collectionLocation?.wardCode &&
                    ward.name
                )}
              </p>
              <ArrowDropDownIcon />
            </Button>
          </DefaultDropDown>
          <input
            value={props.shop.collectionLocation?.address || ""}
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.collectionLocation = newShop.collectionLocation || {}; // Ensure collectionLocation is defined
              newShop.collectionLocation.address = e.currentTarget.value;
              props.setShop(newShop);
            }}
            type="text"
            id="address"
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

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="type">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Phương thức vận chuyển
        </label>
        <Grid className={cx("radio-wrapper")}>
          {shippingMethod.map((item, index) => (
            <React.Fragment key={index}>
              <input
                className={cx("radio-btn")}
                type="checkbox"
                value={item.title}
                checked={
                  props.shop.deliveryMethods &&
                  props.shop.deliveryMethods[index]?.isLocked
                }
                onChange={(e) => {
                  handleCheckboxChange(index, e.target.checked);
                }}
                id={`method-${index}`}
                name={`method-${index}`}
              />
              <label className={cx("label-radio")} htmlFor={`method-${index}`}>
                {item.title}
              </label>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </form>
  );
};

export default FormStep1Shop;
