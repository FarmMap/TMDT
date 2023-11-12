import Grid from "@mui/material/Grid";
import React from "react";
import { Button } from "@mui/material";
import { Input } from "antd";
import InputSearch from "./InputSearch";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Link } from 'react-router-dom';
// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);
const handleClick = () => {
  window.location.reload();
};
const { Search } = Input;

const Header = () => {
  return (
    <Grid className={cx("container")}>
      <Grid className={cx("wrapper")}>
        <Grid className={cx("logo")}>
          <p>AGRIMARKET</p>
        </Grid>

        <Grid className={cx("search-wrapper")}>
          <InputSearch
            size="large"
            placeholder="Tìm kiếm sản phẩm"
            textButton="Tìm kiếm"
          />
        </Grid>

        <Grid className={cx("icon-wrapper")}>
        
          <Button className={cx("loginBtn")} variant="contained" onClick={handleClick}>
            <HomeRoundedIcon/>
            <span>Trang chủ </span>
          </Button>
          
          <Button className={cx("loginBtn")} variant="contained">
            <CurrencyExchangeRoundedIcon/>
            <span>Giao thương </span>
          </Button>
          
          <Link to="/login">
          <Button className={cx("loginBtn")} variant="contained"  >
            <SentimentSatisfiedAltRoundedIcon/>
            <span>Tài khoản </span>
          </Button>
          </Link>
          <LocalMallRoundedIcon style = {{cursor: "pointer"}} />
        </Grid>
      </Grid>

      <Grid container className={cx("heading")}>
        <Grid
          item
          lg={4}
          className={cx("heading-item")}
          style={{ borderRight: "1px solid #ddd" }}
        >
          <Grid className={cx("img-wrapper")}>
            <img src={images.yecaubaogia} alt="yecaubaogia-ITFSD" />
          </Grid>

          <Grid className={cx("content-wrapper")}>
            <h4>Yêu cầu báo giá</h4>
            <p>Một yêu cầu, nhiều báo giá</p>
          </Grid>
        </Grid>

        <Grid
          item
          lg={4}
          className={cx("heading-item")}
          style={{ borderRight: "1px solid #ddd", justifyContent: "center" }}
        >
          <Grid className={cx("img-wrapper")}>
            <img src={images.sansangvanchuyen} alt="yecaubaogia-ITFSD" />
          </Grid>

          <Grid className={cx("content-wrapper")}>
            <h4>Sẵn sàng vận chuyển</h4>
            <p>Đặt hàng trực tiếp, gửi hàng nhanh</p>
          </Grid>
        </Grid>

        <Grid
          item
          lg={4}
          className={cx("heading-item")}
          style={{ justifyContent: "center" }}
        >
          <Grid className={cx("img-wrapper")}>
            <img src={images.dichvuhaucan} alt="yecaubaogia-ITFSD" />
          </Grid>

          <Grid className={cx("content-wrapper")}>
            <h4>Dịch vụ hậu cần</h4>
            <p>Vận chuyển theo đường bộ</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
