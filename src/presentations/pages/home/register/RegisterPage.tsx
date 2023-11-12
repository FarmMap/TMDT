import React from 'react'
import Grid from "@mui/material/Grid";
import { Input } from 'antd';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

// Styles
import classNames from "classnames/bind";
import styles from "./RegisterPage.module.scss";


const cx = classNames.bind(styles);


 const RegisterPage = () => {
  return (
    <div>
        <Grid className={cx("login-header")}>
        <Grid className ={cx("header")}>
            <Link to = "/">Agrimaket</Link>
            <p>Đăng ký</p>
          </Grid>  
            
            <a href='#' >Bạn cần giúp đỡ ?</a>
        </Grid>
        <Grid className={cx("login-main")}>
          <Grid className={cx("login-table")}>             
                <Grid className={cx("form-login")}>
                <p>Đăng ký</p>
                  <Input placeholder="Số điện thoại" className={cx("input-user")} />
                  <Button className={cx("btnlogin")} variant="contained" ><span>Đăng ký</span></Button>
                  <Grid className={cx("or-login")}>
                    <div className = {cx("line")}></div>
                    <span>HOẶC</span>
                    <div className = {cx("line")}></div>
                  </Grid>
                  <Grid className={cx("btn-google")}>
                    <Button  variant="outlined"><GoogleIcon/>oogle</Button>
                  </Grid>    
                  <Grid className = {cx("btn-register")}>
                    <span>Bạn đã có tài khoản ?</span>  
                    <a href = "/login">Đăng nhập</a>
                  </Grid>             
                </Grid>
          </Grid>            
        </Grid> 
    </div>
  )
}
export default  RegisterPage;
