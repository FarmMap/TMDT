import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { Grid } from "@mui/material";
import ShopType from "../../../../data/types/Shop/ShopType";
import useCreateShop from "../../../../data/api/Shop/useCreateShop";
import { toast } from "react-toastify";
import FormStep1Shop from "./FormStepShop/FormStep1Shop";
import FormStep2Shop from "./FormStepShop/FormStep2Shop";

interface FormCreateShopPageProps {
  setIsCreateShop: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCreateShopPage = (props: FormCreateShopPageProps) => {
  // Create variable shop API
  const [shop, setShop] = useState<ShopType>({});
  const [refresh, setRefresh] = useState(false);

  // step
  const steps = [
    {
      title: "Thông tin cửa hàng",
      content: <FormStep1Shop shop={shop} setShop={setShop} />,
    },
    {
      title: "Thông tin thuế",
      content: <FormStep2Shop shop={shop} setShop={setShop} />,
    },
    {
      title: "Thông tin định danh",
      content: "Last-content",
    },
    {
      title: "Hoàn tất",
      content: "Last-content",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  // Validate
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    if (current === 0) {
      if (
        shop.name !== "" &&
        shop.pickupAddress?.map((item) => item[1]) !== undefined &&
        shop.email !== "" &&
        shop.phone !== "" &&
        shop.shippingMethodIds?.length !== 0
      ) {
        setIsNext(true);
      } else {
        setIsNext(false);
      }
    }
  }, [
    current,
    shop.email,
    shop.name,
    shop.phone,
    shop.pickupAddress,
    shop.shippingMethodIds?.length,
  ]);

  // console.log(isNext, current, shop);

  // end step

  const handleSetCreateShop = () => {
    props.setIsCreateShop(false);
  };

  return (
    <Grid>
      <Steps current={current} items={items} />
      <div style={{ margin: "4rem 0" }}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button disabled={!isNext} type="primary" onClick={() => next()}>
            Tiếp theo
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Hoàn thành
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Quay lại
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default FormCreateShopPage;
