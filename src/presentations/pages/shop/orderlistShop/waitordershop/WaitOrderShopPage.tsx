import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import classNames from "classnames/bind";
import styles from "./WaitOrderShop.module.scss";
import { Button, Space, Popconfirm } from "antd";
import { DownOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
const cx = classNames.bind(styles);

interface DataType {
  key: React.Key;
  encode: string;
  date: string;
  name: string;
  product: string;
  address: string;
  bill: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Mã đơn hàng",
    dataIndex: "encode",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Ngày tạo đơn",
    dataIndex: "date",
  },
  {
    title: "Tên khách hàng",
    dataIndex: "name",
  },
  {
    title: "Sản phẩm",
    dataIndex: "product",
  },
  {
    title: "Địa chỉ giao hàng",
    dataIndex: "address",
  },
  {
    title: "Hóa đơn",
    dataIndex: "bill",
  },
  {
    title: "Chức năng",
    dataIndex: "function",
    render: (text: string, record: DataType) => (
      <Space>
        <Popconfirm
          title="Xác nhận đơn hàng?"
          onConfirm={() => handleConfirm(record)}
          okText="Xác nhận"
          cancelText="Hủy"
        >
          <Button type="primary" icon={<CheckOutlined rev={undefined} />} />
        </Popconfirm>
        <Popconfirm
          title="Từ chối đơn hàng?"
          onConfirm={() => handleReject(record)}
          okText="Từ chối"
          cancelText="Hủy"
        >
          <Button
            style={{ background: "red", color: "#fff" }}
            icon={<CloseOutlined rev={undefined} />}
          />
        </Popconfirm>
      </Space>
    ),
  },
];
function handleConfirm(record: DataType): void {
  throw new Error("Function not implemented.");
}

function handleReject(record: DataType): void {
  throw new Error("Function not implemented.");
}

const data: DataType[] = [
  {
    key: "1",
    encode: "G29840",
    date: "14-12-2023",
    name: "Nguyễn Văn A",
    product: "Cần câu cá",
    address: "Bình Thuận",
    bill: "140.000 đ",
  },
  {
    key: "2",
    encode: "G255840",
    date: "1-1-2024",
    name: "Nguyễn Thiên Ân",
    product: "Sách dạy xếp bài",
    address: "Đồng Nai",
    bill: "210.000 đ",
  },
  {
    key: "3",
    encode: "G11840",
    date: "10-1-2024",
    name: "Nguyễn Văn B",
    product: "Nồi cơm điện",
    address: "Hồ Chí Minh",
    bill: "320.000 đ",
  },
  {
    key: "4",
    encode: "G225630",
    date: "11-1-2024",
    name: "Nguyễn Văn C",
    product: "Rau cải",
    address: "Cần Thơ",
    bill: "2.140.000 đ",
  },
];
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const WaitOrderShopPage = () => {
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");
  return (
    <Grid className={cx("wapper")}>
      <Grid className={cx("menu-item")}>
        <Grid className={cx("show-quantity")}>
          <p>Hiển thị</p>
          <Button className={cx("dropdown")}>
            <Space>
              0
              <DownOutlined rev={undefined} />
            </Space>
          </Button>
          <p>0/0 trên 0 đơn hàng</p>
        </Grid>
        <Grid className={cx("time-order")}>
          <p>Thời gian đặt hàng</p>
          <Button className={cx("dropdown")}>
            <Space>
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
  );
};

export default WaitOrderShopPage;
