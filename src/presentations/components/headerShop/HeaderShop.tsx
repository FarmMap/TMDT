import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import DefaultAvatar from "../defaultAvatar";
import useFetchMyAccount from "../../../data/api/Account/useFetchMyAccount";
import Tippy from "@tippyjs/react";
import DefaultDropDown from "../defaultDropDown";
import AccountInfo from "../../components/header/components/AccountInfo";
import useAuth from "../../../hooks/useAuth";

// Styles
import classNames from "classnames/bind";
import styles from "./HeaderShop.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
const Header = () => {
  const [showAccount, setShowAccount] = useState(false);

  const { user: currentUser, isLoading } = useFetchMyAccount({});
  const [user] = useAuth();

  return (
    <Grid className={cx("container")}>
      <Grid className={cx("wrapper")}>
        <Grid className={cx("logo")}>
          <NavLink to="/" style={{ display: "flex" }}>
            <img src={images.logo} alt="logo" />
          </NavLink>
        </Grid>
        <Grid className={cx("icon-wrapper")}>
          <Grid className={cx("icon")}>
            <HelpOutlineIcon />
            Hướng dẫn
          </Grid>
          <Grid className={cx("icon")}>
            <LibraryBooksOutlinedIcon />
            Chính sách
          </Grid>
          <Grid>
            <NotificationsOutlinedIcon />
          </Grid>
          {!user ? (
            <Link to="/dang-nhap">
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
                >
                  {!isLoading ? (
                    <>
                      <DefaultAvatar avatar={images.avatar} small />
                      <span>{currentUser.fullName}</span>
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
