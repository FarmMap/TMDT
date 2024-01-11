import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { Grid } from "@mui/material";
import ShopType from "../../../../data/types/Shop/ShopType";
import useCreateShop from "../../../../data/api/Shop/useCreateShop";
import { toast } from "react-toastify";
import FormStep1Shop from "./FormStepShop/FormStep1Shop";

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
      title: "Cài đặt vận chuyển",
      content: "Second-content",
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

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default FormCreateShopPage;
