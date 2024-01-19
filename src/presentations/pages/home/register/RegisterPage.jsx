import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Input } from "antd";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../../config/firebase";
// Styles
import classNames from "classnames/bind";
import styles from "./RegisterPage.module.scss";
import { toast } from "react-toastify";
import Footer from "../../../components/footer/Footer";

const cx = classNames.bind(styles);

const RegisterPage = () => {
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // setUpRecaptha
  function setUpRecaptha(number) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
          //clear recaptcha
          // ...
        },
        //clear recaptcha
        "expired-callback": () => {
          window.recaptchaVerifier.clear();
        },
      }
    );
  }

  // getOtp
  const getOtp = async (e) => {
    setUpRecaptha();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + number;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setFlag(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // verifyOtp
  const verifyOtp = async (e) => {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div>
      <Grid className={cx("login-header")}>
        <Grid className={cx("header")}>
          <Link to="/">Agrimaket</Link>
          <p>Đăng ký</p>
        </Grid>

        <a href="#">Bạn cần giúp đỡ ?</a>
      </Grid>
      <form
        style={{ display: !flag ? "flex" : "none" }}
        className={cx("login-main")}
      >
        <Grid className={cx("login-table")}>
          <Grid className={cx("form-login")}>
            <p>Đăng ký</p>
            <PhoneInput
              defaultCountry="VN"
              className={cx("input-user")}
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
            <Button
              onClick={getOtp}
              className={cx("btnlogin")}
              variant="contained"
            >
              <span>Tiếp tục</span>
            </Button>
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
              <span>Bạn đã có tài khoản ?</span>
              <a href="/login">Đăng nhập</a>
            </Grid>
          </Grid>
        </Grid>
      </form>

      <form
        style={{ display: flag ? "flex" : "none" }}
        className={cx("login-main")}
      >
        <Grid className={cx("login-table")}>
          <Grid className={cx("form-login")}>
            <p>Xác nhận</p>
            <Input
              value={otp}
              onChange={setOtp}
              placeholder="Vui lòng nhập mã xác nhận"
              className={cx("input-user")}
            />

            <Button
              onClick={verifyOtp}
              className={cx("btnlogin")}
              variant="contained"
            >
              <span>Xác nhận</span>
            </Button>
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
              <span>Bạn đã có tài khoản ?</span>
              <a href="/login">Đăng nhập</a>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Footer/>
    </div>
  );
};
export default RegisterPage;
