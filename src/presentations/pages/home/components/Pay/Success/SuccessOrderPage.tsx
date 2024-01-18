import React from 'react'
import DefaultLayOut from '../../../../../components/defaultLayOut/DefaultLayOut';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { Grid } from '@mui/material';
import images from '../../../../../../assets/images';
import { Button } from 'antd';

// Styles
import classNames from "classnames/bind";
import styles from "./SuccessOrder.module.scss";



const cx = classNames.bind(styles);

const SuccessOrderPage = () => {
    return (
        <DefaultLayOut>
            <Grid className={cx("success")}>
                <Grid className={cx("wapper")}>
                    <Grid item lg={4}>
                    <img  src={images.stick} alt="stick" />
                    </Grid>
                    <Grid item lg={8} style={{width:"55%"}}>
                        <h3>Đặt hàng thành công</h3>
                        <p>Cảm ơn bạn đã mua hàng tại AgriMarket. </p>
                        <Grid className={cx("code-order")}>
                            <p>Mã đơn hàng</p>
                            <h4>15296963</h4>
                        </Grid>
                        <Grid className={cx("pay")}>
                            <p>Phương thức thanh toán</p>
                            <h4><LocalAtmOutlinedIcon />Tiền mặt</h4>
                        </Grid>
                        <Grid className={cx("total-price")}>
                            <p>Tổng thanh toán</p>
                            <h4>125.000đ</h4>
                        </Grid>
                        <Grid className={cx("line")}><span></span></Grid>
                        <Grid className={cx("btn-success")}>
                            <Button className={cx("btn-order")} block>Tiếp tục mua sắm</Button>
                            <Button className={cx("btn-details")} block>Chi tiết đơn hàng</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </DefaultLayOut>
    )
}

export default SuccessOrderPage
