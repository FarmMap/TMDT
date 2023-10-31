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
        justifyContent={"space-around"}
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
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>{" "}
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
          </ul>
        </Grid>

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
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>{" "}
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
          </ul>
        </Grid>
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
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>{" "}
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>
          </ul>
        </Grid>
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
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Trung tâm trợ giúp
              </a>
            </li>{" "}
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
