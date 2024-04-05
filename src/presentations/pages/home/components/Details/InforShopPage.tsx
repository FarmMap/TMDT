import React, { useState } from "react";
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
import ProductType from "../../../../../data/types/Product/ProductType";
import useFetchFeedBacksStatistic from "../../../../../data/api/FeedBack/useFetchFeedBacksStatistic";
import useFetchFeedBacksById from "../../../../../data/api/FeedBack/useFetchFeedBacksById";

const cx = classNames.bind(styles);

interface InforShopPageProps {
  product: ProductType;
}

const InforShopPage = (props: InforShopPageProps) => {
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

  // feedback
  const [refresh, setRefresh] = useState(false);
  const ratingTotal = [5, 4, 3, 2, 1];
  const [rating, setRating] = useState(5);
  const { feedBackStatistic } = useFetchFeedBacksStatistic({
    productId: props.product.id,
    shouldRefesh: refresh,
  });

  const { feedBacksById } = useFetchFeedBacksById({
    productId: props.product.id,
    rating: rating,
  });

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
              <DefaultAvatar large avatar={images.defalutShopAvt} />
              <button></button>
            </Grid>
            <Grid className={cx("info")}>
              <p>{props.product.store?.name}</p>
              <span>
                {props.product.store?.storeLocation?.provinceCode ?? "TP HCM"}
              </span>
            </Grid>
          </Grid>

          <Grid container className={cx("about-wrap")}>
            <Grid item lg={1.9}>
              <p>4 năm</p>
              <span>Hoạt động</span>
            </Grid>
            <Grid item lg={1.9}>
              <p>302</p>
              <span>Sản phẩm</span>
            </Grid>
            <Grid item lg={1.9}>
              <p>Nhanh</p>
              <span>Vận chuyển</span>
            </Grid>
            <Grid item lg={1.9}>
              <p>Cá nhân</p>
              <span>LH Kinh doanh</span>
            </Grid>
            <Grid item lg={1.9}>
              <p>Vài ngày</p>
              <span>Shop phản hồi</span>
            </Grid>
          </Grid>

          {/* <Grid
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
          </Grid> */}
        </Grid>

        <Grid item lg={6.8}>
          <Grid className={cx("item")}>
            <Grid className={cx("description-wrap")}>
              <h4>Mô tả sản phẩm</h4>
              <p style={{ lineHeight: "26px" }}>
                {props.product.description !== "undefined"
                  ? props.product.description
                  : "Chưa có mô tả về sản phẩm"}
              </p>
            </Grid>
          </Grid>

          <Grid className={cx("item")} marginTop={"22px"}>
            <Grid className={cx("comment-title")}>
              Đánh giá nhận xét về sản phẩm{" "}
              <span>({props.product.ratings?.length} lượt đánh giá)</span>
            </Grid>

            <Grid className={cx("star-container")} container>
              <Grid item lg={6} borderRight={"1px solid var(--border-color)"}>
                <Grid className={cx("numberCmt-wrap")}>
                  <p>{feedBackStatistic[0] ?? 0}</p> <span>/5</span>{" "}
                  <span
                    style={{ marginLeft: "8px" }}
                    className={cx("feedBack-star")}
                  >
                    {renderStarIcons(feedBackStatistic[0]?.toString())} <br />
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
                  <Grid className={cx("input-cmt")}>
                    <Grid
                      style={{
                        width: `${
                          feedBackStatistic[5] &&
                          props.product.ratings &&
                          (feedBackStatistic[5] /
                            props.product.ratings?.length) *
                            100
                        }%`,
                        borderTopRightRadius:
                          feedBackStatistic[5] &&
                          props.product.ratings &&
                          (feedBackStatistic[5] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                        borderBottomRightRadius:
                          feedBackStatistic[5] &&
                          props.product.ratings &&
                          (feedBackStatistic[5] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                      }}
                      className={cx("input-item")}
                    ></Grid>
                  </Grid>
                  <p>{feedBackStatistic[5]}</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("4")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}>
                    <Grid
                      style={{
                        width: `${
                          feedBackStatistic[4] &&
                          props.product.ratings &&
                          (feedBackStatistic[4] /
                            props.product.ratings?.length) *
                            100
                        }%`,
                        borderTopRightRadius:
                          feedBackStatistic[4] &&
                          props.product.ratings &&
                          (feedBackStatistic[4] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                        borderBottomRightRadius:
                          feedBackStatistic[4] &&
                          props.product.ratings &&
                          (feedBackStatistic[4] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                      }}
                      className={cx("input-item")}
                    ></Grid>
                  </Grid>
                  <p>{feedBackStatistic[4]}</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("3")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}>
                    <Grid
                      style={{
                        width: `${
                          feedBackStatistic[3] &&
                          props.product.ratings &&
                          (feedBackStatistic[3] /
                            props.product.ratings?.length) *
                            100
                        }%`,
                        borderTopRightRadius:
                          feedBackStatistic[3] &&
                          props.product.ratings &&
                          (feedBackStatistic[3] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                        borderBottomRightRadius:
                          feedBackStatistic[3] &&
                          props.product.ratings &&
                          (feedBackStatistic[3] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                      }}
                      className={cx("input-item")}
                    ></Grid>
                  </Grid>
                  <p>{feedBackStatistic[3]}</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("2")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}>
                    <Grid
                      style={{
                        width: `${
                          feedBackStatistic[2] &&
                          props.product.ratings &&
                          (feedBackStatistic[2] /
                            props.product.ratings?.length) *
                            100
                        }%`,
                        borderTopRightRadius:
                          feedBackStatistic[2] &&
                          props.product.ratings &&
                          (feedBackStatistic[2] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                        borderBottomRightRadius:
                          feedBackStatistic[2] &&
                          props.product.ratings &&
                          (feedBackStatistic[2] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                      }}
                      className={cx("input-item")}
                    ></Grid>
                  </Grid>
                  <p>{feedBackStatistic[2]}</p>
                </Grid>
                <Grid className={cx("countCmtWrap")}>
                  <span className={cx("feedBack-star")}>
                    {renderStarIcons("1")} <br />
                  </span>
                  <Grid className={cx("input-cmt")}>
                    <Grid
                      style={{
                        width: `${
                          feedBackStatistic[1] &&
                          props.product.ratings &&
                          (feedBackStatistic[1] /
                            props.product.ratings?.length) *
                            100
                        }%`,
                        borderTopRightRadius:
                          feedBackStatistic[1] &&
                          props.product.ratings &&
                          (feedBackStatistic[1] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                        borderBottomRightRadius:
                          feedBackStatistic[1] &&
                          props.product.ratings &&
                          (feedBackStatistic[1] /
                            props.product.ratings?.length) *
                            100 ===
                            100
                            ? "10px"
                            : "0",
                      }}
                      className={cx("input-item")}
                    ></Grid>
                  </Grid>
                  <p>{feedBackStatistic[1]}</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={cx("filter-btn")}>
              {ratingTotal.map((total, i) =>
                rating === total ? (
                  <button
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white-color)",
                    }}
                    onClick={() => {
                      setRating(total);
                      setRefresh((refresh) => !refresh);
                    }}
                    key={i}
                  >
                    {total} sao
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setRating(total);
                      setRefresh((refresh) => !refresh);
                    }}
                    key={i}
                  >
                    {total} sao
                  </button>
                )
              )}
            </Grid>

            {feedBacksById.map((feedback, i) => (
              <Grid key={i} className={cx("content-cmt")}>
                <Grid className={cx("content-heading")}>
                  <DefaultAvatar medium avatar={images.avatar} small />
                  <Grid className={cx("info-user")}>
                    <Grid>
                      <Grid
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <p>{feedback.user?.fullName}</p>
                        <span
                          style={{ marginLeft: "8px" }}
                          className={cx("feedBack-star")}
                        >
                          {renderStarIcons(feedback.rating?.toString())} <br />
                        </span>
                      </Grid>
                      <span>12:11 | 7/1/2024</span>
                    </Grid>

                    <section>{feedback.comment}</section>

                    {/* <Grid className={cx("like-wrap")}>
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
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InforShopPage;
