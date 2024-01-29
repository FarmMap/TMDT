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
import { NavLink } from "react-router-dom";
import { useCart } from "../../pages/home/components/Cart/CartContext";
// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const Header = () => {
  const [showAccount, setShowAccount] = useState(false);
  const { cartState } = useCart();

  const { cartItems } = cartState;

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
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={images.logo} alt="logo" />
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
          <NavLink to="/">
            <Button className={cx("loginBtn")} variant="contained">
              <HomeRoundedIcon />
              <span>Trang chủ </span>
            </Button>
          </NavLink>
          <NavLink to="/tin-tuc">
            <Button className={cx("loginBtn")} variant="contained">
              <CurrencyExchangeRoundedIcon />
              <span>Tin tức </span>
            </Button>
          </NavLink>

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
                          ? currentUser.email
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
          <Link to="/gio-hang" className={cx("cart-link")}>
            <LocalMallRoundedIcon
              style={{ cursor: "pointer", color: "#fff" }}
            />
            <p className={cx("total-order")}>{cartItems.length}</p>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
