import React from 'react'
// Styles
import classNames from "classnames/bind";
import styles from "./WaitProductList.module.scss";
import { Grid } from '@mui/material';
import images from '../../../../../../assets/images';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Steps } from 'antd';

import StorefrontIcon from '@mui/icons-material/Storefront';

const cx = classNames.bind(styles);

const WaitProductListPage = () => {
  return (
    <Grid className={cx("wapper")}>
      <Grid className={cx("heading-order")}>
        <Grid className={cx("code-order")}>
          <p>Mã đơn hàng <span>#521458</span> | <a href="#">Chi tiết</a> </p>
          <p>Đặt ngày : <span>15/04/2024</span></p>
        </Grid>
        <Grid className={cx("user")}>
          <p>Người nhận : </p>
          <p>Anh A</p>
        </Grid>
        <Grid className={cx("price")}>
          <h4>Tổng tiền : 125.000đ</h4>
        </Grid>
      </Grid>
      <Grid className={cx("details-product")}>
        <Grid display={"flex"}>
          <img src={images.dauGoiDau} alt="" />
          <Grid className={cx("title")}>
            <h4>Dầu gội đầu Romano</h4>
            <p>Shop : <span>Romaano</span></p>
            <Grid className={cx("status")}>Chờ xác nhận</Grid>
          </Grid>
        </Grid>
        <Grid>
          <Steps
            items={[
              {
                title: 'Login',
                status: 'finish',
                icon: <UserOutlined rev={undefined} />,
              },
              {
                title: 'Verification',
                status: 'finish',
                icon: <SolutionOutlined rev={undefined} />,
              },
              {
                title: 'Pay',
                status: 'process',
                icon: <LoadingOutlined rev={undefined} />,
              },
              {
                title: 'Done',
                status: 'wait',
                icon: <SmileOutlined rev={undefined} />,
              },
            ]}
          />
        </Grid>
      </Grid>
      <Grid className={cx("btn-product")}>
            <Button className={cx("btn-shop")}><StorefrontIcon/>Vào Shop</Button>
            <Button className={cx("btn-details")}>Theo dõi đơn hàng</Button>
      </Grid>
    </Grid>
  )
}

export default WaitProductListPage
