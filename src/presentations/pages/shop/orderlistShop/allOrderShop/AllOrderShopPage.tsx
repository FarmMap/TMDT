import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Dropdown, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import classNames from "classnames/bind";
import styles from "./AllOrderShop.module.scss";
import { Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import OrderType from "../../../../../data/types/Order/OrderType";
import useFetchOrderList from "../../../../../data/api/Order/useFetchOrderList";
import useFetchMyShop from "../../../../../data/api/Shop/useFetchMyShop";
import { toReadableDate } from "../../../../../hooks/useReadableDate";
import { STATUSORDER } from "../../../../../constants/Constant";
import useUpdateOrderStatus from "../../../../../data/api/Order/useUpdateOrderStatus";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

const AllOrderShopPage = () => {
  const [idOrder, setIdOrder] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const items = STATUSORDER.map((item) => ({
    label: item.name,
    key: item.value, // Convert to string if id is defined
  }));

  // Update status order
  const { isUpdated, updateUser, error } = useUpdateOrderStatus({
    id: idOrder,
  });

  const handleMenuClick = (info: any) => {
    console.log(info.key);
    updateUser({ status: info.key });
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const columns: ColumnsType<OrderType> = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
    },
    {
      title: "Ngày tạo đơn",
      render: (text: string, record: OrderType) => (
        <span className={cx("feedBack-star")}>
          {toReadableDate(record.createdAt)}
        </span>
      ),
    },
    {
      title: "Sản phẩm",
      render: (text: string, record: OrderType) => (
        <span className={cx("feedBack-star")}>
          {record.orderDetails?.map((item, i) => (
            <span key={i}>{item.product?.name}</span>
          ))}
        </span>
      ),
    },
    {
      title: "Trạng thái đơn hàng",
      render: (text: string, record: OrderType) => (
        <Dropdown
          className={cx("dropdown-status")}
          onOpenChange={() => {
            setIdOrder(record.id ?? 0);
          }}
          menu={menuProps}
        >
          <Button className={cx("dropdown")}>
            <Space className={cx("title-category")}>
              <p>
                {" "}
                {record.status === "PENDING" ? (
                  <span style={{ color: "var(--yellow-color)" }}>
                    Chưa phê duyệt
                  </span>
                ) : record.status === "CONFIRMED" ? (
                  <span style={{ color: "var(--blue-color2)" }}>
                    Đã phê duyệt
                  </span>
                ) : record.status === "DELIVERING" ? (
                  <span style={{ color: "var(--pink-color)" }}>
                    Đang vận chuyển
                  </span>
                ) : record.status === "DELIVERED" ? (
                  <span style={{ color: "var(--pink-color)" }}>
                    Đã nhận hàng
                  </span>
                ) : (
                  <span style={{ color: "var(--second-color)" }}>Đã hủy</span>
                )}
              </p>
              <DownOutlined rev={undefined} />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
    {
      title: "Địa chỉ giao hàng",
      render: (text: string, record: OrderType) => (
        <span className={cx("feedBack-star")}>
          {record.province?.name} - {record.district?.name} -{" "}
          {record.ward?.name}
        </span>
      ),
    },
    {
      title: "Hóa đơn",
      render: (text: string, record: OrderType) => (
        <span className={cx("feedBack-star")}>
          {record.total
            ? new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(parseFloat(record.total))
            : "Đang cập nhật..."}
        </span>
      ),
    },
  ];
  const { myShop } = useFetchMyShop({});
  const [page, setPage] = useState(1);
  const { orderList, page: pages } = useFetchOrderList({
    storeId: myShop.id,
    page: page,
    shouldRefesh: refresh,
  });

  useEffect(() => {
    if (isUpdated) {
      toast.success("Cập nhật thành công");
      setRefresh((refresh) => !refresh);
    } else if (error) {
      toast.error(error);
    }
  }, [error, isUpdated]);
  return (
    <Grid className={cx("wapper")}>
      <Grid className={cx("menu-item")}>
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
        <Table columns={columns} dataSource={orderList} />
      </Grid>
    </Grid>
  );
};

export default AllOrderShopPage;
