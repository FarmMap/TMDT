// External files
import Grid from "@mui/material/Grid";
import React from "react";
import Carousel from "react-material-ui-carousel";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import GridViewIcon from "@mui/icons-material/GridView";
// Internal files
// Styles
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

const HomePage = () => {
  const imageList = [images.banner, images.banner, images.banner];
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
            <img src={images.raucu} alt="ITFS sidebar" />
            <span>
              Rau củ
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.thitvaca} alt="ITFS sidebar" />
            <span>
              Thịt và cá
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.banh} alt="ITFS sidebar" />
            <span>
              Tiệm bánh và đồ ăn nhẹ
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.sua} alt="ITFS sidebar" />
            <span>
              Sữa và trứng
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.douong} alt="ITFS sidebar" />
            <span>
              Đồ uống
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <img src={images.giavi} alt="ITFS sidebar" />
            <span>
              Gia vị
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>

          <Grid className={cx("sidebar-item")}>
            <GridViewIcon style={{ fontSize: "27px" }} />
            <span>
              Tất cả danh mục
              <KeyboardArrowRightRoundedIcon />
            </span>
          </Grid>
        </Grid>
        <Grid item lg={9}>
          <Carousel>
            {imageList.map((image, index) => (
              <Grid>
                {" "}
                <img src={image} key={index} alt="ITFSD-banner" />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </DefaultLayOut>
  );
};

export default HomePage;
