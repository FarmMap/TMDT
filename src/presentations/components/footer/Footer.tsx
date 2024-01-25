import React from "react";
import Grid from "@mui/material/Grid";
// Styles
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

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
          <p>Về chúng tôi</p>
          <ul>
            <li>
              <NavLink to="/ve-chung-toi">Giới thiệu về AgriMaket</NavLink>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Quy chế hoạt động
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Giao hàng và Nhận hàng
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Điều khoản sử dụng
              </a>
            </li>
          </ul>
        </Grid>

        <Grid item lg={2} className={cx("content-item")}>
          <p>Dành cho người mua</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Giải quyết khiếu nại
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Chính sách đổi trả
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Chăm sóc khách hàng
              </a>
            </li>{" "}
          </ul>
        </Grid>
        <Grid item lg={2} className={cx("content-item")}>
          <p>Dành cho người bán</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Quy định đối vời người bán
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Chính sách bán hàng
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Hệ thống tiêu chí kiểm duyệt
              </a>
            </li>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Mở shop trên AgriMarket
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} className={cx("content-item")}>
          <p>Kết nối với chúng tôi</p>
          <ul>
            <li>
              <NavLink to="/lien-he">
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"space-evenly"} style={{ backgroundColor: "#27343e" }}>
        <Grid className={cx("profile-web")}>
          <h3>CLB Đầu Tư Và Khởi Nghiệp Tỉnh Long An</h3>
          <p>
            Địa chỉ: 51/19, Nguyễn Văn Tiếp, Phường 5, Tân An, Long An, Việt Nam.
          </p>
          <p>SĐT: 0909831994</p>
        </Grid>
        <Grid className={cx("map")}>
          <h3>Bản đồ</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3301548553786!2d106.42068997404947!3d10.553316589582225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ac9e5fc7ce163%3A0xabd4bad60bd198a9!2zNTEgTmd1eeG7hW4gVsSDbiBUaeG6v3AsIFBoxrDhu51uZyA1LCBUw6JuIEFuLCBMb25nIEFuLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1706180886148!5m2!1svi!2s" 
          width="400"
          height="250"
           style={{ border: "0" }}
           allowFullScreen={true} 
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
