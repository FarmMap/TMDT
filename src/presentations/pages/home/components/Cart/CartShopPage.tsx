import React, { useEffect, useState } from "react";
import DefaultLayOut from "../../../../components/defaultLayOut/DefaultLayOut";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Checkbox, CheckboxProps, Divider } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import { useCart } from "./CartContext";
import { useNavigate } from 'react-router-dom';

// Styles
import classNames from "classnames/bind";
import styles from "./CartShop.module.scss";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const CartShopPage = () => {
  const { cartState, dispatch } = useCart();
  const [selectAll, setSelectAll] = useState(false);
  const { cartItems } = cartState;
  const [showDeleteAll, setShowDeleteAll] = useState(false); // Added state
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const navigate = useNavigate();

  //delete đơn hàng
  const handleDelete = (index: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItems[index].id });
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = { ...prevCheckedItems };
      delete updatedCheckedItems[index];
      return updatedCheckedItems;
    });
    toast.success("Sản phẩm đã được xóa khỏi giỏ hàng");
  };
  //remove all đơn hàng

  const handleDeleteAll = () => {
    // Implement logic to delete selected items here
    const selectedItems = Object.entries(checkedItems)
      .filter(([_, isSelected]) => isSelected)
      .map(([index]) => Number(index));

    // Dispatch action to remove selected items
    selectedItems.forEach((index) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: cartItems[index].id });
    });

    setCheckedItems({}); // Clear the checked items
    setShowDeleteAll(false); // Hide the "Xóa tất cả" button
    toast.success("Xóa sản phẩm thành công");
  };

  // Set initial product quantities based on cartData
  const initialProductQuantities: { [key: number]: number } = {};
  cartItems.forEach((_, index) => {
    initialProductQuantities[index] = cartItems[index].quantityProduct;
  });
  const [productQuantities, setProductQuantities] = useState(
    initialProductQuantities
  );

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Recalculate total price whenever checked items or product quantities change
    const newTotalPrice = cartItems.reduce((total, cart, i) => {
      if (checkedItems[i] && productQuantities[i] !== undefined) {
        const priceAsNumber = cart.priceSale || cart.price;
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

  //check alll
  const handleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setCheckedItems(
      cartItems.reduce((prev, _, index) => {
        prev[index] = !selectAll;
        return prev;
      }, {} as { [key: number]: boolean })
    );
    setShowDeleteAll(!selectAll && cartItems.length > 0); // Toggle the visibility of the "Xóa tất cả" button
  };

  const handleBuyNow = () => {
    const selectedItems = cartItems.filter((_, index) => checkedItems[index]);
    
    if (selectedItems.length === 0) {
      toast.error("Vui lòng chọn ít nhất một sản phẩm");
      return;
    }

    const orderItems = selectedItems.map(item => ({
      id: item.id,
      quantity: productQuantities[cartItems.indexOf(item)]
    }));

    navigate('/gio-hang/thanh-toan', { state: { orderItems } });
  };

  return (
    <DefaultLayOut>
      <Grid>
        <Grid className={cx("wapper")}>
          <h4 className={cx("heading")}>
            Giỏ hàng của bạn <span>({cartItems.length})</span>
          </h4>
          <Grid
            style={{ justifyContent: "space-around", marginTop: "15px" }}
            display={"flex"}
          >
            <Grid className={cx("product-order")} item lg={8} >
              {cartItems.map((cart, i) => (
                <Grid
                  key={i}
                  style={{ background: "var(--white-color)" }}
                >
                  <Grid className={cx("shop")}>
                    <Grid className={cx("avatar-shop")}>
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}${cart.imageStore}`}
                        alt=""
                      />
                      <p>{cart.nameStore}</p>
                    </Grid>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <MessageOutlinedIcon />
                      <span style={{ paddingLeft: "5px" }}>Chat với Shop</span>
                    </p>
                  </Grid>
                  <Grid className={cx("details-product")}>
                    <Checkbox
                      checked={checkedItems[i]}
                      onChange={() => onChangeCheckbox(i)}
                    >
                      <Grid className={cx("checkbox")}>
                        <img
                          src={`${process.env.REACT_APP_API_BASE_URL}${cart.image}`}
                          alt="trung"
                        />
                        <Grid>
                          <p style={{ fontWeight: "bold" }}>{cart.name}</p>
                          <p>
                            {cart.weight} {cart.unit}
                          </p>
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
                          {cart.priceSale?.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </h3>

                        <p>
                          {cart.price?.toLocaleString("it-IT", {
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
                      <Grid className={cx("icon-favorite")}>
                        <FavoriteBorderIcon />
                      </Grid>
                      <Grid
                        onClick={() => handleDelete(i)}
                        className={cx("icon-delete")}
                      >
                        <DeleteIcon />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
              {cartItems.length > 0 && (
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  style={{
                    background: "var(--white-color)",
                    padding: "1rem 2rem",
                  }}
                >
                  <Checkbox onChange={handleSelectAll} checked={selectAll}>
                    Chọn tất cả
                  </Checkbox>
                  {showDeleteAll && ( // Conditionally render the "Xóa tất cả" button
                    <Button
                      style={{
                        background: "var(--second-color)",
                        borderRadius: "0.3rem",
                        border: "none",
                        color: "var(--white-color)",
                        height: "2.7rem",
                        fontSize: "1.2rem",
                      }}
                      onClick={handleDeleteAll}
                    >
                      Xóa tất cả
                    </Button>
                  )}
                </Grid>
              )}
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
                    onClick={handleBuyNow}
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
