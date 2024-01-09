import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
import { Button, Input } from "antd";
// Styles
import classNames from "classnames/bind";
import styles from "./OwnerInforShopPage.module.scss";

const cx = classNames.bind(styles);
const OwnerInforShopPage = () => {
  return (
    <Grid>
      <form action="">
        <Grid container>
          <Grid lg={5}>
            <label htmlFor="name">Họ và tên chủ cửa hàng</label>
            <Input
              style={{ marginTop: "6px", background: "#fff", color: "#000" }}
              disabled
              id="name"
              value={"Nguyễn Thiên Ân"}
            />
          </Grid>
          <Grid lg={5} ml={"4rem"}>
            <label htmlFor="phone">Số điện thoại</label>
            <Grid display={"flex"} alignItems={"center"} width={"419px"}>
              <Input
                style={{ marginTop: "6px", color: "var(--text-color)" }}
                id="phone"
                disabled
                value={"0984752384"}
              />
              <Button
                style={{
                  margin: "0.5rem 0 0 1.2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={"2.6rem"}>
          <Grid lg={5}>
            <label htmlFor="cmnd">Số CMND/CCCD</label>
            <Input
              style={{ marginTop: "6px", background: "#fff", color: "#000" }}
              disabled
              id="cmnd"
              value={"05489921556"}
            />
          </Grid>
          <Grid lg={5} ml={"4rem"}>
            <label htmlFor="email">Địa chỉ email</label>
            <Grid display={"flex"} alignItems={"center"} width={"419px"}>
              <Input
                style={{ marginTop: "6px", color: "var(--text-color)" }}
                id="email"
                disabled
                value={"an@gmail.com"}
              />
              <Button
                style={{
                  margin: "0.5rem 0 0 1.2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={"2.6rem"}>
          <Grid lg={5}>
            <label htmlFor="name">Mã số thuế</label>
            <Input
              style={{ marginTop: "6px", background: "#fff", color: "#000" }}
              disabled
              id="name"
              value={"384912"}
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default OwnerInforShopPage;
