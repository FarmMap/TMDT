import { Box, Grid, Tab } from "@mui/material";
import React, { useState } from "react";
// Styles
import classNames from "classnames/bind";
import styles from "./FormStepShop.module.scss";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useFetchProvinceList from "../../../../../data/api/Place/useFetchProvince";
import { Button } from "antd";
import useFetchDistrictByProvinceCode from "../../../../../data/api/Place/useFetchDistrictByProvinceCode";
import ShopType from "../../../../../data/types/Shop/ShopType";
import useFetchWardByDistrictCode from "../../../../../data/api/Place/useFetchWardByDistrictCode";
const cx = classNames.bind(styles);

interface GetPlaceVietNamCollectionProps {
  shop: ShopType;
  setShop: React.Dispatch<React.SetStateAction<ShopType>>;
}

const GetPlaceVietNamCollection = (props: GetPlaceVietNamCollectionProps) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //   Get province
  const { provinceList } = useFetchProvinceList({});
  const { districtList } = useFetchDistrictByProvinceCode({
    code: props.shop.collectionLocation?.provinceCode,
  });

  const { wardList } = useFetchWardByDistrictCode({
    code: props.shop.collectionLocation?.districtCode,
  });

  return (
    <Grid className={cx("account-dropdown-wrapper")}>
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
                label="Tỉnh/Thành phố"
                style={{ fontSize: "1.2rem", textTransform: "unset" }}
                value="1"
              />

              <Tab
                label="Quận/Huyện"
                style={{ fontSize: "1.2rem", textTransform: "unset" }}
                value="2"
              />

              <Tab
                label="Phường/Xã"
                style={{ fontSize: "1.2rem", textTransform: "unset" }}
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid>
              {provinceList.map((province, i) => (
                <Button
                  onClick={(e) => {
                    let newShop = { ...props.shop };
                    newShop.collectionLocation =
                      newShop.collectionLocation || {}; // Ensure collectionLocation is defined
                    newShop.collectionLocation.provinceCode = province.code;
                    props.setShop(newShop);
                    handleChange(e, "2");
                  }}
                  style={{ margin: "0 1.2rem 1.2rem 0" }}
                  key={i}
                >
                  {province.name}
                </Button>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid>
              {districtList.map((district, i) => (
                <Button
                  onClick={(e) => {
                    let newShop = { ...props.shop };
                    newShop.collectionLocation =
                      newShop.collectionLocation || {}; // Ensure collectionLocation is defined
                    newShop.collectionLocation.districtCode = district.code;
                    props.setShop(newShop);
                    handleChange(e, "3");
                  }}
                  style={{ margin: "0 1.2rem 1.2rem 0" }}
                  key={i}
                >
                  {district.name}
                </Button>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="3">
            <Grid>
              {wardList.map((ward, i) => (
                <Button
                  onClick={(e) => {
                    let newShop = { ...props.shop };
                    newShop.collectionLocation =
                      newShop.collectionLocation || {}; // Ensure collectionLocation is defined
                    newShop.collectionLocation.wardCode = ward.code;
                    props.setShop(newShop);
                  }}
                  style={{ margin: "0 1.2rem 1.2rem 0" }}
                  key={i}
                >
                  {ward.name}
                </Button>
              ))}
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Grid>
  );
};

export default GetPlaceVietNamCollection;
