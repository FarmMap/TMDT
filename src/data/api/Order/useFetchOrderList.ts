import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import OrderType from "../../types/Product/ProductType";
import Meta from "../../types/Meta/Meta";

interface UseFetchOrderListProps {
  page?: number;
  shouldRefesh?: boolean;
  storeId?: number;
}

interface OrderTypeResponse {
  meta: Meta;
  data: OrderType[];
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchOrderList = (props: UseFetchOrderListProps) => {
  let [orderList, setOrderList] = useState<OrderType[]>([]);
  let [page, setPages] = useState(1);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}orders?order=ASC&page=${
        props.page
      }&take=10&&storeId=${props.storeId ?? ""}`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data: OrderTypeResponse = response.data;
        setOrderList(data.data);
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
  }, [
    props.page,
    props.shouldRefesh,
    props.storeId,
  ]);

  return { orderList, page, error, isLoading };
};

export default useFetchOrderList;
