import React, {useState} from 'react'
import InfoMyShopLayout from '../InfoMyShopLayout'
import { Grid } from "@mui/material";
import { Button, Dropdown, Input, MenuProps, Space, message } from 'antd';
import AddIcon from '@mui/icons-material/Add';
import classNames from "classnames/bind";
import styles from "./ProductShop.module.scss";
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import Table, { ColumnsType } from 'antd/es/table';


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
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};


const items: MenuProps['items'] = [
    {
        label: '1st menu item',
        key: '1',

    },
    {
        label: '2nd menu item',
        key: '2',

    },
    {
        label: '3rd menu item',
        key: '3',

        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',

    },
];
const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const menuProps = {
    items,
    onClick: handleMenuClick,
};


const ProductShopPage = () => {
    const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
    return (
        <InfoMyShopLayout>
            <Grid>
                <Grid className={cx("wapper")}>
                    <Grid className={cx("heading-sidebar")}>
                        <h4>Danh sách sản phẩm</h4>
                        <Button type="primary"><AddIcon /><span>Thêm sản phẩm</span></Button>
                    </Grid>
                    <Grid className={cx("menu-item")}>
                        <Input className={cx("input-search")} placeholder="Tìm kiếm theo tên sản phẩm, mã sản phẩm" prefix={<SearchOutlined rev={undefined} />} />
                        <Space.Compact>
                            <Dropdown menu={menuProps}>
                                <Button className={cx("dropdown")}>
                                    <Space>
                                        Loại sản phẩm
                                        <DownOutlined rev={undefined} />
                                    </Space>
                                </Button>
                            </Dropdown>
                            <Dropdown menu={menuProps}>
                                <Button className={cx("dropdown")}>
                                    <Space>
                                       Ngày tạo
                                        <DownOutlined rev={undefined} />
                                    </Space>
                                </Button>
                            </Dropdown>
                            <Dropdown menu={menuProps}>
                                <Button className={cx("dropdown")}>
                                    <Space >
                                        Nhãn hiệu
                                        <DownOutlined rev={undefined} />
                                    </Space>
                                </Button>
                            </Dropdown>
                            <Dropdown menu={menuProps}>
                                <Button className={cx("dropdown")}>
                                    <Space>
                                        Bộ lọc khác
                                        <DownOutlined rev={undefined} />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Space.Compact>

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
                </Grid>
            </Grid>
        </InfoMyShopLayout >
    )
}

export default ProductShopPage
