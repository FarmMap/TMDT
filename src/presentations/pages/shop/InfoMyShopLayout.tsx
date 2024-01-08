// External files
import Grid from "@mui/material/Grid";
import React from "react";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";

// Internal files
import images from "../../../assets/images";
import DefaultAvatar from "../../components/defaultAvatar";
import { sidebarList } from "./SidebarMyShop";
import { NavLink } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useFetchMyShop from "../../../data/api/Shop/useFetchMyShop";

// Styles
import classNames from "classnames/bind";
import styles from "./InfoMyShopLayout.module.scss";

const cx = classNames.bind(styles);
interface InfoMyShopLayoutProps {
  children: React.ReactElement;
}
const InfoMyShopLayout = (props: InfoMyShopLayoutProps) => {
  const { myShop, isLoading } = useFetchMyShop({});

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
              <DefaultAvatar medium avatar={images.defalutShopAvt} />

              <Grid className={cx("heading-sidebar-infor")}>
                {!isLoading ? (
                  <>
                    {" "}
                    <p>{myShop.name ? myShop.name : "Romano"}</p>
                    <p>
                      {myShop.type == "INDIVIDUAL" ? "Cá nhân" : "Doanh nghiệp"}
                    </p>
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

export default InfoMyShopLayout;
