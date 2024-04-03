import React, { useEffect, useState } from "react";
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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import TextEditTorShopPage from "./TextEditorShopPage";
import AccountPage from "../../account/AccountPage";
import useFetchMyBlog from "../../../../data/api/Blog/useFetchMyBlog";
// Styles
import classNames from "classnames/bind";
import styles from "./BlogShop.module.scss";
import useDebounce from "../../../../hooks/useDebounce";
import KDialog from "../../../components/kdialog/KDialog";
import useDeleteBlog from "../../../../data/api/Blog/useDeleteBlog";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

const BlogShopPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 700);

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

  // Delete blog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [blogId, setBlogId] = useState(0);
  const { isDeleted, deleteblog, error } = useDeleteBlog({
    blogId: blogId,
  });

  const handleConfirmDelete = () => {
    deleteblog();
  };

  useEffect(() => {
    if (isDeleted) {
      toast.success("Xóa bài viết thành công");
      setRefresh((refresh) => !refresh);
      setDialogOpen(false);
    } else if (error) {
      toast.error(error);
    }
  }, [error, isDeleted]);

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
                    <Button
                      onClick={() => {
                        setDialogOpen(true);
                        setBlogId(blog.id ?? 0);
                      }}
                      className={cx("btn-delete")}
                    >
                      <DeleteOutlinedIcon />
                      Xóa
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            {/* Delete dialog */}
            {dialogOpen && (
              <KDialog
                open={dialogOpen}
                title="Xác nhận xóa"
                bckColor="var(--second-color)"
                content={
                  <p>
                    Bài viết trên sẽ bị xóa khỏi hệ thống. <br />
                    Bạn có muốn xóa bài viết này không?
                  </p>
                }
                onCancel={() => {
                  setDialogOpen(false);
                  setBlogId(0);
                }}
                onConfirm={handleConfirmDelete}
              />
            )}

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
