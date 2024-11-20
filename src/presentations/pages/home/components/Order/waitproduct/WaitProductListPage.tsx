import React, { useState } from "react";
// Styles
import classNames from "classnames/bind";
import styles from "./WaitProductList.module.scss";
import { Grid, Pagination } from "@mui/material";

import { Button, Steps } from "antd";
import TimerIcon from "@mui/icons-material/Timer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import useFetchMyOrder from "../../../../../../data/api/Order/useFetchMyOrder";
import useFetcMyAccount from "../../../../../../data/api/Account/useFetchMyAccount";
import useFetchMyOrder from "../../../../../../data/api/Order/useFetchMyOrder";
import { toReadableDate } from "../../../../../../hooks/useReadableDate";
const cx = classNames.bind(styles);

const WaitProductListPage = () => {
  const [page, setPage] = useState(1);
  const { myOrders, isLoading, page: pages } = useFetchMyOrder({ page: page });

  const { user } = useFetcMyAccount({});

  // handle Pagination
  const handlePaginationChange = (event: any, value: number) => setPage(value);
  return (
    <>
      {myOrders.map(
        (item, i) =>
          item.status !== "DELIVERED" &&
          item.status !== "CANCELED" && (
            <Grid key={i} className={cx("wapper")}>
              <Grid className={cx("heading-order")}>
                <Grid className={cx("code-order")}>
                  <p>
                    Mã đơn hàng <span>#{item.id}</span> |{" "}
                    <a href="#">Chi tiết</a>{" "}
                  </p>
                  <p>
                    Đặt ngày : <span>{toReadableDate(item.createdAt)}</span>
                  </p>
                </Grid>
                <Grid className={cx("user")}>
                  <p>Người nhận : </p>
                  <p>{user.fullName ? user.fullName : user.email}</p>
                </Grid>
                <Grid className={cx("price")}>
                  <h4>
                    Tổng tiền :{" "}
                    {parseFloat(item.total || "").toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}{" "}
                  </h4>
                </Grid>
              </Grid>
              {item.orderDetails?.map((orderDetail, index) => (
                <Grid key={index} className={cx("details-product")}>
                  <Grid display={"flex"}>
                    <img
                      src={
                        orderDetail &&
                        orderDetail.product &&
                        orderDetail.product.images &&
                        orderDetail.product.images[0]
                          ? `${process.env.REACT_APP_API_BASE_URL}${orderDetail.product.images[0]}`
                          : ""
                      }
                      alt=""
                    />

                    <Grid className={cx("title")}>
                      <h4>
                        {orderDetail &&
                          orderDetail.product &&
                          orderDetail.product.name &&
                          orderDetail.product?.name}
                      </h4>
                      <p>
                        Shop :{" "}
                        <span>
                          {orderDetail &&
                            orderDetail.product &&
                            orderDetail.product.store &&
                            orderDetail.product.store.name &&
                            orderDetail.product?.store.name}
                        </span>
                      </p>
                      <Grid className={cx("status")}>
                        {item.status === "PENDING"
                          ? "Chờ xác nhận"
                          : item.status === "CONFIRMED"
                            ? "Đã xác nhận"
                            : item.status === "DELIVERING"
                              ? "Đang vận chuyển"
                              : item.status === "DELIVERED"
                                ? "Đã nhận hàng"
                                : "Đã hủy"}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid width={"580px"}>
                    <Steps
                      size="small"
                      items={[
                        {
                          title: "Chờ xác nhận",
                          status: "finish",
                          icon: (
                            <TimerIcon
                              style={{ width: "2rem", height: "2rem" }}
                            />
                          ),
                        },
                        {
                          title: "Đã xác nhận",
                          status: "finish",
                          icon: (
                            <AssignmentTurnedInIcon
                              style={{ width: "2rem", height: "2rem" }}
                            />
                          ),
                        },
                        {
                          title: "Đang giao",
                          status: "finish",
                          icon: (
                            <LocalShippingIcon
                              style={{ width: "2rem", height: "2rem" }}
                            />
                          ),
                        },
                        {
                          title: "Hoàn tất",
                          status: "wait",
                          icon: (
                            <CheckCircleIcon
                              style={{ width: "2rem", height: "2rem" }}
                            />
                          ),
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )
      )}
      {!isLoading && (
        <Pagination
          count={pages}
          page={page}
          defaultPage={1}
          variant="outlined"
          color="primary"
          shape="rounded"
          onChange={handlePaginationChange}
          sx={{
            marginTop: {
              lg: "0",
              md: "0",
              sm: "30px",
              xs: "30px",
            },
          }}
        />
      )}
    </>
  );
};

export default WaitProductListPage;
