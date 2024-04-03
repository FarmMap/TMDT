import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
import { Button, Input } from "antd";
// Styles
import classNames from "classnames/bind";
import styles from "./OwnerInforShopPage.module.scss";
import useFetchMyShop from "../../../../../data/api/Shop/useFetchMyShop";

const cx = classNames.bind(styles);
const OwnerInforShopPage = () => {
  const { myShop } = useFetchMyShop({});
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
              value={`${myShop.identity?.fullName}`}
            />
          </Grid>
          <Grid lg={5} ml={"4rem"}>
            <label htmlFor="phone">Số điện thoại</label>
            <Grid display={"flex"} alignItems={"center"} width={"419px"}>
              <Input
                style={{ marginTop: "6px", background: "#fff", color: "#000" }}
                id="phone"
                disabled
                value={`${myShop.phone}`}
              />
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
              value={`${myShop.identity?.number}`}
            />
          </Grid>
          <Grid lg={5} ml={"4rem"}>
            <label htmlFor="email">Địa chỉ email</label>
            <Grid display={"flex"} alignItems={"center"} width={"419px"}>
              <Input
                style={{ marginTop: "6px", background: "#fff", color: "#000" }}
                id="email"
                disabled
                value={`${myShop.user?.email}`}
              />
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
              value={`${myShop.taxCode}`}
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default OwnerInforShopPage;
