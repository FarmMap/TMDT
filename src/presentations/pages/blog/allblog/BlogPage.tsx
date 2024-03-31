import React, { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TodayIcon from "@mui/icons-material/Today";
import BlogPageLayout from "../BlogPageLayout";
import { Grid, Pagination } from "@mui/material";
import { BlogList } from "../DataBlog";
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import useFetchBlogs from "../../../../data/api/Blog/useFetchBlogs";
import { toReadableDate } from "../../../../hooks/useReadableDate";
import { NavLink } from "react-router-dom";

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
            <NavLink to={`/tin-tuc/noi-dung/${blog.id}`}>
              <Grid className={cx("blog")}>
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}${blog.image}`}
                  alt=""
                />
                <p className={cx("category")}>
                  {blog.categories?.map((item, i) => (
                    <p key={i}>{item.name}</p>
                  ))}
                </p>
                <h3 className={cx("title")}>{blog.title}</h3>
                <p className={cx("content")}>{blog.description}</p>
                {/* <div
                  className={cx("content")}
                  dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}
                /> */}

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
            </NavLink>
          </Grid>
        ))}
        {!isLoading && (
          <Pagination
            style={{ margin: "12px auto" }}
            count={pages}
            page={page}
            defaultPage={1}
            variant="outlined"
            color="primary"
            shape="rounded"
            onChange={handlePaginationChange}
            sx={{
              marginTop: {
                lg: "0",
                md: "0",
                sm: "30px",
                xs: "30px",
              },
            }}
          />
        )}
      </Grid>
    </BlogPageLayout>
  );
};

export default BlogPage;
