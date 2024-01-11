import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import InputSearch from "./InputSearch";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import DefaultAvatar from "../defaultAvatar";
import useFetchMyAccount from "../../../data/api/Account/useFetchMyAccount";
import Tippy from "@tippyjs/react";
import DefaultDropDown from "../defaultDropDown";
import AccountInfo from "./components/AccountInfo";
import useAuth from "../../../hooks/useAuth";

// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
const handleClick = () => {
  window.location.reload();
};

const Header = () => {
  const [showAccount, setShowAccount] = useState(false);

  const { user: currentUser, isLoading, error } = useFetchMyAccount({});

  const [user] = useAuth();

  useEffect(() => {
    if (error === "T") {
      window.localStorage.removeItem("token");
    }
  }, [error]);

  return (
    <Grid className={cx("container")}>
      <Grid className={cx("wrapper")}>
        <Grid className={cx("logo")}>
          <NavLink style={{ color: "white" }} to="/">
            AGRIMARKET
          </NavLink>
        </Grid>

        <Grid className={cx("search-wrapper")}>
          <InputSearch
            size="large"
            placeholder="Tìm kiếm sản phẩm"
            textButton="Tìm kiếm"
          />
        </Grid>

        <Grid className={cx("icon-wrapper")}>
          <Button
            className={cx("loginBtn")}
            variant="contained"
            onClick={handleClick}
          >
            <HomeRoundedIcon />
            <span>Trang chủ </span>
          </Button>

          <Button className={cx("loginBtn")} variant="contained">
            <CurrencyExchangeRoundedIcon />
            <span>Giao thương </span>
          </Button>

          {!user ? (
            <Link to="/login">
              <Button className={cx("loginBtn")} variant="contained">
                <SentimentSatisfiedAltRoundedIcon />
                <span>Tài khoản </span>
              </Button>
            </Link>
          ) : (
            <DefaultDropDown
              childrenRender={<AccountInfo />}
              visible={showAccount}
            >
              <Tippy
                content={`${currentUser.email}`}
                placement="bottom"
                theme="light"
              >
                <Button
                  onClick={() => setShowAccount(!showAccount)}
                  className={cx("loginBtn")}
                  variant="contained"
                >
                  {!isLoading ? (
                    <>
                      <DefaultAvatar avatar={images.avatar} small />
                      <span>
                        {user
                          ? currentUser.fullName
                          : "Phiên đăng nhập đã hết hạn"}
                      </span>
                    </>
                  ) : (
                    <CircularProgress
                      style={{
                        height: "4px !important",
                        width: "4px !important",
                        color: "var(--border-color)",
                      }}
                    />
                  )}
                </Button>
              </Tippy>
            </DefaultDropDown>
          )}
          <LocalMallRoundedIcon style={{ cursor: "pointer" }} />
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
