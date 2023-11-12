import React from 'react'
import Grid from "@mui/material/Grid";
import { Input } from 'antd';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

// Styles
import classNames from "classnames/bind";
import styles from "./LoginPage.module.scss";


const cx = classNames.bind(styles);


 const LoginPage = () => {
  return (
    <div>
        <Grid className={cx("login-header")}>
          <Grid className ={cx("header")}>
            <Link to = "/">Agrimaket</Link>
            <p>Đăng nhập</p>
          </Grid>           
            <a href='#' >Bạn cần giúp đỡ ?</a>
        </Grid>
        <Grid className={cx("login-main")}>
          <Grid className={cx("login-table")}>             
                <Grid className={cx("form-login")}>
                <p>Đăng nhập</p>
                  <Input placeholder="Email/SĐT/Tên đăng nhập" className={cx("input-user")} />
                  <Input.Password placeholder="Mật khẩu" className={cx("input-password")} />
                  <Button className={cx("btnlogin")}  variant="contained"><span>Đăng nhập</span></Button>
                  <Grid className={cx("forget-pass")}>
                    <a href='#'>Quên mật khẩu</a>
                    <a href='#'>Đăng nhập với SMS</a>
                  </Grid>
                  <Grid className={cx("or-login")}>
                    <div className = {cx("line")}></div>
                    <span>HOẶC</span>
                    <div className = {cx("line")}></div>
                  </Grid>
                  <Grid className={cx("btn-google")}>
                    <Button  variant="outlined"><GoogleIcon/>oogle</Button>
                  </Grid>    
                  <Grid className = {cx("btn-register")}>
                    <span>Bạn chưa có tài khoản ?</span>  
                   <a href = "/register">Đăng ký</a>
                  </Grid>             
                </Grid>
          </Grid>            
        </Grid> 
    </div>
  )
}
export default  LoginPage;
