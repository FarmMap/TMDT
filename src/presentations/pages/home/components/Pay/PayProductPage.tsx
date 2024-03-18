import React, { useEffect, useState } from "react";
import DefaultLayOut from "../../../../components/defaultLayOut/DefaultLayOut";
import { Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Button, Input, RadioChangeEvent } from "antd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useFetchMyAccount from "../../../../../data/api/Account/useFetchMyAccount";
import useFetchProductDetail from "../../../../../data/api/Product/useFetchProductDetail";
import DefaultModal from "../../../../components/defaultModal/DefaultModal";
import DefaultDropDown from "../../../../components/defaultDropDown";
import GetPlaceVietNamPage from "./GetPlaceVietNamPage";
import OrderType from "../../../../../data/types/Order/OrderType";
import useFetchProvinceList from "../../../../../data/api/Place/useFetchProvince";
import useFetchDistrictByProvinceCode from "../../../../../data/api/Place/useFetchDistrictByProvinceCode";
import useFetchWardByDistrictCode from "../../../../../data/api/Place/useFetchWardByDistrictCode";
// Styles
import classNames from "classnames/bind";
import styles from "./PayProduct.module.scss";
import UserAccountType from "../../../../../data/types/UserAccount/UserAccountType";
import useFetchDistrictList from "../../../../../data/api/Place/useFetchDistrictList";
import useFetchWardList from "../../../../../data/api/Place/useFetchWardList";
import useUpdateMyAccount from "../../../../../data/api/Account/useUpdateMyAccount";
import { toast } from "react-toastify";
import useCreateOrder from "../../../../../data/api/Order/useCreateOrder";

