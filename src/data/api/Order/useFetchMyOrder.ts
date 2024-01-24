import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import OrderType from "../../types/Product/ProductType";
import Meta from "../../types/Meta/Meta";

interface useFetchMyOrderProps {
  page?: number;
  shouldRefesh?: boolean;
}

interface OrderResponse {
  meta: Meta;
  data: OrderType[];
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchMyOrder = (props: useFetchMyOrderProps) => {
  let [myOrders, setOrderType] = useState<OrderType[]>([]);
  let [page, setPages] = useState(1);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}orders?me?order=ASC&page=${props.page}&take=10`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data: OrderResponse = response.data;
        setOrderType(data.data);
        setPages(data.meta.pageCount ?? 0);
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

  return { myOrders, page, error, isLoading };
};

export default useFetchMyOrder;
