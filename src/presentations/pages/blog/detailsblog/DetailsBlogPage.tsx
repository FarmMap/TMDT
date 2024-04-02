import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import DefaultLayOut from "../../../components/defaultLayOut/DefaultLayOut";
import useFetchBlogById from "../../../../data/api/Blog/useFetchBlogById";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
//style
import classNames from "classnames/bind";
import styles from "./DetailsBlog.module.scss";
import { toReadableDate } from "../../../../hooks/useReadableDate";
import useFetchNewBlogs from "../../../../data/api/Blog/useFetchNewBlog";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
const DetailsBlogPage = () => {
  const param = useParams();
  const [blogId, setBlogId] = useState<number | undefined>(undefined);
  const { newblogs } = useFetchNewBlogs({});

  // Use useEffect to update id when id changes
  useEffect(() => {
    if (param.blogId) {
      const parsedId = parseInt(param.blogId, 10);
      if (!isNaN(parsedId)) {
        setBlogId(parsedId);
      }
    }
  }, [param.blogId]);
  const { blogById } = useFetchBlogById({
    blogId: blogId,
  });
  return (
    <DefaultLayOut>
      <Grid container className={cx("wrapper")}>
        <Grid item lg={9} className={cx("content-wrap")}>
          <Grid className={cx("title-wrap")}>
            <h1>{blogById.title}</h1>
            <p>
              <AccessTimeIcon />
              {toReadableDate(blogById.createdAt)}
            </p>
            <h3>{blogById.description}</h3>
          </Grid>

          <Grid className={cx("content")} width={"100%"}>
            <div
              className={cx("content")}
              dangerouslySetInnerHTML={{ __html: blogById.content ?? "" }}
            />
          </Grid>
        </Grid>
        <Grid item lg={2.5} className={cx("new-blog-wrap")}>
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

export default DetailsBlogPage;
