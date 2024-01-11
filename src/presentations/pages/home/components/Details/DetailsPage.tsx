import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import DefaultLayOut from "../../../../components/defaultLayOut/DefaultLayOut";
import images from "../../../../../assets/images";
import StarIcon from "@mui/icons-material/Star";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Carousel from "react-material-ui-carousel";
import { NavLink } from "react-router-dom";
import InforShopPage from "./InforShopPage";
// Styles
import classNames from "classnames/bind";
import styles from "./DetailsPage.module.scss";

const cx = classNames.bind(styles);

const DetailsPage = () => {
  const [mainImageSrc, setMainImageSrc] = useState(images.dauGoiDau);

  const handleCarouselImageHover = (newSrc: string) => {
    setMainImageSrc(newSrc);
  };

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

  // Quantityy
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);

    // Kiểm tra nếu giá trị là một số và nằm trong khoảng từ 1 đến số sản phẩm có sẵn
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setQuantity(value);
    } else if (e.currentTarget.value === "") {
      // Nếu người dùng xóa hết giá trị, thì quay về giá trị mặc định là 1
      setQuantity(1);
    }
  };

  return (
    <DefaultLayOut>
      <Grid>
        <Grid className={cx("wapper")}>
          <Grid className={cx("container")} container>
            <Grid item className={cx("item", "item-left")} lg={5}>
              <Grid className={cx("main-img-wrap")}>
                <img className={cx("img-main")} src={mainImageSrc} alt="" />
                <button className={cx("heart-btn")}>
                  <FavoriteBorderIcon />
                </button>
                <button className={cx("share-btn")}>
                  <ShareOutlinedIcon />
                </button>
              </Grid>
              <Grid className={cx("carousel-container")}>
                <Carousel
                  stopAutoPlayOnHover={true}
                  indicators={false}
                  className={cx("carousel")}
                  height={"100px"}
                >
                  <Grid container justifyContent={"space-between"}>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowy6d9si08"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowy6d9si08"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowxcehx3b7"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowxcehx3b7"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowyqcgtz1d"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowyqcgtz1d"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                        alt=""
                      />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent={"space-between"}>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowy6d9si08"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowy6d9si08"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowxcehx3b7"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowxcehx3b7"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowyqcgtz1d"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowyqcgtz1d"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                        alt=""
                      />
                    </Grid>
                    <Grid lg={2}>
                      <img
                        onMouseEnter={() =>
                          handleCarouselImageHover(
                            "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                          )
                        }
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lq3fowygcv6afb"
                        alt=""
                      />
                    </Grid>
                  </Grid>
                </Carousel>
              </Grid>
            </Grid>
            <Grid item className={cx("item", "item-right")} lg={7}>
              <Grid className={cx("heading")}>
                <p>
                  Combo 2 Tắm gội 2 trong 1 Romano
                  Attitude/Gentleman/Force/Classic 2in1 650g/chai - 4 Mùi hương
                  có sẵn
                </p>
              </Grid>
              <Grid className={cx("price-wrap")}>
                <p className={cx("sale-price")}>299.000đ</p>
                <Grid className={cx("origin-price-wrapp")}>
                  <p>650.000đ</p>
                  <span>Giảm 54%</span>
                </Grid>
              </Grid>

              <Grid className={cx("comment-wrap")}>
                <span className={cx("feedBack-star")}>
                  {renderStarIcons("3")} <br />
                </span>
                <NavLink
                  style={{ color: "#4686fff2", margin: "0 12px" }}
                  to="#"
                >
                  3 đánh giá
                </NavLink>
                <span>
                  <ShoppingBagOutlinedIcon />
                  <p> 35 lượt mua</p>
                </span>
              </Grid>

              <Grid className={cx("sale-code-wrap")}>
                <p style={{ marginRight: "12px" }}>
                  Mã giảm giá <br /> của shop
                </p>
                <span>Giảm 15k</span>
                <span>Giảm 12k</span>
                <span>Giảm 10k</span>
              </Grid>

              <Grid className={cx("add-wrap")}>
                <Grid className={cx("quantity-wrapper")}>
                  <p>Chọn số lượng:</p>
                  <Grid display={"flex"} alignItems={"center"}>
                    <button disabled={quantity === 1} onClick={handleDecrease}>
                      -
                    </button>
                    <input value={quantity} onChange={handleInputChange} />
                    <button onClick={handleIncrease}>+</button>
                    <span style={{ marginLeft: "18px" }}>
                      100 sản phẩm có sẵn
                    </span>
                  </Grid>
                </Grid>

                <Grid className={cx("button-wrap")}>
                  <button style={{ backgroundColor: "#E7E8EA" }}>
                    Thêm vào giỏ
                  </button>
                  <button
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white-color)",
                    }}
                  >
                    Mua ngay
                  </button>
                </Grid>
              </Grid>

              <Grid className={cx("address-wrap")}>
                <h4>Thông tin vận chuyển</h4>
                <Grid className={cx("address-container")}>
                  <p>Vui lòng đăng kí thông tin vận chuyển</p>
                  <button>Đăng kí</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid>
            <InforShopPage />
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayOut>
  );
};
export default DetailsPage;
