import React, { useState } from 'react';
import { Grid } from "@mui/material";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import classNames from "classnames/bind";
import styles from "./AllOrderShop.module.scss";
import { Button,Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

interface DataType {
  key: React.Key;
  encode: string;
  date: string;
  name : string;
  product:string;
  status: string;
  address: string;
  bill : string;
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
    name : "Nguyễn Văn A",
    product : "Cần câu cá",
    status: "Đang vận chuyển",
    address: "Bình Thuận",
    bill : "140.000 đ",
  },
  {
    key: '2',
    encode: "G255840",
    date: "1-1-2024",
    name : "Nguyễn Thiên Ân",
    product : "Sách dạy xếp bài",
    status: "Đã hoàn thành",
    address: "Đồng Nai",
    bill : "210.000 đ",
  },
  {
    key: '3',
    encode: "G11840",
    date: "10-1-2024",
    name : "Nguyễn Văn B",
    product : "Nồi cơm điện",
    status: "Đã hoàn trả",
    address: "Hồ Chí Minh",
    bill : "320.000 đ",
  },
  {
    key: '4',
    encode: "G225630",
    date: "11-1-2024",
    name : "Nguyễn Văn C",
    product : "Rau cả",
    status: "Đang vận chuyển",
    address: "Cần Thơ",
    bill : "2.140.000 đ",
  },
  
];
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const AllOrderShopPage = () => {
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  return (
    <Grid className={cx("wapper")}>
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
    </Grid>
  )
}

export default AllOrderShopPage
