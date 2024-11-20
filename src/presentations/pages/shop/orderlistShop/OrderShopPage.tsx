// External files
import React, { useState } from "react";
import { message } from "antd";

import type { MenuProps } from "antd";
import { Grid } from "@mui/material";

import InfoMyShopLayout from "../InfoMyShopLayout";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import type { TimeRangePickerProps } from "antd";
import { DatePicker } from "antd";
import AllOrderShopPage from "./allOrderShop/AllOrderShopPage";

// Styles
import classNames from "classnames/bind";
import styles from "./OrderShop.module.scss";

const cx = classNames.bind(styles);
//xóa ngày tháng năm

// show calender

//menu dropdown
const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
};
const items: MenuProps["items"] = [
  {
    label: "Tên người mua",
    key: "1",
  },
  {
    label: "Số điện thoại",
    key: "2",
  },
  {
    label: "Trạng thái đơn hàng",
    key: "3",
  },
  {
    label: "Phương thức vận chuyển",
    key: "4",
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const OrderShopPage = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <InfoMyShopLayout>
      <Grid>
        <Grid className={cx("wapper")}>
          <h4 className={cx("heading")}>Danh sách đơn hàng</h4>
          <Grid className={cx("tab-wrapper")}>
            <AllOrderShopPage />
          </Grid>
        </Grid>
      </Grid>
    </InfoMyShopLayout>
  );
};

export default OrderShopPage;
