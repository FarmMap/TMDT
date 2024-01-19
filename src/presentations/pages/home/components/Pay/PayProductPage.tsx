import React, { useState } from 'react'
import DefaultLayOut from '../../../../components/defaultLayOut/DefaultLayOut';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Button, Input, Radio, RadioChangeEvent, Space } from 'antd';
import images from '../../../../../assets/images';
// Styles
import classNames from "classnames/bind";
import styles from "./PayProduct.module.scss";
import { NavLink } from 'react-router-dom';




const cx = classNames.bind(styles);
const PayProductPage = () => {
  //status checked
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('express'); // Default to 'express'

  const handleShippingMethodChange = (e: any) => {
    setSelectedShippingMethod(e.target.value);
  };

  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  //end status checked

  return (
    <DefaultLayOut>
      <Grid>
        <Grid className={cx("wapper")}>
          <Grid item lg={8} className={cx("part-one")}>
            <Grid className={cx("address")}>
              <Grid className={cx("location")} >
                <p><LocationOnIcon /><span>Địa chỉ nhận hàng</span></p>
                <a href="#">Thay đổi</a>
              </Grid>
              <Grid className={cx("profile")}>
                <h4>Anh A <span>|  038822633</span></h4>
                <p>47 TRẦN PHÚ, Thị trấn Diêu Trì, Huyện Tuy Phước, Bình Định</p>
              </Grid>
            </Grid>
            <Grid className={cx("delivery")}>
              <Grid className={cx("location")} >
                <p><LocalShippingIcon /><span>Phương thức giao hàng</span></p>
              </Grid>
              <Grid className={cx("transport")} >
                <Radio
                  className={cx("type-one")}
                  onChange={handleShippingMethodChange}
                  value="express"
                  checked={selectedShippingMethod === 'express'}
                >
                  <h5><LocalShippingIcon /><span>Giao hàng nhanh</span></h5>
                  <p>Dự kiến thứ 5, 8/1</p>
                </Radio>
                <p>26.000đ</p>
              </Grid>
              <Grid className={cx("transport")} >
                <Radio
                  className={cx("type-one")}
                  onChange={handleShippingMethodChange}
                  value="standard"
                  checked={selectedShippingMethod === 'standard'}
                >
                  <h5><LocalShippingIcon /><span>Giao hàng tiết kiệm</span></h5>
                  <p>Dự kiến thứ 5, 8/1</p>
                </Radio>
                <p></p>
              </Grid>
            </Grid>
            <Grid className={cx("pay")}>
              <Grid className={cx("location")} >
                <p><PaymentOutlinedIcon /><span>Phương thức thanh toán</span></p>
              </Grid>
              <Grid className={cx("pay-type")}>
                <Radio.Group onChange={onChange} value={value} style={{ width: "100%" }}>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Grid className={cx("radio-money")}>
                      <Radio value={1}>Thanh toán tiền mặt</Radio>
                      <p><LocalAtmOutlinedIcon /></p>
                    </Grid>
                  </Space>
                </Radio.Group>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} className={cx("part-two")}>
            <Grid className={cx("sales")}>
              <Grid className={cx("heading-sales")} >
                <p><LoyaltyOutlinedIcon /><span>Mã ưu đãi</span></p>
              </Grid>
              <Grid className={cx("btn-sales")}>
                <Button block>Chọn mã ưu đãi</Button>
              </Grid>
            </Grid>
            <Grid className={cx("details")}>
              <Grid className={cx("heading-details")} >
                <p><InventoryIcon /><span>Thông tin đơn hàng</span></p>
              </Grid>
              <Grid className={cx("product-order")}>
                <Grid className={cx("heading-shop")}>
                  <p>Cửa hàng : <span>Romanno</span></p>
                </Grid>
                <Grid className={cx("item")}>
                  <Grid>
                    <img src={images.dauGoiDau} alt="daugoidau" />
                  </Grid>
                  <Grid className={cx("title")}>
                    <Grid>
                      <h4>Dầu gội đầu Romano</h4>
                      <p>99.000đ <span>239.000đ</span></p>
                    </Grid>
                    <Grid>
                      <p style={{ color: "#000" }}>x1</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={cx("order")}>
              <Grid className={cx("price-order")}>
                <p>Tiền hàng</p>
                <h4>99.000đ</h4>
              </Grid>
              <Grid className={cx("price-ship")}>
                <p>Phí giao hàng</p>
                <h4>26.000đ</h4>
              </Grid>
              <Grid className={cx("line")}><span></span></Grid>
              <Grid className={cx("total-price")}>
                <p>Tổng thanh toán</p>
                <h4>125.000đ</h4>
              </Grid>
              <NavLink to="/san-pham/thanh-toan/thanh-cong">
                <Grid className={cx("btn-order")}>
                  <Button block>Đặt mua</Button>
                </Grid>
              </NavLink>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayOut>
  )
}

export default PayProductPage
