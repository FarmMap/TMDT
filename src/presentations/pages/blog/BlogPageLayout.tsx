import { Grid } from '@mui/material'
import React from 'react'
import { sidebarBlog } from './SidebarBlog';
import { NavLink } from 'react-router-dom';
import images from '../../../assets/images';
import { Input, Space } from 'antd';
import DefaultLayOut from '../../components/defaultLayOut/DefaultLayOut';

import classNames from "classnames/bind";
import styles from "./BlogPageLayout.module.scss";
import { newsBlog } from './DataBlog';


const cx = classNames.bind(styles);
interface BlogPageLayoutProps {
    children: React.ReactElement;
  }
const BlogPageLayout = (props: BlogPageLayoutProps) => {

    const { Search } = Input;
    const onSearch = () => { }


    return (
        <DefaultLayOut>
            <Grid className={cx("wapper")}>
                <Grid className={cx("category-blog")}>
                    <Search className={cx("input-search")} placeholder="Tìm kiếm bài viết ..." onSearch={onSearch} />
                    {sidebarBlog.map((sidebar, i) => (
                        <NavLink to={sidebar.path} className={cx("sidebar-item")} key={i}>
                            <span>{sidebar.title}</span>
                        </NavLink>
                    ))}
                </Grid>
                <Grid className={cx("section")}>
                    {props.children}
                </Grid>
                <Grid className={cx("news-blog")}>
                    <h3>Tin mới nhất</h3>
                    {newsBlog.map((news, i)=>(
                        <Grid key={i} className={cx("news")}>
                        <img src={news.img} alt="" />
                        <p>{news.name}</p>
                    </Grid>
                    ))}
                    
                </Grid>
            </Grid>
        </DefaultLayOut>

    )
}

export default BlogPageLayout
