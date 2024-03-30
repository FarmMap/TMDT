import React, { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TodayIcon from "@mui/icons-material/Today";
import BlogPageLayout from "../BlogPageLayout";
import { Grid } from "@mui/material";
import { BlogList } from "../DataBlog";
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import useFetchBlogs from "../../../../data/api/Blog/useFetchBlogs";
import { toReadableDate } from "../../../../hooks/useReadableDate";

const cx = classNames.bind(styles);
const BlogPage = () => {
  const [page, setPage] = useState(1);
  // handle Pagination
  const handlePaginationChange = (event: any, value: number) => setPage(value);
  const {
    blogs,
    isLoading,
    page: pages,
  } = useFetchBlogs({
    page: page,
  });
  return (
    <BlogPageLayout>
      <Grid container spacing={2} className={cx("section")}>
        {blogs.map((blog, i) => (
          <Grid pb={"10px"} item xs={12} sm={6} key={i}>
            <Grid className={cx("blog")}>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}${blog.image}`}
                alt=""
              />
              <p className={cx("category")}>Hoạt động khuyến nông</p>
              <h3 className={cx("title")}>{blog.title}</h3>
              <div
                className={cx("content")}
                dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}
              />

              <Grid className={cx("details-blog")}>
                <p className={cx("shop")}>
                  <StorefrontIcon />
                  {blog.user?.fullName}
                </p>
                <p className={cx("date-post")}>
                  <TodayIcon />
                  {toReadableDate(blog.createdAt)}
                </p>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </BlogPageLayout>
  );
};

export default BlogPage;
