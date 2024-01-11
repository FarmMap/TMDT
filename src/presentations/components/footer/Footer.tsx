import React from "react";
import Grid from "@mui/material/Grid";
// Styles
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <Grid className={cx("wrapper")}>
      <Grid
        container
        justifyContent={"space-evenly"}
        className={cx("content-wrapper")}
      >
        <Grid item lg={2} className={cx("content-item")}>
          <p>Dịch vụ khách hàng</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Báo cáo lạm dụng
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Báo cáo lạm dụng
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Gửi khiếu nại
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Chính sách & quy định
              </a>
            </li>
          </ul>
        </Grid>

        <Grid item lg={2} className={cx("content-item")}>
          <p>Giới thiệu</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                ITFSD Blog
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Điều kiện vận chuyển
              </a>
            </li>{" "}
          </ul>
        </Grid>
        <Grid item lg={2} className={cx("content-item")}>
          <p>Hợp tác và liên kết</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} className={cx("content-item")}>
          <p>Phương thức thanh toán</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} className={cx("content-item")}>
          <p>Kết nối với chúng tôi</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
