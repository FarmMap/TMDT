import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import TodayIcon from '@mui/icons-material/Today';
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import BlogPageLayout from '../BlogPageLayout';
import { Grid } from '@mui/material';
import images from '../../../../assets/images';
import { BlogList } from '../DataBlog';


const cx = classNames.bind(styles);
const BlogPage = () => {
    return (
        <BlogPageLayout>
            <Grid container spacing={2} className={cx("section")}>
                {BlogList.map((blog, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                        <Grid  className={cx("blog")}>
                            <img src={blog.image} alt="" />
                            <p className={cx("category")}>{blog.category}</p>
                            <h3 className={cx("title")}>{blog.title}</h3>
                            <p className={cx("content")}>{blog.content}</p>
                            <Grid className={cx("details-blog")}>
                                <p className={cx("shop")}><StorefrontIcon />{blog.shop}</p>
                                <p className={cx("date-post")}><TodayIcon />{blog.date}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </BlogPageLayout>
    )
}

export default BlogPage
