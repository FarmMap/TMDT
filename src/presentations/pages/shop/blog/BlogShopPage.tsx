import React, { useState } from "react";
import InfoMyShopLayout from "../InfoMyShopLayout";
import { Grid } from "@mui/material";
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
// Styles
import classNames from "classnames/bind";
import styles from "./BlogShop.module.scss";
import images from "../../../../assets/images";
import TextEditTorShopPage from "./TextEditorShopPage";

const cx = classNames.bind(styles);
const BlogShopPage = () => {
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

  return (
    <InfoMyShopLayout>
      <Grid>
        {isOpen && <TextEditTorShopPage onClose={() => setIsOpen(false)} />}
        {!isOpen && (
          <Grid className={cx("wapper")}>
            <h3>Danh sách bài viết</h3>
            <Grid className={cx("container")}>
              <Grid className={cx("tools")}>
                <Input placeholder="Tìm kiếm tên bài viết..." />
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
            <Grid className={cx("content")}>
              <Grid className={cx("blog")}>
                <img src={images.bannerlogin} alt="" />
                <h4>
                  Đến năm 2050, Việt Nam trở thành nước có nền nông nghiệp hàng
                  đầu thế giới{" "}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi dolor, non nobis magnam assumenda beatae fugit neque est
                  doloribus fuga ipsam odit consequuntur fugiat iure voluptatem
                  error voluptas ea corporis!
                </p>
                <Grid className={cx("btn-tools")}>
                  <Button className={cx("btn-edit")}>
                    <BorderColorOutlinedIcon />
                    Chỉnh sửa
                  </Button>
                  <Button className={cx("btn-delete")}>
                    <DeleteOutlinedIcon />
                    Xóa
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </InfoMyShopLayout>
  );
};

export default BlogShopPage;
