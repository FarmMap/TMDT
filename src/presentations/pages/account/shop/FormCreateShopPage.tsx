import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { Grid } from "@mui/material";
import ShopType from "../../../../data/types/Shop/ShopType";
import useCreateShop from "../../../../data/api/Shop/useCreateShop";
import { toast } from "react-toastify";
import FormStep1Shop from "./FormStepShop/FormStep1Shop";
import FormStep2Shop from "./FormStepShop/FormStep2Shop";
import FormStep3Shop from "./FormStepShop/FormStep3Shop";
import { useNavigate } from "react-router-dom";

interface FormCreateShopPageProps {
  setIsCreateShop: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCreateShopPage = (props: FormCreateShopPageProps) => {
  // Create variable shop API
  const [shop, setShop] = useState<ShopType>({});

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
      content: <FormStep3Shop shop={shop} setShop={setShop} />,
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

  // end step

  // APi
  const { isCreated, error: createShopErr, createShop } = useCreateShop();
  const navigate = useNavigate();

  const handleCreateShop = () => {
    createShop({ shop: shop });
  };

  useEffect(() => {
    if (isCreated) {
      toast.success("Thao tác thành công, vui lòng chờ xét duyệt");
      setTimeout(() => navigate("/"), 3000);
    } else if (createShopErr) {
      toast.error("Vui lòng điền đầy đủ thông tin yêu cầu");
    }
  }, [createShopErr, isCreated, navigate]);

  return (
    <Grid>
      <Steps current={current} items={items} />
      <div style={{ margin: "4rem 0" }}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < 2 && (
          <Button type="default" onClick={() => next()}>
            Tiếp theo
          </Button>
        )}
        {current === 2 && (
          <Button
            disabled={shop ? false : true}
            type="primary"
            onClick={handleCreateShop}
          >
            Hoàn thành
          </Button>
        )}
        {current > 0 && (
          <Button
            type="text"
            style={{ margin: "0 8px" }}
            onClick={() => prev()}
          >
            Quay lại
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default FormCreateShopPage;
