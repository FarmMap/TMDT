import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import OrderType from "../../types/Order/OrderType";

interface useFetchMyOrderLatestProps {
  page?: number;
  shouldRefesh?: boolean;
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchMyOrderLatest = (props: useFetchMyOrderLatestProps) => {
  let [myOrdersLatest, setOrderType] = useState<OrderType>({});
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}orders/latest`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data = response.data;
        setOrderType(data);
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
  }, [props.page, props.shouldRefesh]);

  return { myOrdersLatest, error, isLoading };
};

export default useFetchMyOrderLatest;
