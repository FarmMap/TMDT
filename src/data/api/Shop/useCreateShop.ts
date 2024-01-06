import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

import ShopType from "../../types/Shop/ShopType";

interface CreateShopParams {
  shop: ShopType;
}

interface ResponseError {
  code: string;
  message: string;
}

const useCreateShop = () => {
  const [isCreated, setCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const createShop = useCallback((params: CreateShopParams) => {
    setCreated(false);
    setError(null);
    setLoading(true);

    let data = JSON.stringify(params.shop);

    let config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}shop`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
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

  return { isCreated, setCreated, error, isLoading, createShop };
};

export default useCreateShop;
