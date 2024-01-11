import React from "react";
import AccountPage from "../AccountPage";
import { Grid } from "@mui/material";
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Space } from 'antd';
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { Input } from "antd";

// Styles
import classNames from "classnames/bind";
import styles from "./ProfilePage.module.scss";
import images from "../../../../assets/images";

const cx = classNames.bind(styles);
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const ProfilePage = () => {
  return (
    <AccountPage>
      <Grid className={cx("wapper")}>
        <Grid className={cx("heading")}>
          <h4>Thông tin tài khoản</h4>
        </Grid>
        <Grid className={cx("profile")}>
          <Grid className={cx("avatar")}>
            <img src={images.avatar} alt="ITFSD" />
            <input hidden type="file" id="wallpapper" />
            <label htmlFor="wallpapper">
                <AddAPhotoOutlinedIcon />
                Chọn ảnh
            </label>
          </Grid>
          <Grid className={cx("infor-user")}>
            <p>Họ và tên</p>
            <Input placeholder="Nhập họ và tên" />
            <p>Số điện thoại</p>
            <Input placeholder="Nhập số điện thoại" />
            <p>Email</p>
            <Input placeholder="Nhập email thường dùng" />
            <p>Ngày sinh</p>
            <DatePicker onChange={onChange} className={cx("datetime")} />
            <Grid className={cx("btn-update")}>
            <Button >Cập nhật</Button>
            </Grid>
            <Grid className={cx("re-pass")}>
              <a href="#">Đổi mật khẩu</a>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </AccountPage>
  );
};

export default ProfilePage;
