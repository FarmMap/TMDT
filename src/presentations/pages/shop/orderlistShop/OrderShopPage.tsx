// External files
import React , {useState } from "react";
import { Button, Input, Dropdown, Space, message } from 'antd';
import { DownOutlined, ReloadOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// Styles
import classNames from "classnames/bind";
import styles from "./OrderShop.module.scss";
import InfoMyShopLayout from "../InfoMyShopLayout";
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { TimeRangePickerProps } from 'antd';
import { DatePicker } from 'antd';
import AllOrderShopPage from "./allOrderShop/AllOrderShopPage";
import WaitOrderShopPage from "./waitordershop/WaitOrderShopPage";
import ConvertOrderShopPage from "./convertOrdershop/ConvertOrderShopPage";

const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);
//xóa ngày tháng năm
const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
// show calender
const rangePresets: TimeRangePickerProps['presets'] = [
  { label:  'Hôm qua', value: [dayjs().add(-1, 'd'), dayjs()] },
  { label: '7 ngày qua', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '14 ngày qua', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: '30 ngày qua', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: '90 ngày qua', value: [dayjs().add(-90, 'd'), dayjs()] },
];
//menu dropdown
const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items: MenuProps['items'] = [
  {
    label: 'Tên người mua',
    key: '1',
  },
  {
    label: 'Số điện thoại',
    key: '2',

  },
  {
    label: 'Trạng thái đơn hàng',
    key: '3',
    
  },
  {
    label: 'Phương thức vận chuyển',
    key: '4',
   
   
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
                <Grid className={cx("menu-item")}>
                  <Grid className={cx("menu-input")}>
                    <Space.Compact size="large">
                      <Input placeholder="Mã đơn hàng" />
                      <RangePicker presets={rangePresets} onChange={onRangeChange} />
                      <Dropdown menu={menuProps}>
                        <Button className={cx("dropdown")}>
                          <Space >
                            Bộ lọc nâng cao
                            <DownOutlined rev={undefined} />
                          </Space>
                        </Button>
                      </Dropdown>
                    </Space.Compact>
                  </Grid>                  
                  <Button className={cx("reload")} type="primary"  icon={<ReloadOutlined rev={undefined} />} size="large" />
                  <Button  className={cx("seacrh")} type="primary">Tìm kiếm</Button>                            
                </Grid>   
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
                            label="Tất cả"
                            style={{ fontSize: "1.2rem", textTransform: "unset" }}
                            value="1"
                          />

                          <Tab
                            label="Chờ xác nhận"
                            style={{ fontSize: "1.2rem", textTransform: "unset" }}
                            value="2"
                          />
                          <Tab
                            label="Vận chuyển"
                            style={{ fontSize: "1.2rem", textTransform: "unset" }}
                            value="3"
                          />
                          <Tab
                            label="Gặp sự cố"
                            style={{ fontSize: "1.2rem", textTransform: "unset" }}
                            value="4"
                          />
                          <Tab
                            label="Đơn hoàn tất"
                            style={{ fontSize: "1.2rem", textTransform: "unset" }}
                            value="5"
                          />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <AllOrderShopPage />
                      </TabPanel>
                      <TabPanel value="2">
                      <WaitOrderShopPage />
                      </TabPanel>
                      <TabPanel value="3">
                      <ConvertOrderShopPage />
                      </TabPanel>
                      <TabPanel value="4">
                        <WaitOrderShopPage />
                      </TabPanel>
                      <TabPanel value="5">
                        <WaitOrderShopPage />
                      </TabPanel>
                    </TabContext>
                  </Box>
        </Grid>
            </Grid>
        </Grid>
    </InfoMyShopLayout>    
  );
};

export default OrderShopPage;
