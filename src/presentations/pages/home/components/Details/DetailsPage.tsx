import React from 'react'
import Grid from "@mui/material/Grid";
import DefaultLayOut from "../../../../components/defaultLayOut/DefaultLayOut";
import images from "../../../../../assets/images";
import StarIcon from "@mui/icons-material/Star";
import Button from '@mui/material/Button';
import { Input } from 'antd';
// Styles
import classNames from "classnames/bind";
import styles from "./DetailsPage.module.scss";
import { productList } from '../../DataHome';


const cx = classNames.bind(styles);

const DetailsPage = () => {
  return (
    <DefaultLayOut>
        <Grid>
        <Grid className={cx("wapper")}>
            <Grid className={cx("image-details")}>             
                <img className={cx("image-product")} src={images.rauSach} alt='rau sach'/>
                <Grid>
                  <img className={cx("image-small")} src={images.cangu} alt='rau sach'/>
                  <img src={images.cason} alt='rau sach'/>
                  <img src={images.pseudo} alt='rau sach'/>
                  <img src={images.thitsuon} alt='rau sach'/>
                </Grid>
            </Grid>
            <Grid className={cx("details")}>
              <p>Loa Bluetooth Manovo M4 - Loa kép bass cực mạnh dây jack 3.5mm, Loa siêu trầm - hàng nhập khẩu</p>
              <p>196.000đ</p>
              <p>540.000đ <span>Giảm 73%</span></p>
              <p>4.6<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><span>26 lượt đánh giá</span><span>Đã bán 106</span></p>
              <Grid>
                <p>Chọn số lượng</p>
                <Grid>
                  <Button variant="outlined">-</Button>
                  <Input/>
                  <Button variant="outlined">+</Button>
                </Grid>
              </Grid>
              <Button variant="contained">Thêm vào giỏ hàng</Button>
              <Button variant="contained">Mua ngay</Button>
              <Grid>
                <p>Thông tin vận chuyển</p>
                <p>Giao đến Q.1, P.Bến Nghé, Hồ Chí Minh</p>
                <span>Giao đúng chiều Thứ Ba</span>
                <p>13h-18h, 15/11 : 14.000đ</p>
              </Grid>
              
            </Grid>
        </Grid>
        <Grid>
          <Grid>
              <p>Thông tin nhà bán</p>
                <Grid>
                  <img/>
                  <Grid>
                    <p>Tên shop</p>
                    <p><StarIcon/>4.6(35.9k+ đánh giá)<span>10.9k+ Theo dõi</span></p>
                  </Grid>
                  <Grid>
                    <Button variant="outlined">Theo dõi</Button>
                    <Button variant="outlined">Chat</Button>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
          <Grid>
            <p>Mô tả sản phẩm</p>
            <p>Bộ Dụng Cụ Ngoáy Tai Lấy Ráy Tai 6 Món Bằng Thép Không Gỉ Cao Cấp
              🔹Chất liệu: thép không rỉ🔹Kích thước: 10cm*2.5cm🔹Trọng lượng: 38 gram-Bao gồm 
              4 cây lấy ráy tai truyền thống, và cải tiến 2 cây lấy ráy tai đầu lò xo dạng xoay + đầu 3 ngấn giúp cọ sát ...</p>
          </Grid>
        </Grid>
    </DefaultLayOut>
  )
}
export default DetailsPage;
