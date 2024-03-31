import React from "react";
import classNames from "classnames/bind";
import styles from "./DetailsBlog.module.scss";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import DefaultLayOut from "../../../components/defaultLayOut/DefaultLayOut";

const cx = classNames.bind(styles);
const DetailsBlogPage = () => {
  const param = useParams();
  return (
    <DefaultLayOut>
      <Grid>hi</Grid>
    </DefaultLayOut>
  );
};

export default DetailsBlogPage;
