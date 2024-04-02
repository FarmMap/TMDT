import { Grid } from "@mui/material";
import React from "react";
import { sidebarBlog } from "./SidebarBlog";
import { NavLink } from "react-router-dom";
import images from "../../../assets/images";
import { Input, Space } from "antd";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";

import classNames from "classnames/bind";
import styles from "./BlogPageLayout.module.scss";
import { newsBlog } from "./DataBlog";
import useFetchNewBlogs from "../../../data/api/Blog/useFetchNewBlog";

const cx = classNames.bind(styles);
interface BlogPageLayoutProps {
  children: React.ReactElement;
}
const BlogPageLayout = (props: BlogPageLayoutProps) => {
  const { Search } = Input;
  const onSearch = () => {};
  const { newblogs } = useFetchNewBlogs({});

  return (
    <DefaultLayOut>
      <Grid className={cx("wapper")}>
        <Grid className={cx("category-blog")}>
          <Search
            className={cx("input-search")}
            placeholder="Tìm kiếm bài viết ..."
            onSearch={onSearch}
          />
          {sidebarBlog.map((sidebar, i) => (
            <NavLink to={sidebar.path} className={cx("sidebar-item")} key={i}>
              <span>{sidebar.title}</span>
            </NavLink>
          ))}
        </Grid>
        <Grid className={cx("section")}>{props.children}</Grid>
        <Grid className={cx("news-blog")}>
          <h3>Tin mới nhất</h3>
          {newblogs.map((news, i) => (
            <Grid key={i}>
              <NavLink
                className={cx("news")}
                to={`/tin-tuc/noi-dung/${news.id}`}
              >
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}${news.image}`}
                  alt="lỗi"
                />
                <p>{news.title}</p>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </DefaultLayOut>
  );
};

export default BlogPageLayout;
