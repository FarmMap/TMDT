import React from "react";
// Styles
import classNames from "classnames/bind";
import styles from "./WaitProductList.module.scss";
import { Grid } from "@mui/material";
import images from "../../../../../../assets/images";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Steps } from "antd";
import TimerIcon from "@mui/icons-material/Timer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import useFetchMyOrder from "../../../../../../data/api/Order/useFetchMyOrder";
import useFetcMyAccount from "../../../../../../data/api/Account/useFetchMyAccount";
const cx = classNames.bind(styles);

const WaitProductListPage = () => {
  const { myOrders } = useFetchMyOrder({ page: 1 });
  const { user } = useFetcMyAccount({});
  return (
    <>
      {myOrders.map((item, i) => (
        <Grid key={i} className={cx("wapper")}>
          <Grid className={cx("heading-order")}>
            <Grid className={cx("code-order")}>
              <p>
                Mã đơn hàng <span>#{item.id}</span> | <a href="#">Chi tiết</a>{" "}
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
              <h4>Tổng tiền : {item.total}</h4>
            </Grid>
          </Grid>
          <Grid className={cx("details-product")}>
            <Grid display={"flex"}>
              <img src={images.dauGoiDau} alt="" />
              <Grid className={cx("title")}>
                <h4>Dầu gội đầu Romano</h4>
                <p>
                  Shop : <span>Romaano</span>
                </p>
                <Grid className={cx("status")}>Chờ xác nhận</Grid>
              </Grid>
            </Grid>
            <Grid>
              <Steps
                size="small"
                items={[
                  {
                    title: "Chờ xác nhận",
                    status: "finish",
                    icon: (
                      <TimerIcon style={{ width: "2rem", height: "2rem" }} />
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
          <Grid className={cx("btn-product")}>
            <Button className={cx("btn-shop")}>
              <StorefrontIcon />
              Vào Shop
            </Button>
            <Button className={cx("btn-details")}>Theo dõi đơn hàng</Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default WaitProductListPage;
