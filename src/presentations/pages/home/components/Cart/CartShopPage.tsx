import React, { useState } from 'react';
import DefaultLayOut from '../../../../components/defaultLayOut/DefaultLayOut';
import { Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Checkbox, CheckboxProps } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
// Styles
import classNames from 'classnames/bind';
import styles from './CartShop.module.scss';
import images from '../../../../../assets/images';

const cx = classNames.bind(styles);

const CartShopPage = () => {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
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
                <Grid className={cx('wapper')}>
                    <h4 className={cx('heading')}>
                        Giỏ hàng của bạn <span>(3)</span>
                    </h4>
                    <Grid style={{ justifyContent: "space-around", marginTop: "30px" }} display={"flex"}>
                        <Grid className={cx('product-order')} item lg={8}>
                            <Grid className={cx('shop')} >
                                <Grid className={cx("avatar-shop")}>
                                    <img src={images.dauGoiDau} alt="" />
                                    <p>Romano</p>
                                </Grid>
                                <p style={{ display: "flex", alignItems: "center" }}><MessageOutlinedIcon /><span style={{ paddingLeft: "5px" }}>Chat với Shop</span></p>
                            </Grid>
                            <Grid className={cx("details-product")}>
                                <Checkbox onChange={onChange} >
                                    <Grid className={cx("checkbox")}>
                                        <img src={images.trung} alt="trung" />
                                        <Grid>
                                            <p>Trứng gà nhập khẩu</p>
                                            <p>30 quả</p>
                                        </Grid>
                                    </Grid>
                                </Checkbox>
                                <Grid display={"flex"} style={{ justifyContent: "space-evenly", alignItems: "center", width: "50%" }}>
                                    <Grid className={cx("price")}>
                                        <h3>99.000đ</h3>
                                        <p>123.000đ</p>
                                    </Grid>
                                    <Grid className={cx("quantity-wrapper")}>
                                        <button disabled={quantity === 1} onClick={handleDecrease}>
                                            -
                                        </button>
                                        <input value={quantity} onChange={handleInputChange} />
                                        <button onClick={handleIncrease}>+</button>
                                    </Grid>
                                    <Grid className={cx("icon")}>
                                        <FavoriteBorderIcon />
                                    </Grid>
                                    <Grid className={cx("icon")}>
                                        <DeleteIcon />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} width={"30%"}>
                            <Grid className={cx("sales")}>
                                <Grid className={cx("heading-sales")} >
                                    <p><LoyaltyOutlinedIcon /><span>Mã ưu đãi</span></p>
                                    <Grid className={cx("btn-sales")}>
                                        <a href="#">Chọn mã ưu đãi</a>
                                    </Grid>
                                </Grid>
                                <Grid className={cx("btn-price")}>
                                    <Grid className={cx("total-price")}>
                                        <p>Tạm tính</p>
                                        <h4>125.000đ</h4>
                                    </Grid>
                                    <Button block>Mua ngay</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </DefaultLayOut>
    );
};

export default CartShopPage;
