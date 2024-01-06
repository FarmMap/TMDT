// External files
import Grid from "@mui/material/Grid";
import React from "react";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import GridViewIcon from "@mui/icons-material/GridView";
// Internal files
import images from "../../../assets/images";
import useFetchMyAccount from "../../../data/api/Account/useFetchMyAccount";
import DefaultAvatar from "../../components/defaultAvatar";
import { sidebarList } from "./SidebarAccount";
import { NavLink } from "react-router-dom";
import ProfilePage from "./profile/ProfilePage";
import { CircularProgress } from "@mui/material";
// Styles
import classNames from "classnames/bind";
import styles from "./AccountPage.module.scss";

const cx = classNames.bind(styles);
interface AccountPageProps {
  children: React.ReactElement;
}
const AccountPage = (props: AccountPageProps) => {
  const { user, isLoading } = useFetchMyAccount({});

  return (
    <DefaultLayOut>
      <Grid>
        <Grid
          container
          justifyContent={"space-between"}
          className={cx("wrapper")}
        >
          <Grid item lg={2.5} style={{ background: "rgb(245, 245, 250)" }}>
            <Grid className={cx("heading-sidebar")}>
              <DefaultAvatar medium avatar={images.avatar} />

              <Grid className={cx("heading-sidebar-infor")}>
                {!isLoading ? (
                  <>
                    {" "}
                    <p>{user.fullName}</p>
                    <p>{user.email}</p>
                  </>
                ) : (
                  <CircularProgress
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "var(--border-color)",
                    }}
                  />
                )}
              </Grid>
            </Grid>
            {sidebarList.map((sidebar, i) => (
              <NavLink to={sidebar.path} className={cx("sidebar-item")} key={i}>
                {sidebar.icon}
                <span>{sidebar.title}</span>
              </NavLink>
            ))}
          </Grid>
          <Grid item lg={9.5}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayOut>
  );
};

export default AccountPage;
