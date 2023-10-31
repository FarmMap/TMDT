// External files
import Grid from "@mui/material/Grid";
import React from "react";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// Internal files
// Styles
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <DefaultLayOut>
      <Grid container className={cx("wrapper")}>
        <Grid item lg={3}>
          <Grid className={cx("heading-sidebar")}> Gợi ý cho bạn</Grid>
          <Grid className={cx("sidebar-item")}>
            <img src={images.traiCayTuoi} alt="ITFS sidebar" />
            <span>
              Trái cây
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.traiCayTuoi} alt="ITFS sidebar" />
            <span>
              Trái cây
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.traiCayTuoi} alt="ITFS sidebar" />
            <span>
              Trái cây
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.traiCayTuoi} alt="ITFS sidebar" />
            <span>
              Trái cây
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.traiCayTuoi} alt="ITFS sidebar" />
            <span>
              Trái cây
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>
        </Grid>
        <Grid item lg={9}></Grid>
      </Grid>
    </DefaultLayOut>
  );
};

export default HomePage;
