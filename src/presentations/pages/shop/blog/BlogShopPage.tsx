import React, { useState } from "react";
import InfoMyShopLayout from "../InfoMyShopLayout";
import { Grid, Pagination } from "@mui/material";
import { DownOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Dropdown,
  Input,
  MenuProps,
  Space,
  message,
} from "antd";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import TextEditTorShopPage from "./TextEditorShopPage";
import AccountPage from "../../account/AccountPage";
import useFetchMyBlog from "../../../../data/api/Blog/useFetchMyBlog";
// Styles
import classNames from "classnames/bind";
import styles from "./BlogShop.module.scss";
import useDebounce from "../../../../hooks/useDebounce";
const cx = classNames.bind(styles);

const BlogShopPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 700);
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items: MenuProps["items"] = [
    {
      label: "Tên người mua",
      key: "1",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  // handle Pagination
  const handlePaginationChange = (event: any, value: number) => setPage(value);

  const {
    myBlogs,
    page: pages,
    isLoading,
  } = useFetchMyBlog({
    page: page,
    shouldRefesh: refresh,
    search: searchDebounce,
  });

  return (
    <AccountPage>
      <Grid padding={"1.2rem"}>
        {isOpen && (
          <TextEditTorShopPage
            setRefresh={setRefresh}
            onClose={() => setIsOpen(false)}
          />
        )}
        {!isOpen && (
          <Grid className={cx("wapper")}>
            <h3>Danh sách bài viết</h3>
            <Grid className={cx("container")}>
              <Grid className={cx("tools")}>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.currentTarget.value)}
                  placeholder="Tìm kiếm tên bài viết..."
                />
                <Dropdown menu={menuProps}>
                  <Button className={cx("dropdown")}>
                    <Space className={cx("title-category")}>
                      <p>Danh mục</p>
                      <DownOutlined rev={undefined} />
                    </Space>
                  </Button>
                </Dropdown>
              </Grid>
              <Grid className={cx("btn-add")}>
                <Button onClick={() => setIsOpen(true)}>Thêm bài viết</Button>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={cx("content")}>
              {myBlogs.map((blog, i) => (
                <Grid item lg={3.7} key={i} className={cx("blog")}>
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}${blog.image}`}
                    alt="error"
                  />
                  <h4>{blog.title}</h4>

                  <p className={cx("description")}>{blog.description}</p>
                  <Grid className={cx("btn-tools")}>
                    <Button className={cx("btn-delete")}>
                      <DeleteOutlinedIcon />
                      Xóa
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            {!isLoading && (
              <Pagination
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
        )}
      </Grid>
    </AccountPage>
  );
};

export default BlogShopPage;
