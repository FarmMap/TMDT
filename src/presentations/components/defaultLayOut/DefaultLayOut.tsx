import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// Styles
import classNames from "classnames/bind";
import styles from "./DefaultLayOut.module.scss";

const cx = classNames.bind(styles);

interface DefaultAppLayOutProps {
  children: React.ReactElement;
}

const DefaultLayOut = (props: DefaultAppLayOutProps) => {
  return (
    <Grid>
      <Header />
      <Grid className={cx("body-wrapper")}>{props.children}</Grid>
      <Footer />
    </Grid>
  );
};

export default DefaultLayOut;
