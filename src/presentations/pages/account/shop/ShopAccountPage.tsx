import React, { useState } from "react";
import AccountPage from "../AccountPage";
import { Button, Grid } from "@mui/material";
import images from "../../../../assets/images";
import FormCreateShopPage from "./FormCreateShopPage";

// Styles
import classNames from "classnames/bind";
import styles from "./ShopAccount.module.scss";

const cx = classNames.bind(styles);

const ShopAccountPage = () => {
  const [isCreateShop, setIsCreateShop] = useState(false);
  // handle setState CreateShop
  const handleSetCreateShop = () => {
    setIsCreateShop(true);
  };
  return (
    <AccountPage>
      <Grid>
        {!isCreateShop ? (
          <Grid className={cx("container")}>
            <img src={images.bannerShopAcc} alt="bannerShop" />
            <p>
              Chào mừng đến với ArgiMarket - Đăng ký để trở thành người bán
              hàng!
            </p>
            <Button
              onClick={handleSetCreateShop}
              variant="contained"
              className={cx("signup-shop-btn")}
            >
              Bắt đầu đăng kí
            </Button>
          </Grid>
        ) : (
          <Grid className={cx("create-wrapper")}>
            <Grid className={cx("create-wrapper-heading")}>
              Thông tin cửa hàng
            </Grid>
            <Grid>
              <FormCreateShopPage setIsCreateShop={setIsCreateShop} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </AccountPage>
  );
};

export default ShopAccountPage;
