import React, { useEffect, useState } from "react";
// Styles
import classNames from "classnames/bind";
import styles from "./ShopAccount.module.scss";
import { Button, Grid } from "@mui/material";
import ShopType from "../../../../data/types/Shop/ShopType";
import useCreateShop from "../../../../data/api/Shop/useCreateShop";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

interface FormCreateShopPageProps {
  setIsCreateShop: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCreateShopPage = (props: FormCreateShopPageProps) => {
  const handleSetCreateShop = () => {
    props.setIsCreateShop(false);
  };

  // Create shop API
  const [shop, setShop] = useState<ShopType>({});
  const [refresh, setRefresh] = useState(false);

  const {
    isCreated,
    error: createError,
    isLoading: isCreating,
    createShop,
  } = useCreateShop();

  const handleCreateShop = () => {
    createShop({ shop: shop });
  };

  // Set refresh
  useEffect(() => {
    if (isCreated) {
      setRefresh((refresh) => !refresh);
    }
  }, [isCreated]);

  // Show Noti
  useEffect(() => {
    let error = createError;
    let isSuccess = isCreated;

    if (error != null) {
      toast.error(error);
    }

    if (isSuccess) {
      toast.success("Tạo thành công!");
    }
  }, [createError, isCreated]);

  return (
    <form className={cx("form-wrapper")}>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="name">Tên cửa hàng</label>
        <input
          value={shop.name}
          onChange={(e) => {
            let newShop = { ...shop };
            newShop.name = e.currentTarget.value;
            setShop(newShop);
          }}
          type="text"
          id="name"
          placeholder="Nhập tên cửa hàng"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="phone">Số điện thoại</label>
        <input
          value={shop.phone}
          onChange={(e) => {
            let newShop = { ...shop };
            newShop.phone = e.currentTarget.value;
            setShop(newShop);
          }}
          type="text"
          id="phone"
          placeholder="Nhập số điện thoại"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="type">Loại hình kinh doanh</label>
        <Grid className={cx("radio-wrapper")}>
          <input
            className={cx("radio-btn")}
            type="radio"
            value="Cá nhân"
            checked={shop.type === "INDIVIDUAL"}
            onChange={(e) => {
              let newShop = { ...shop };
              newShop.type = "INDIVIDUAL";
              setShop(newShop);
            }}
            id="ca-nhan"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="ca-nhan">
            Cá nhân
          </label>
          <input
            className={cx("radio-btn")}
            type="radio"
            value="Doanh nghiệp"
            checked={shop.type === "ENTERPRISE"}
            onChange={(e) => {
              let newShop = { ...shop };
              newShop.type = "ENTERPRISE";
              setShop(newShop);
            }}
            id="doanh-nghiep"
            name="radio"
          />
          <label className={cx("label-radio")} htmlFor="doanh-nghiep">
            Doanh nghiệp
          </label>
        </Grid>
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="identity">Định danh</label>
        <input
          value={shop.identity}
          onChange={(e) => {
            let newShop = { ...shop };
            newShop.identity = e.currentTarget.value;
            setShop(newShop);
          }}
          type="text"
          id="identity"
          placeholder="Nhập định danh"
        />
      </Grid>
      <Grid className={cx("input-wrapper")}>
        <label htmlFor="taxCode">Mã số thuế</label>
        <input
          value={shop.taxCode}
          onChange={(e) => {
            let newShop = { ...shop };
            newShop.taxCode = e.currentTarget.value;
            setShop(newShop);
          }}
          type="text"
          id="taxCode"
          placeholder="Nhập mã số thuế"
        />
      </Grid>

      <Grid className={cx("confirm-wrapper")}>
        <Button onClick={handleSetCreateShop} variant="outlined">
          Quay lại
        </Button>
        <Button onClick={handleCreateShop} variant="contained">
          Xác nhận
        </Button>
      </Grid>
    </form>
  );
};

export default FormCreateShopPage;
