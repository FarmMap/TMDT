import React from "react";
import { Button, Grid } from "@mui/material";
import DefaultAvatar from "../../../../components/defaultAvatar";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// Styles
import classNames from "classnames/bind";
import styles from "./InforShopPage.module.scss";
import images from "../../../../../assets/images";

const cx = classNames.bind(styles);

const InforShopPage = () => {
  // Hàm này tạo mảng StarIcon màu vàng và màu xám dựa trên độ dài của feedBack
  const renderStarIcons = (rating: string | undefined) => {
    const numericRating = parseFloat(rating ? rating : "");
    const roundedRating = Math.floor(numericRating);
    const hasHalfStar = numericRating - roundedRating > 0.5;

    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        starIcons.push(
          <span key={i} className={cx("feedBack-star")}>
            <StarIcon />
          </span>
        );
      } else if (i === roundedRating && hasHalfStar) {
        starIcons.push(
          <span key={i} className={cx("feedBack-star")}>
            <StarIcon style={{ color: "#ffd700" }} />
          </span>
        );
      } else {
        starIcons.push(
          <span key={i} className={cx("feedBack-star")}>
            <StarIcon style={{ color: "#ddd" }} />
          </span>
        );
      }
    }
    return starIcons;
  };
  return (
    <Grid className={cx("wrapper")}>
      <Grid
        justifyContent={"space-between"}
        className={cx("container")}
        container
      >
        <Grid item lg={5} className={cx("item")} maxHeight={"240px"}>
          <Grid className={cx("heading")}>
            <h4>Thông tin nhà cung cấp</h4>
          </Grid>
          <Grid className={cx("info-shop-wrap")}>
            <Grid className={cx("avatar-wrap")}>
              <DefaultAvatar
                large
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6d0xT7511-bDWKn5-ie9NNqI6x_mZ_KlIvYkemPIQoETP5FA7ealetYxOgdRopg8byE&usqp=CAU"
              />
              <button></button>
            </Grid>
            <Grid className={cx("info")}>
              <p>Romano</p>
              <span>TP. Hồ Chí Minh | 4.5</span>
            </Grid>
          </Grid>

          <Grid container className={cx("about-wrap")}>
            <Grid item lg={1.9}>
              <p>4 năm</p>
              <span
                style={{ textAlign: "center", display: "block", width: "100%" }}
              >
                Hoạt động
              </span>
            </Grid>
            <Grid item lg={1.9}>
              <p>302</p>
              <span
                style={{ textAlign: "center", display: "block", width: "100%" }}
              >
                Sản phẩm
              </span>
            </Grid>
            <Grid item lg={1.9}>
              <p>1 ngày</p>
              <span>Chuẩn bị hàng</span>
            </Grid>
            <Grid item lg={1.9}>
              <p>77%</p>
              <span>Tỉ lệ phản hồi</span>
            </Grid>
            <Grid item lg={1.9}>
              <p>Vài ngày</p>
              <span>Shop phản hồi</span>
            </Grid>
          </Grid>

          <Grid
            className={cx("follow-wrap")}
            container
            justifyContent={"space-between"}
          >
            <Button variant="contained" startIcon={<AddCardOutlinedIcon />}>
              <p>Theo dõi shop</p>
            </Button>
            <Button variant="contained" startIcon={<StorefrontOutlinedIcon />}>
              <p>Vào shop</p>
            </Button>
          </Grid>
        </Grid>

        <Grid item lg={6.8}>
          <Grid className={cx("item")}>
            <Grid className={cx("description-wrap")}>
              <h4>Mô tả sản phẩm</h4>
              <p style={{ lineHeight: "26px" }}>
                - Kích thước: dài 12cm, rộng 8.5cm, dày 3.5cm. <br /> - Phương
                pháp sản xuất: THỦ CÔNG <br /> - Chất liệu: 100% DA BÒ <br />-
                Thiết kế: hiện đại,trẻ trung ,sang trọng chức năng: đựng thẻ
                ,điện thoại ,tiền ,giấy tờ tùy thân <br /> ROMANO HƯƠNG THÀNH
                CÔNG - CHẤT ĐÀN ÔNG
              </p>
            </Grid>
            <Grid className={cx("description-wrap")}>
              <h4>Chi tiết sản phẩm</h4>
              <p style={{ lineHeight: "26px" }}>
                - Kích thước: dài 12cm, rộng 8.5cm, dày 3.5cm. <br /> - Phương
                pháp sản xuất: THỦ CÔNG <br /> - Chất liệu: 100% DA BÒ <br />-
                Thiết kế: hiện đại,trẻ trung ,sang trọng chức năng: đựng thẻ
                ,điện thoại ,tiền ,giấy tờ tùy thân <br /> ROMANO HƯƠNG THÀNH
                CÔNG - CHẤT ĐÀN ÔNG
              </p>
            </Grid>
          </Grid>

          <Grid className={cx("item")} marginTop={"22px"}>
            <Grid className={cx("comment-title")}>
              Đánh giá nhận xét về sản phẩm <span>(3 lượt đánh giá)</span>
            </Grid>

            <Grid className={cx("star-container")} container>
              <Grid item lg={6} borderRight={"1px solid var(--border-color)"}>
                <Grid className={cx("numberCmt-wrap")}>
                  <p>2.7</p> <span>/5</span>{" "}
                  <span
                    style={{ marginLeft: "8px" }}
                    className={cx("feedBack-star")}
                  >
                    {renderStarIcons("3")} <br />
                  </span>
                </Grid>
                <Grid
                  color={"#bbbaba"}
                  fontSize={"1.2rem"}
                  fontStyle={"italic"}
                >
                  <p>
                    Đây là thông tin người mua đánh giá shop bán sản phẩm này có
                    đúng mô tả không.
                  </p>
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("5")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}></Grid>
                  <p>0</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("4")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}></Grid>
                  <p>0</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("3")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}></Grid>
                  <p>0</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("2")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}></Grid>
                  <p>0</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("1")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}></Grid>
                  <p>0</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={cx("filter-btn")}>
              <button>Tất cả</button>
              <button>5 sao</button>
              <button>4 sao</button>
              <button>3 sao</button>
              <button>2 sao</button>
              <button>1 sao</button>
            </Grid>

            <Grid className={cx("content-cmt")}>
              <Grid className={cx("content-heading")}>
                <DefaultAvatar medium avatar={images.avatar} small />
                <Grid className={cx("info-user")}>
                  <Grid>
                    <Grid
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <p>Văn Nhơn</p>
                      <span
                        style={{ marginLeft: "8px" }}
                        className={cx("feedBack-star")}
                      >
                        {renderStarIcons("3")} <br />
                      </span>
                    </Grid>
                    <span>12:11 | 7/1/2024</span>
                  </Grid>

                  <section>
                    giao hàng chậm. báo thời gian linh tinh. phản ánh mới chịu
                    giao. sp chưa xem nên k nhận xét. nhưng cách làm việc quá tệ
                  </section>

                  <Grid className={cx("like-wrap")}>
                    <Grid
                      width={"50px"}
                      textAlign={"center"}
                      padding={"4px 0"}
                      color={"#000"}
                      style={{ background: "#e8e8e8" }}
                    >
                      Đen
                    </Grid>
                    <ThumbUpOutlinedIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={cx("content-cmt")}>
              <Grid className={cx("content-heading")}>
                <DefaultAvatar medium avatar={images.avatar} small />
                <Grid className={cx("info-user")}>
                  <Grid>
                    <Grid
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <p>Văn Nhơn</p>
                      <span
                        style={{ marginLeft: "8px" }}
                        className={cx("feedBack-star")}
                      >
                        {renderStarIcons("3")} <br />
                      </span>
                    </Grid>
                    <span>12:11 | 7/1/2024</span>
                  </Grid>

                  <section>
                    giao hàng chậm. báo thời gian linh tinh. phản ánh mới chịu
                    giao. sp chưa xem nên k nhận xét. nhưng cách làm việc quá tệ
                  </section>

                  <Grid className={cx("like-wrap")}>
                    <Grid
                      width={"50px"}
                      textAlign={"center"}
                      padding={"4px 0"}
                      color={"#000"}
                      style={{ background: "#e8e8e8" }}
                    >
                      Đen
                    </Grid>
                    <ThumbUpOutlinedIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InforShopPage;
