import React, { useEffect, useState } from "react";
// Styles
import classNames from "classnames/bind";
import styles from "./SuccessProductPage.module.scss";
import { Grid, Pagination, Rating } from "@mui/material";

import { Button, Steps } from "antd";
import TimerIcon from "@mui/icons-material/Timer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TextArea from "antd/es/input/TextArea";
// import useFetchMyOrder from "../../../../../../data/api/Order/useFetchMyOrder";
import useFetcMyAccount from "../../../../../../data/api/Account/useFetchMyAccount";
import useFetchMyOrder from "../../../../../../data/api/Order/useFetchMyOrder";
import DefaultModal from "../../../../../components/defaultModal/DefaultModal";
import FeedBackType from "../../../../../../data/types/FeedBack/FeedBackType";
import useCreateFeedBack from "../../../../../../data/api/FeedBack/useCreateFeedBack";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

const SuccessProductPage = () => {
  const [page, setPage] = useState(1);
  const { myOrders, isLoading, page: pages } = useFetchMyOrder({ page: page });

  const { user } = useFetcMyAccount({});

  // handle Pagination
  const handlePaginationChange = (event: any, value: number) => setPage(value);

  // Feedback
  const [modalFb, setModalFb] = useState(false);

  const [feedBack, setFeedBack] = useState<FeedBackType>({
    rating: 5,
  });

  const { isCreated, error, createFeedBack } = useCreateFeedBack();

  const handleSubmitFeedBack = () => {
    createFeedBack({ feedBack: feedBack });
  };

  const handleCloseModal = () => {
    setModalFb(false);
  };

  useEffect(() => {
    if (isCreated) {
      toast.success("Đánh giá thành công");
      setFeedBack({});
      handleCloseModal();
    } else if (error) {
      toast.error(error);
    }
  }, [error, isCreated]);
  return (
    <>
      {myOrders.map(
        (item, i) =>
          item.status === "DELIVERED" && (
            <Grid key={i} className={cx("wapper")}>
              <Grid className={cx("heading-order")}>
                <Grid className={cx("code-order")}>
                  <p>
                    Mã đơn hàng <span>#{item.id}</span> |{" "}
                    <a href={`/order-details/${item.id}`}>Chi tiết</a>{" "}
                  </p>
                  <p>
                    Đặt ngày : <span>15/04/2024</span>
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
              <Grid className={cx("details-product")}>
                <Grid display={"flex"}>
                  <img
                    src={
                      item &&
                      item.orderDetails &&
                      item.orderDetails[0] &&
                      item.orderDetails[0].product &&
                      item.orderDetails[0].product.images &&
                      item.orderDetails[0].product.images[0]
                        ? `${process.env.REACT_APP_API_BASE_URL}${item.orderDetails[0].product.images[0]}`
                        : ""
                    }
                    alt=""
                  />

                  <Grid className={cx("title")}>
                    <h4>
                      {item &&
                        item.orderDetails &&
                        item.orderDetails[0] &&
                        item.orderDetails[0].product &&
                        item.orderDetails[0].product.name &&
                        item.orderDetails[0].product?.name}
                    </h4>
                    <p>
                      Shop :{" "}
                      <span>
                        {item &&
                          item.orderDetails &&
                          item.orderDetails[0] &&
                          item.orderDetails[0].product &&
                          item.orderDetails[0].product.store &&
                          item.orderDetails[0].product.store.name &&
                          item.orderDetails[0].product?.store.name}
                      </span>
                    </p>
                    <Grid className={cx("status")}>
                      {item.status === "DELIVERED" ? "Đã nhận hàng" : "Đã hủy"}
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
                        status: "finish",
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
              <Grid className={cx("btn-product")}>
                <Button
                  onClick={() => {
                    setModalFb(true);
                    setFeedBack({ ...feedBack, productId: item.id });
                  }}
                  className={cx("btn-shop")}
                >
                  Viết đánh giá
                </Button>
              </Grid>
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

      {modalFb && (
        <DefaultModal
          title={"Đánh giá sản phẩm"}
          overrideMaxWidth={{
            width: "680px",
          }}
          onClose={handleCloseModal}
        >
          <Grid>
            <Grid className={cx("rating-wrapper")}>
              <Rating
                className={cx("rating")}
                value={feedBack.rating}
                sx={{ fontSize: "2.8rem" }}
                onChange={(event, newValue) => {
                  if (newValue == null) return;
                  setFeedBack({ ...feedBack, rating: newValue });
                }}
              />
            </Grid>

            <Grid>
              <Grid className={cx("body-heading")}>
                <p>
                  Trạng thái đánh giá:{" "}
                  <span>
                    {feedBack.rating === 1
                      ? "Rất tệ"
                      : feedBack.rating === 2
                        ? "Tệ"
                        : feedBack.rating === 3
                          ? "Tạm ổn"
                          : feedBack.rating === 4
                            ? "Tốt"
                            : "Rất tốt"}
                  </span>
                </p>
              </Grid>
              <Grid>
                <TextArea
                  className={cx("text-area")}
                  value={feedBack.comment}
                  onChange={(e) => {
                    let newFeedaback = { ...feedBack };
                    newFeedaback.comment = e.currentTarget.value;
                    setFeedBack(newFeedaback);
                  }}
                  placeholder="Mời bạn chia sẻ cảm nhận"
                  rows={4}
                />
              </Grid>

              <Grid className={cx("btn-wrap")}>
                <p>Chúng tôi xin ghi nhận những đóng góp của bạn</p>
                <Button onClick={handleSubmitFeedBack}>Gửi đánh giá</Button>
              </Grid>
            </Grid>
          </Grid>
        </DefaultModal>
      )}
    </>
  );
};

export default SuccessProductPage;
