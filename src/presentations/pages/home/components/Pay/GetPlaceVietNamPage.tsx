import { Box, Grid, Tab } from "@mui/material";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useFetchProvinceList from "../../../../../data/api/Place/useFetchProvince";
import { Button } from "antd";
import useFetchDistrictByProvinceCode from "../../../../../data/api/Place/useFetchDistrictByProvinceCode";
import useFetchWardByDistrictCode from "../../../../../data/api/Place/useFetchWardByDistrictCode";
import UserAccountType from "../../../../../data/types/UserAccount/UserAccountType";

// Styles
import classNames from "classnames/bind";
import styles from "./PayProduct.module.scss";

const cx = classNames.bind(styles);

interface GetPlaceVietNamPageProps {
  user: UserAccountType;
  setUser: React.Dispatch<React.SetStateAction<UserAccountType>>;
}

const GetPlaceVietNamPage = (props: GetPlaceVietNamPageProps) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //   Get province
  const { provinceList } = useFetchProvinceList({});
  const { districtList } = useFetchDistrictByProvinceCode({
    code: props.user.provinceCode,
  });

  const { wardList } = useFetchWardByDistrictCode({
    code: props.user.districtCode,
  });

  return (
    <Grid className={cx("account-dropdown-wrapper")}>
      <Box width={"100%"} height={"100%"}>
        <TabContext value={value}>
          <Box
            sx={{
              buserBottom: 1,
              buserColor: "divider",
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
                    let newUser = { ...props.user };
                    newUser.provinceCode = province.code;
                    props.setUser(newUser);
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
                    let newUser = { ...props.user };
                    newUser.districtCode = district.code;
                    props.setUser(newUser);
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
                    let newUser = { ...props.user };
                    newUser.wardCode = ward.code;
                    props.setUser(newUser);
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

export default GetPlaceVietNamPage;
