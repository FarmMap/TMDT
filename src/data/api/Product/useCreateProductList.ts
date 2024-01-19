import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import ProductType from "../../types/Product/ProductType";

interface ResponseError {
  code: string;
  message: string;
}

interface ParamsProductType {
  products?: ProductType | undefined;
}

interface useCreateProductListProps {
  storeId?: number;
}

const useCreateProductList = (props: useCreateProductListProps) => {
  const [isCreated, setCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const createProductList = useCallback((params: ParamsProductType) => {
    setCreated(false);
    setError(null);
    setLoading(true);
    const FormData = require("form-data");
    var data = new FormData();
    data.append("name", params.products?.name);
    data.append("retailPrice", params.products?.retailPrice);
    data.append("salePrice", params.products?.salePrice);
    data.append("saleStartDate", params.products?.saleStartDate);
    data.append("saleEndDate", params.products?.saleEndDate);

    data.append("inventory", params.products?.inventory);
    data.append("weight", params.products?.weight);
    data.append("unit", params.products?.unit);
    data.append("isActive", params.products?.isActive);
    data.append("description", params.products?.description);
    data.append("productCategoryId", params.products?.productCategoryId);
    if (params.products?.images && params.products?.images.length > 0) {
      params.products?.images.forEach((image) => {
        data.append("images", image);
      });
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_BASE_URL}products/${props.storeId}`,
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    axios(config)
      .then((response: AxiosResponse) => {
        setCreated(true);

        setLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          let responseError: ResponseError = error.response
            .data as ResponseError;

          setError(responseError.message);
        } else {
          let requestError = error.request;

          setError(requestError);
        }

        setLoading(false);
      });
  }, []);

  return { isCreated, setCreated, error, isLoading, createProductList };
};

export default useCreateProductList;
