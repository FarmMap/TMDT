import React, { useEffect, useState } from "react";
import DefaultLayOut from "../../../../components/defaultLayOut/DefaultLayOut";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Checkbox, CheckboxProps } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
// Styles
import classNames from "classnames/bind";
import styles from "./CartShop.module.scss";
import images from "../../../../../assets/images";
import { cartData } from "./CartData";

const cx = classNames.bind(styles);

const CartShopPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Set initial product quantities based on cartData
  const initialProductQuantities: { [key: number]: number } = {};
  cartData.forEach((_, index) => {
    initialProductQuantities[index] = 1;
  });
  const [productQuantities, setProductQuantities] = useState(
    initialProductQuantities
  );

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Recalculate total price whenever checked items or product quantities change
    const newTotalPrice = cartData.reduce((total, cart, i) => {
      if (checkedItems[i] && productQuantities[i] !== undefined) {
        const priceAsNumber = parseFloat(cart.price);
        const quantity = productQuantities[i] || 0; // Ensure quantity is defined
        return total + priceAsNumber * quantity;
      }
      return total;
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [checkedItems, productQuantities]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = parseInt(e.currentTarget.value);

    if (!isNaN(value) && value >= 1 && value <= 100) {
      setProductQuantities({ ...productQuantities, [index]: value });
    } else if (e.currentTarget.value === "") {
      setProductQuantities({ ...productQuantities, [index]: 1 });
    }
  };

  const handleIncrease = (index: number) => {
    if (productQuantities[index] < 100) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [index]: prevQuantities[index] + 1,
      }));
    }
  };

  const handleDecrease = (index: number) => {
    if (productQuantities[index] > 1) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [index]: prevQuantities[index] - 1,
      }));
    }
  };

  const onChangeCheckbox = (index: number) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index],
    }));
  };

  return (
    <DefaultLayOut>
      <Grid>
        <Grid className={cx("wapper")}>
          <h4 className={cx("heading")}>
            Giỏ hàng của bạn <span>({cartData.length})</span>
          </h4>
          <Grid
            style={{ justifyContent: "space-around", marginTop: "15px" }}
            display={"flex"}
          >
            <Grid className={cx("product-order")} item lg={8}>
              {cartData.map((cart, i) => (
                <Grid
                  key={i}
                  mt={"1.2rem"}
                  style={{ background: "var(--white-color)" }}
                >
                  <Grid className={cx("shop")}>
                    <Grid className={cx("avatar-shop")}>
                      <img src={cart.avtShop} alt="" />
                      <p>{cart.nameShop}</p>
                    </Grid>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <MessageOutlinedIcon />
                      <span style={{ paddingLeft: "5px" }}>Chat với Shop</span>
                    </p>
                  </Grid>
                  <Grid className={cx("details-product")}>
                    <Checkbox onChange={() => onChangeCheckbox(i)}>
                      <Grid className={cx("checkbox")}>
                        <img src={cart.avtProduct} alt="trung" />
                        <Grid>
                          <p style={{ fontWeight: "bold" }}>
                            {cart.nameProduct}
                          </p>
                          <p>{cart.quantity}</p>
                        </Grid>
                      </Grid>
                    </Checkbox>
                    <Grid
                      display={"flex"}
                      style={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "50%",
                      }}
                    >
                      <Grid className={cx("price")}>
                        <h3>
                          {parseFloat(cart.price).toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </h3>

                        <p>
                          {parseFloat(cart.priceSale).toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                      </Grid>
                      <Grid className={cx("quantity-wrapper")}>
                        <button
                          disabled={productQuantities[i] === 1}
                          onClick={() => handleDecrease(i)}
                        >
                          -
                        </button>
                        <input
                          value={productQuantities[i] || 1}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                        <button onClick={() => handleIncrease(i)}>+</button>
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
              ))}
            </Grid>

            <Grid item lg={4} width={"30%"}>
              <Grid className={cx("sales")}>
                <Grid className={cx("heading-sales")}>
                  <p>
                    <LoyaltyOutlinedIcon />
                    <span>Mã ưu đãi</span>
                  </p>
                  <Grid className={cx("btn-sales")}>
                    <a href="#">Chọn mã ưu đãi</a>
                  </Grid>
                </Grid>
                <Grid className={cx("btn-price")}>
                  <Grid className={cx("total-price")}>
                    <p>Tạm tính</p>
                    <h4>
                      {totalPrice.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h4>
                  </Grid>
                  <Button
                    disabled={!Object.values(checkedItems).some(Boolean)}
                    block
                  >
                    Mua ngay
                  </Button>
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
