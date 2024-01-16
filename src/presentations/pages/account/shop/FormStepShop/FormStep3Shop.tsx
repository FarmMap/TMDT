import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import ShopType from "../../../../../data/types/Shop/ShopType";
import { Button } from "antd";

import ImageIcon from "@mui/icons-material/Image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";
import images from "../../../../../assets/images";

const cx = classNames.bind(styles);

interface FormStep3ShopProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const FormStep3Shop = (props: FormStep3ShopProps) => {
  const [choosen, setChoosen] = useState("");

  // Ref để tham chiếu tới input file
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  return (
    <form className={cx("form-wrapper")}>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="type">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Hình Thức Định Danh
        </label>
        <Grid className={cx("radio-wrapper")}>
          <input
            className={cx("radio-btn")}
            type="radio"
            value="Căn Cước Công Dân"
            checked={choosen === "Căn Cước Công Dân"}
            onChange={(e) => {
              setChoosen("Căn Cước Công Dân");
            }}
            id="cccd"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="cccd">
            Căn Cước Công Dân
          </label>
          <input
            style={{ marginLeft: "7rem" }}
            className={cx("radio-btn")}
            type="radio"
            value="CMND"
            checked={choosen === "Chứng Minh Nhân Dân"}
            onChange={(e) => {
              setChoosen("Chứng Minh Nhân Dân");
            }}
            id="cmnd"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="cmnd">
            Chứng Minh Nhân Dân
          </label>
          <input
            style={{ marginLeft: "9rem" }}
            className={cx("radio-btn")}
            type="radio"
            value="Hộ chiếu"
            checked={choosen === "Hộ Chiếu"}
            onChange={(e) => {
              setChoosen("Hộ Chiếu");
            }}
            id="hc"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="hc">
            Hộ chiếu
          </label>
        </Grid>
      </Grid>

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="identityCode">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Số {choosen}
        </label>
        <input
          value={props.shop.identityCode ?? ""}
          type={"number"}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.identityCode = e.currentTarget.value;
            props.setShop(newShop);
          }}
          id="identityCode"
          placeholder="Nhập vào (12 kí tự)"
        />
      </Grid>

      <Grid className={cx("input-wrapper")}>
        <label htmlFor="fullName">
          {" "}
          <span style={{ color: "var(--second-color)", marginRight: "0.4rem" }}>
            *
          </span>
          Họ & Tên
        </label>
        <input
          value={props.shop.fullName ?? ""}
          type={"text"}
          onChange={(e) => {
            let newShop = { ...props.shop };
            newShop.fullName = e.currentTarget.value;
            props.setShop(newShop);
          }}
          id="fullName"
          placeholder="Nhập họ và tên theo CMND/CCCD/Hộ Chiếu"
        />
      </Grid>

      <Grid className={cx("input-wrapper")} justifyContent={"unset"} pl={"19%"}>
        <label htmlFor="">
          {" "}
          <p style={{ textAlign: "right" }}>
            {" "}
            <span
              style={{ color: "var(--second-color)", marginRight: "0.4rem" }}
            >
              *
            </span>{" "}
            Hình chụp của thẻ <br /> CMND/CCCD/Hộ Chiếu
          </p>
        </label>
        <Grid display={"flex"} flexDirection={"column"}>
          <label
            htmlFor="file-input"
            style={{
              border: props.shop.identity
                ? "none"
                : "1px dashed var(--border-color) ",
            }}
            className={cx("file-input-label")}
          >
            {props.shop.identity ? (
              <Grid width={"100%"} height={"100%"} position={"relative"}>
                <img
                  src={
                    props.shop.identity instanceof File
                      ? URL.createObjectURL(props.shop.identity)
                      : props.shop.identity || "" // Use an empty string if farm.image is null
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
                      identity: undefined,
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
                  identity: file, // Set to the selected File object
                }));
              }
            }}
          />
        </Grid>
        <Grid className={cx("instruct-img-wrap")}>
          {" "}
          <img src={images.cccdImg} alt="cccd" />
        </Grid>
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor=""></label>
        <Grid
          flex={"0.6"}
          fontSize={"1.2rem"}
          color={"#999999"}
          textAlign={"justify"}
        >
          {" "}
          Vui lòng cung cấp ảnh bạn cầm CMND/CCCD/Hộ chiếu như ảnh mẫu. Các
          thông tin trong CMND/CCCD/Hộ chiếu và hình ảnh của bạn phải được hiển
          thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)
        </Grid>
      </Grid>

      <Grid className={cx("input-wrapper")} justifyContent={"unset"} pl={"19%"}>
        <label htmlFor="">
          {" "}
          <p style={{ textAlign: "right" }}>
            {" "}
            <span
              style={{ color: "var(--second-color)", marginRight: "0.4rem" }}
            >
              *
            </span>{" "}
            Ảnh đang cầm <br /> CMND/CCCD/Hộ Chiếu
          </p>
        </label>
        <Grid display={"flex"} flexDirection={"column"}>
          <label
            htmlFor="file-input2"
            style={{
              border: props.shop.avatar
                ? "none"
                : "1px dashed var(--border-color) ",
            }}
            className={cx("file-input-label")}
          >
            {props.shop.avatar ? (
              <Grid width={"100%"} height={"100%"} position={"relative"}>
                <img
                  src={
                    props.shop.avatar instanceof File
                      ? URL.createObjectURL(props.shop.avatar)
                      : props.shop.avatar || "" // Use an empty string if farm.image is null
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
                      avatar: undefined,
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
            ref={fileInputRef2}
            id="file-input2"
            onChange={(e) => {
              const fileInput = e.target;
              if (fileInput && fileInput.files && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                // Cập nhật state shop.image với File ảnh đã chọn
                props.setShop((prevShop) => ({
                  ...prevShop,
                  avatar: file, // Set to the selected File object
                }));
              }
            }}
          />
        </Grid>
        <Grid className={cx("instruct-img-wrap")}>
          {" "}
          <img src={images.avtAndcccdImg} alt="cccd" />
        </Grid>
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor=""></label>
        <Grid
          flex={"0.6"}
          fontSize={"1.2rem"}
          color={"#999999"}
          textAlign={"justify"}
        >
          {" "}
          Vui lòng cung cấp ảnh bạn cầm CMND/CCCD/Hộ chiếu như ảnh mẫu. Các
          thông tin trong CMND/CCCD/Hộ chiếu và hình ảnh của bạn phải được hiển
          thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)
        </Grid>
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ background: "#FAFAFA" }}
        padding={"8px"}
      >
        <input
          className={cx("radio-btn")}
          type="checkbox"
          value=""
          // checked={choosen === "Căn Cước Công Dân"}
          onChange={(e) => {}}
          id=""
          name="radio"
        />
        <p style={{ marginLeft: "0.8rem" }}>
          Tôi xác nhận tất cả dữ liệu đã cung cấp là chính xác và trung thực.
          Tôi đã đọc và đồng ý với Chính Sách Bảo Mật của AgriMarket.
        </p>
      </Grid>
    </form>
  );
};

export default FormStep3Shop;
