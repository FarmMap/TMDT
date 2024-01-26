import React, { useRef, useState } from "react";
import { Grid, Select, MenuItem, Box, Tab } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "antd";
import DefaultDropDown from "../../../../components/defaultDropDown";

import GetPlaceVietNamPage from "./GetPlaceVietNamPage";
import useFetchProvinceList from "../../../../../data/api/Place/useFetchProvince";
import useFetchDistrictByProvinceCode from "../../../../../data/api/Place/useFetchDistrictByProvinceCode";
import useFetchWardByDistrictCode from "../../../../../data/api/Place/useFetchWardByDistrictCode";
import ImageIcon from "@mui/icons-material/Image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";

const cx = classNames.bind(styles);

interface FormStep2ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep2Shop = (props: FormStep2ShopProps) => {
  const [showPlace, setShowPlace] = useState(false);
  const { provinceList } = useFetchProvinceList({});
  const { districtList } = useFetchDistrictByProvinceCode({
    code: props.shop.storeLocation?.provinceCode,
  });

  const { wardList } = useFetchWardByDistrictCode({
    code: props.shop.storeLocation?.districtCode,
  });

  // Ref để tham chiếu tới input file
  const fileInputRef = useRef(null);
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
            checked={props.shop.businessType === "INDIVIDUAL"}
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.businessType = "INDIVIDUAL";
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
            checked={props.shop.businessType === "ENTERPRISE"}
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.businessType = "ENTERPRISE";
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
                    province.code == props.shop.storeLocation?.provinceCode &&
                    province.name
                )}{" "}
                {props.shop.storeLocation?.provinceCode && "/"}
                {districtList.map(
                  (district, i) =>
                    district.code == props.shop.storeLocation?.districtCode &&
                    district.name
                )}
                {props.shop.storeLocation?.districtCode && "/"}
                {wardList.map(
                  (ward, i) =>
                    ward.code == props.shop.storeLocation?.wardCode && ward.name
                )}
              </p>
              <ArrowDropDownIcon />
            </Button>
          </DefaultDropDown>
          <input
            value={props.shop.storeLocation?.address || ""}
            onChange={(e) => {
              let newShop = { ...props.shop };
              newShop.storeLocation = newShop.storeLocation || {}; // Ensure storeLocation is defined
              newShop.storeLocation.address = e.currentTarget.value;
              newShop.storeLocation.type = "STORE";
              props.setShop(newShop);
            }}
            type="text"
            id="address"
            placeholder="Nhập địa chỉ đăng ký kinh doanh"
          />
        </Grid>
      </Grid>

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="emailInvoice">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Email nhận hóa đơn điện tử
        </label>
        <input
          value={props.shop.emailInvoice ?? ""}
          type={"text"}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.emailInvoice = e.currentTarget.value;
            props.setShop(newShop);
          }}
          id="emailInvoice"
          placeholder="Nhập vào"
        />
      </Grid>

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="taxCode">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Mã số thuế
        </label>
        <input
          value={props.shop.taxCode ?? ""}
          type={"number"}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.taxCode = e.currentTarget.value;
            props.setShop(newShop);
          }}
          id="taxCode"
          placeholder="Nhập mã số thuế (14 kí tự)"
        />
      </Grid>

      <Grid className={cx("input-wrapper")}>
        <label htmlFor=""> Giấy phép đăng ký kinh doanh (nếu có)</label>
        <Grid display={"flex"} flexDirection={"column"} flex={"0.6"}>
          <label
            htmlFor="file-input"
            style={{
              border: props.shop.businessLicense
                ? "none"
                : "1px dashed var(--border-color) ",
            }}
            className={cx("file-input-label")}
          >
            {props.shop.businessLicense ? (
              <Grid width={"100%"} height={"100%"} position={"relative"}>
                <img
                  src={
                    props.shop.businessLicense instanceof File
                      ? URL.createObjectURL(props.shop.businessLicense)
                      : props.shop.businessLicense || "" // Use an empty string if farm.image is null
                  }
                  alt="Chọn hình ảnh"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    margin: "1.2rem 0 1.2rem 0",
                  }}
                />
                <Button
                  className={cx("deleteImg-btn")}
                  onClick={() => {
                    // Handle image deletion here
                    props.setShop((prevShop) => ({
                      ...prevShop,
                      businessLicense: undefined,
                    }));
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </Button>
              </Grid>
            ) : (
              <ImageIcon className={cx("img-icon")} />
            )}
          </label>

          <input
            hidden
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={fileInputRef}
            id="file-input"
            onChange={(e) => {
              const fileInput = e.target;
              if (fileInput && fileInput.files && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                // Cập nhật state shop.image với File ảnh đã chọn
                props.setShop((prevShop) => ({
                  ...prevShop,
                  businessLicense: file, // Set to the selected File object
                }));
              }
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default FormStep2Shop;