const cx = classNames.bind(styles);
const PayProductPage = () => {
  //status checked
  //end status checked

  // API
  const [refresh, setRefresh] = useState(false);

  const { user } = useFetchMyAccount({
    shouldRefesh: refresh,
  });
  const params = useParams();

  const [productId, setProductId] = useState<number | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  const [showPlace, setShowPlace] = useState(false);

  const [userUpdate, setUserUpdate] = useState<UserAccountType>({});
  const { provinceList } = useFetchProvinceList({});
  const { districtList } = useFetchDistrictList({});

  const { wardList } = useFetchWardByDistrictCode({
    code: userUpdate.districtCode
      ? userUpdate.districtCode
      : user.district?.code,
  });

  // Use useEffect to update productId when id changes
  useEffect(() => {
    if (params.productId) {
      const parsedId = parseInt(params.productId, 10);
      if (!isNaN(parsedId)) {
        setProductId(parsedId);
      }
    }
  }, [params.productId]);

  const { product } = useFetchProductDetail({
    id: productId,
  });

  useEffect(() => {
    if (
      Object.keys(userUpdate).length === 0 &&
      userUpdate.constructor === Object
    ) {
      setUserUpdate({
        fullName: user.fullName,
        provinceCode: user.province?.code,
        districtCode: user.district?.code,
        wardCode: user.ward?.code,
        address: user.address,
      });
    }
  }, [
    user.address,
    user.district?.code,
    user.fullName,
    user.province?.code,
    user.ward?.code,
    userUpdate,
  ]);

  const {
    isUpdated: userUpdated,
    error: updateUserErr,
    updateUser,
  } = useUpdateMyAccount();

  const handleUpdateUser = () => {
    updateUser({ user: userUpdate });
  };

  useEffect(() => {
    if (userUpdated) {
      toast.success("Cập nhật thành công");
      setRefresh((refresh) => !refresh);
    } else if (updateUserErr) {
      toast.error(updateUserErr);
    }
  }, [updateUserErr, userUpdated]);

  // Use useEffect to update productId when id changes
  useEffect(() => {
    if (params.quantity) {
      const parsedQuantity = parseInt(params.quantity, 10);
      if (!isNaN(parsedQuantity)) {
        setQuantity(parsedQuantity);
      }
    }
  }, [params.quantity]);

  const [order, setOrder] = useState<OrderType>({});

  useEffect(() => {
    if (Object.keys(order).length === 0 && order.constructor === Object) {
      setOrder({
        provinceCode: `${user.province?.code}`,
        districtCode: user.district?.code,
        wardCode: user.ward?.code,
        address: user.address,
        orderDetails: [
          {
            productId: productId,
            quantity: quantity,
            note: "",
          },
        ],
      });
    }
  }, [
    order,
    productId,
    quantity,
    user.address,
    user.district?.code,
    user.province?.code,
    user.ward?.code,
    userUpdate.provinceCode,
  ]);

  const navigate = useNavigate();

  const { isCreated, error, createOrder } = useCreateOrder();

  const handleSubmitOrder = () => {
    const newOrder = { ...order };
    newOrder.provinceCode = user.province?.code;
    newOrder.districtCode = user.district?.code;
    newOrder.wardCode = user.ward?.code;
    newOrder.address = user.address ?? "Chưa cập nhật";
    newOrder.orderDetails = [
      {
        productId: productId,
        quantity: quantity,
        note: "",
      },
    ];
    setOrder(newOrder);

    createOrder({ order: newOrder });
    localStorage.setItem("don-hang", JSON.stringify(newOrder.id));
  };

  useEffect(() => {
    if (isCreated) {
      navigate(`/san-pham/${product.id}/thanh-toan-thanh-cong`);
    } else if (error) {
      toast.error(error);
    }
  }, [error, isCreated]);

  // thanh toan
  const totalPrice = product?.productPrice?.salePrice
    ? (product?.productPrice?.salePrice || 0) * (quantity || 0)
    : (product?.productPrice?.retailPrice || 0) * (quantity || 0);

  return (
    <DefaultLayOut>
      <Grid>
        <Grid className={cx("wapper")}>
          {showModal && (
            <DefaultModal
              overrideMaxWidth={{
                lg: "600px",
              }}
              title={"Thay đổi địa chỉ"}
              onClose={() => {
                setUserUpdate({});
                setShowModal(false);
              }}
            >
              <Grid>
                <Grid>
                  <label htmlFor="name">Họ & tên</label>
                  <Input
                    className={cx("input")}
                    value={userUpdate.fullName ?? user.fullName}
                    onChange={(e) => {
                      let newUser = { ...userUpdate };
                      newUser.fullName = e.currentTarget.value;
                      setUserUpdate(newUser);
                    }}
                    type="text"
                    id="name"
                  />
                </Grid>

                <Grid>
                  <label htmlFor="">Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</label>
                  <DefaultDropDown
                    visible={showPlace}
                    childrenRender={
                      <GetPlaceVietNamPage
                        user={userUpdate}
                        setUser={setUserUpdate}
                      />
                    }
                  >
                    <Button
                      onClick={() => setShowPlace(!showPlace)}
                      className={cx("addressBtn")}
                    >
                      <p>
                        {provinceList.map((province, i) =>
                          userUpdate.provinceCode
                            ? province.code === userUpdate.provinceCode &&
                              province.name
                            : province.code === user.province?.code &&
                              province.name
                        )}{" "}
                        {userUpdate.districtCode || user.district ? "/" : ""}
                        {districtList.map((district, i) =>
                          userUpdate.districtCode
                            ? district.code === userUpdate.districtCode &&
                              district.name
                            : district.code === user.district?.code &&
                              district.name
                        )}
                        {userUpdate.wardCode || user.ward ? "/" : ""}
                        {wardList.map((ward, i) =>
                          userUpdate.wardCode
                            ? ward.code === userUpdate.wardCode && ward.name
                            : ward.code === user.ward?.code && ward.name
                        )}
                      </p>
                      <ArrowDropDownIcon />
                    </Button>
                  </DefaultDropDown>
                </Grid>
                <Grid>
                  <label htmlFor="name">Địa chỉ chi tiết</label>
                  <Input
                    className={cx("input")}
                    value={userUpdate.address ?? user.address}
                    onChange={(e) => {
                      let newUser = { ...userUpdate };
                      newUser.address = e.currentTarget.value;
                      setUserUpdate(newUser);
                    }}
                    type="text"
                    id="name"
                  />
                </Grid>

                <Grid textAlign={"right"}>
                  <Button
                    onClick={handleUpdateUser}
                    style={{
                      width: "9.4rem",
                      background: "var(--primary-color)",
                      color: "var(--white-color)",
                    }}
                  >
                    Cập nhật
                  </Button>
                </Grid>
              </Grid>
            </DefaultModal>
          )}

          <Grid item lg={8} className={cx("part-one")}>
            <Grid className={cx("address")}>
              <Grid className={cx("location")}>
                <p>
                  <LocationOnIcon />
                  <span>Địa chỉ nhận hàng</span>
                </p>
                <p onClick={() => setShowModal(true)}>Thay đổi</p>
              </Grid>
              <Grid className={cx("profile")}>
                <h4>
                  {user.fullName ?? "Người dùng Argi"}{" "}
                  <span>| {user.phone ?? "Vui lòng cập nhật SĐT "}</span>
                </h4>
                <p>
                  {user.province?.name} - {""} {user.district?.name} -{""}{" "}
                  {user.ward?.name} -{" "}
                  {user.address ?? "Vui lòng cập nhật địa chỉ chi tiết"}
                </p>
              </Grid>
            </Grid>
            <Grid className={cx("details")}>
              <Grid className={cx("heading-details")}>
                <p>
                  <InventoryIcon />
                  <span>Thông tin đơn hàng</span>
                </p>
              </Grid>
              <Grid className={cx("product-order")}>
                <Grid className={cx("heading-shop")}>
                  <p>
                    Cửa hàng : <span>{product.store?.name}</span>
                  </p>
                </Grid>
                <Grid className={cx("item")}>
                  <Grid>
                    <img
                      src={`http://116.118.49.43:3998/${product.images?.[0]}`}
                      alt={product.name}
                    />
                  </Grid>
                  <Grid className={cx("title")}>
                    <Grid>
                      <h4>{product.name}</h4>
                      <p>
                        {product.productPrice?.salePrice?.toLocaleString(
                          "vi-VN",
                          {
                            style: "currency",
                            currency: "VND",
                          }
                        )}{" "}
                        <span>
                          {product.productPrice?.retailPrice?.toLocaleString(
                            "vi-VN",
                            {
                              style: "currency",
                              currency: "VND",
                            }
                          )}
                        </span>
                      </p>
                    </Grid>
                    <Grid>
                      <p style={{ color: "#000" }}>x{quantity}</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} className={cx("part-two")}>
            <Grid className={cx("sales")}>
              <Grid className={cx("heading-sales")}>
                <p>
                  <LoyaltyOutlinedIcon />
                  <span>Mã ưu đãi</span>
                </p>
              </Grid>
              <Grid className={cx("btn-sales")}>
                <Button block>Chọn mã ưu đãi</Button>
              </Grid>
            </Grid>

            <Grid className={cx("order")}>
              <Grid className={cx("price-order")}>
                <p>Tiền hàng</p>
                <h4>
                  {product.productPrice?.salePrice
                    ? product.productPrice?.salePrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })
                    : product.productPrice?.retailPrice?.toLocaleString(
                        "vi-VN",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                </h4>
              </Grid>

              <Grid className={cx("line")}>
                <span></span>
              </Grid>
              <Grid className={cx("total-price")}>
                <p>Tổng thanh toán</p>
                <h4>
                  {totalPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h4>
              </Grid>

              <Grid className={cx("btn-order")}>
                <Button onClick={handleSubmitOrder} block>
                  Đặt mua
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayOut>
  );
};

export default PayProductPage;
