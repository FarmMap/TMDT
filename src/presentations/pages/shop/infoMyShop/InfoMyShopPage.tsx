import React, { useState } from "react";
import InfoMyShopLayout from "../InfoMyShopLayout";
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicInfoShopPage from "./basicInfoShop/BasicInfoShopPage";
import OwnerInforShopPage from "./ownerInfoShop/OwnerInforShopPage";
// Styles
import classNames from "classnames/bind";
import styles from "./InfoMyShopPage.module.scss";

const cx = classNames.bind(styles);

const InfoMyShopPage = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <InfoMyShopLayout>
      <Grid>
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
                    label="Thông tin cơ bản"
                    style={{ fontSize: "1.2rem", textTransform: "unset" }}
                    value="1"
                  />

                  <Tab
                    label="Thông tin chủ shop"
                    style={{ fontSize: "1.2rem", textTransform: "unset" }}
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <BasicInfoShopPage />
              </TabPanel>
              <TabPanel value="2">
                <OwnerInforShopPage />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </InfoMyShopLayout>
  );
};

export default InfoMyShopPage;
