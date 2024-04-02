// External files
import React, { useState } from "react";
import { Button, Input, Dropdown, Space, message } from "antd";
import { DownOutlined, ReloadOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AccountPage from "../../../account/AccountPage";
import WaitProductListPage from "./waitproduct/WaitProductListPage";

// Styles
import classNames from "classnames/bind";
import styles from "./OrderShopList.module.scss";

const cx = classNames.bind(styles);

const OrderShopListPage = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <AccountPage>
      <Grid>
        <Grid className={cx("wapper")}>
          <h4 className={cx("heading")}>Danh sách đơn hàng</h4>
          <Grid className={cx("tab-wrapper")}>
            <Box width={"100%"} height={"100%"}>
              <WaitProductListPage />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </AccountPage>
  );
};

export default OrderShopListPage;
