// External
import LogoutIcon from "@mui/icons-material/Logout";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
// Internal
import DefaultAvatar from "../../defaultAvatar";
import images from "../../../../assets/images";
import useFetchMyAccount from "../../../../data/api/Account/useFetchMyAccount";

// Styles
import classNames from "classnames/bind";
import styles from "./AccountInfo.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

type AccountInfoProps = {};

const AccountInfo = (props: AccountInfoProps) => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const { user } = useFetchMyAccount({});
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user.roles === "ADMIN") setRole("Quản trị");
    else if (user.roles === "SHOP") setRole("Người bán");
    else setRole("Người mua");
  }, [user.roles]);
  return (
    <div className={cx("account-dropdown-wrapper")}>
      <div className={cx("header-account")}>
        <Tippy content={`thienan1804`} placement="bottom" theme="light">
          <div className={cx("user-cart-avt")}>
            <DefaultAvatar avatar={images.avatar} medium />
          </div>
        </Tippy>
        <div className={cx("user-cart-name")}>
          <Tippy content={`thienan1804`} placement="right" theme="light">
            <span className={cx("accountinfo-username")}>{user.fullName}</span>
          </Tippy>
          <span className={cx("accountinfo-role")}>{role}</span>
        </div>
      </div>
      <div
        className={cx("change-pass")}
        onClick={() => {
          window.location.href = "/tai-khoan/trang-ca-nhan";
        }}
      >
        <div className={cx("change-pass-icon")}>
          <PersonRoundedIcon />
        </div>
        <div className={cx("change-pass-title")}>
          <p>Tài khoản của tôi</p>
        </div>
      </div>
      <div className={cx("change-pass")}>
        <div className={cx("change-pass-icon")}>
          <SellRoundedIcon />
        </div>
        <div className={cx("change-pass-title")}>
          <p>Đơn mua</p>
        </div>
      </div>
      <div
        className={cx("change-pass")}
        onClick={() => {
          window.location.href = "/tu-van";
        }}
      >
        <div className={cx("change-pass-icon")}>
          <RecordVoiceOverIcon />
        </div>
        <div className={cx("change-pass-title")}>
          <p>Trợ giúp và tư vấn</p>
        </div>
      </div>
      <div className={cx("change-pass")} onClick={handleLogOut}>
        <div className={cx("change-pass-icon")}>
          <LogoutIcon />
        </div>
        <div className={cx("change-pass-title")}>
          <p>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
