import React from "react";
import Grid from "@mui/material/Grid";
import HeaderShop from "../headerShop/HeaderShop";
import Footer from "../footer/Footer";

// Styles
import classNames from "classnames/bind";
import styles from "./DefaultLayOutShop.module.scss";

const cx = classNames.bind(styles);

interface DefaultAppLayOutProps {
  children: React.ReactElement;
}

const DefaultLayOutShop = (props: DefaultAppLayOutProps) => {
  return (
    <Grid>
      <HeaderShop />
      <Grid className={cx("body-wrapper")}>{props.children}</Grid>
      <Footer />
    </Grid>
  );
};

export default DefaultLayOutShop;
