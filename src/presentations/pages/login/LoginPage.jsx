import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Input } from "antd";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../../../config/firebase";
import { toast } from "react-toastify";
// Styles
import classNames from "classnames/bind";
import styles from "./LoginPage.module.scss";
import { signInWithEmailAndPassword } from "@firebase/auth";
import Footer from "../../components/footer/Footer";

const cx = classNames.bind(styles);

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.localStorage.setItem("token", user.accessToken);
        navigate("/");
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/invalid-email")
          toast.error("Email sai định dạng");
        else toast.error("Đăng nhập thất bại");
      });
  };
  return (
    <div>
      <Grid className={cx("login-header")}>
        <Grid className={cx("header")}>
          <Link to="/">Đặc sản Long An</Link>
          <p>Đăng nhập</p>
        </Grid>
        <a href="#">Bạn cần giúp đỡ ?</a>
      </Grid>
      <form className={cx("login-main")}>
        <Grid className={cx("login-table")}>
          <Grid className={cx("form-login")}>
            <p>Đăng nhập</p>
            <Input
              placeholder="Email/SĐT/Tên đăng nhập"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cx("input-user")}
            />
            <Input.Password
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={cx("input-password")}
            />
            <Button
              type="submit"
              onClick={onLogin}
              className={cx("btnlogin")}
              variant="contained"
            >
              <span>Đăng nhập</span>
            </Button>
            <Grid className={cx("forget-pass")}>
              <a href="#">Quên mật khẩu</a>
              <a href="#">Đăng nhập với SMS</a>
            </Grid>
            <Grid className={cx("or-login")}>
              <div className={cx("line")}></div>
              <span>HOẶC</span>
              <div className={cx("line")}></div>
            </Grid>
            <Grid className={cx("btn-google")}>
              <Button variant="outlined">
                <GoogleIcon />
                oogle
              </Button>
            </Grid>
            <Grid className={cx("btn-register")}>
              <span>Bạn chưa có tài khoản ?</span>
              <a href="/register">Đăng ký</a>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Footer/>
    </div>
  );
};
export default LoginPage;
