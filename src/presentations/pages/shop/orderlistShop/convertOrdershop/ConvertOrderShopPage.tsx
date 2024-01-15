import React, { useState } from 'react';
import { Table } from 'antd';
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import type { ColumnsType } from 'antd/es/table';
import classNames from "classnames/bind";
import styles from "./ConvertOrderShop.module.scss";
import { Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

interface DataType {
    key: React.Key;
    encode: string;
    date: string;
    name: string;
    product: string;
    status: string;
    address: string;
    bill: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'encode',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Ngày tạo đơn',
        dataIndex: 'date',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'name',
    },
    {
        title: 'Sản phẩm',
        dataIndex: 'product',
    },
    {
        title: 'Trạng thái đơn hàng',
        dataIndex: 'status',
    },
    {
        title: 'Địa chỉ giao hàng',
        dataIndex: 'address',
    },
    {
        title: 'Hóa đơn',
        dataIndex: 'bill',
    },
];

const data: DataType[] = [
    {
        key: '1',
        encode: "G29840",
        date: "14-12-2023",
        name: "Nguyễn Văn A",
        product: "Cần câu cá",
        status: "Đang vận chuyển",
        address: "Bình Thuận",
        bill: "140.000 đ",
    },
    {
        key: '2',
        encode: "G255840",
        date: "1-1-2024",
        name: "Nguyễn Thiên Ân",
        product: "Sách dạy xếp bài",
        status: "Đã hoàn thành",
        address: "Đồng Nai",
        bill: "210.000 đ",
    },
    {
        key: '3',
        encode: "G11840",
        date: "10-1-2024",
        name: "Nguyễn Văn B",
        product: "Nồi cơm điện",
        status: "Đã hoàn trả",
        address: "Hồ Chí Minh",
        bill: "320.000 đ",
    },
    {
        key: '4',
        encode: "G225630",
        date: "11-1-2024",
        name: "Nguyễn Văn C",
        product: "Rau cả",
        status: "Đang vận chuyển",
        address: "Cần Thơ",
        bill: "2.140.000 đ",
    },

];
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const ConvertOrderShopPage = () => {
    const [value, setValue] = useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
    return (
        <Grid className={cx("wapper")}>
            <Grid className={cx("tab-wrapper")}>
                <Box width={"100%"} height={"100%"}  >
                    <TabContext  value={value}>
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
                                    label="Chờ lấy hàng"
                                    style={{ fontSize: "1.2rem", textTransform: "unset" }}
                                    value="2"
                                />
                                <Tab
                                    label="Đã lấy hàng"
                                    style={{ fontSize: "1.2rem", textTransform: "unset" }}
                                    value="3"
                                />
                                <Tab
                                    label="Đang giao hàng"
                                    style={{ fontSize: "1.2rem", textTransform: "unset" }}
                                    value="4"
                                />
                                
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Grid className={cx("menu-item")}>
                                <Grid className={cx("show-quantity")}>
                                    <p>Hiển thị</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            0
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                    <p>0/0 trên 0 đơn hàng</p>
                                </Grid>
                                <Grid className={cx("time-order")}>
                                    <p>Thời gian đặt hàng</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            Mới nhất
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid className={cx("table-list")}>
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={data}
                                />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2">
                        <Grid className={cx("menu-item")}>
                                <Grid className={cx("show-quantity")}>
                                    <p>Hiển thị</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            0
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                    <p>0/0 trên 0 đơn hàng</p>
                                </Grid>
                                <Grid className={cx("time-order")}>
                                    <p>Thời gian đặt hàng</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            Mới nhất
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid className={cx("table-list")}>
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={data}
                                />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="3">
                        <Grid className={cx("menu-item")}>
                                <Grid className={cx("show-quantity")}>
                                    <p>Hiển thị</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            0
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                    <p>0/0 trên 0 đơn hàng</p>
                                </Grid>
                                <Grid className={cx("time-order")}>
                                    <p>Thời gian đặt hàng</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            Mới nhất
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid className={cx("table-list")}>
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={data}
                                />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="4">
                        <Grid className={cx("menu-item")}>
                                <Grid className={cx("show-quantity")}>
                                    <p>Hiển thị</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            0
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                    <p>0/0 trên 0 đơn hàng</p>
                                </Grid>
                                <Grid className={cx("time-order")}>
                                    <p>Thời gian đặt hàng</p>
                                    <Button className={cx("dropdown")}>
                                        <Space >
                                            Mới nhất
                                            <DownOutlined rev={undefined} />
                                        </Space>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid className={cx("table-list")}>
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={data}
                                />
                            </Grid>
                        </TabPanel>

                    </TabContext>
                </Box>
            </Grid>

        </Grid>
    )
}

export default ConvertOrderShopPage
