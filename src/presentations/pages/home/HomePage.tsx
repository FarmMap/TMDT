// External files
import Grid from "@mui/material/Grid";
import React from "react";
import Carousel from "react-material-ui-carousel";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import GridViewIcon from "@mui/icons-material/GridView";
// Internal files
import { sidebarList, imageList } from "./DataHome";
import CategoryPage from "./components/Category/CategoryPage";
// Styles
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ProductListPage from "./components/ProductList/ProductListPage";

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <DefaultLayOut>
      <Grid>
        <Grid container className={cx("wrapper")}>
          <Grid item lg={3}>
            <Grid className={cx("heading-sidebar")}> Gợi ý cho bạn</Grid>
            {sidebarList.map((sidebar, i) => (
              <Grid className={cx("sidebar-item")} key={i}>
                <img src={sidebar.src} alt="ITFS sidebar" />
                <span>
                  {sidebar.text}
                  <KeyboardArrowRightRoundedIcon />
                </span>
              </Grid>
            ))}

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

        <Grid>
          <CategoryPage />
        </Grid>

        <Grid>
          <ProductListPage />
        </Grid>
      </Grid>
    </DefaultLayOut>
  );
};

export default HomePage;
