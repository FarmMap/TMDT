// External files
import React, { useState } from "react";
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
import SuccessProductPage from "./successProduct/SuccessProduct";

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
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                >
                  <TabList
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    sx={{ xs: { lg: "block" } }}
                    onChange={handleChange}
                  >
                    <Tab
                      label="Chưa nhận hàng"
                      style={{ fontSize: "1.2rem", textTransform: "unset" }}
                      value="1"
                    />

                    <Tab
                      label="Đã nhận hàng"
                      style={{ fontSize: "1.2rem", textTransform: "unset" }}
                      value="2"
                    />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <WaitProductListPage />
                </TabPanel>
                <TabPanel value="2">
                  <SuccessProductPage />
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </AccountPage>
  );
};

export default OrderShopListPage;
