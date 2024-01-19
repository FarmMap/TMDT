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
          <p>Về chúng tôi</p>
          <ul>
            <li>
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Giới thiệu về AgriMaket
              </a>
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
              <a href="http://itfsd.com" target="_blank" rel="noreferrer">
                Liên hệ
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid display={"flex"} style={{ backgroundColor: "#27343e" }}>
        <Grid className={cx("profile-web")}>
          <h3>Công ty Cổ phần AgriMarket</h3>
          <p>Số ĐKKD: 03589669 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 10, ngày 26/04/2022.</p>
          <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
          <p>Địa chỉ: 10/9 Linh Trung , Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
          <p>Email: AgriMaket@gmail.com</p>
        </Grid>
        <Grid className={cx("map")}>
          <h3>Bản đồ</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2720818624816!2d106.70849617405355!3d10.790461089359118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b29af3c117%3A0xd41d6a60e0a9fc5e!2zNzlhIFBo4bqhbSBWaeG6v3QgQ2jDoW5oLCBQaMaw4budbmcgMTksIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1705653912711!5m2!1svi!2s"
            width="400"
            height="250"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
