import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import ShopType from "../../types/Shop/ShopType";
interface ResponseError {
  code: string;
  message: string;
}

interface useFetchMyShopProps {
  shouldRefesh?: boolean;
}

const useFetchMyShop = (props: useFetchMyShopProps) => {
  let [myShop, setMyShop] = useState<ShopType>({});
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}shop/me`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data = response.data;
        setMyShop(data);

        setLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          let responseError: ResponseError = error.response
            .data as ResponseError;

          setError(responseError.message[0]);
        } else {
          let requestError = error.request;

          setError(requestError);
        }
        setLoading(false);
      });
  }, [props.shouldRefesh]);

  return { myShop, error, isLoading };
};

export default useFetchMyShop;
