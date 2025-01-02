import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import Meta from "../../types/Meta/Meta";
import ShopType from "../../types/Shop/ShopType";

interface UseFetchShopListProps {
  page?: number;
  shouldRefesh?: boolean;
}

interface ShopTypeResponse {
  meta: Meta;
  data: ShopType[];
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchShopList = (props: UseFetchShopListProps) => {
  let [shopList, setShopList] = useState<ShopType[]>([]);
  let [page, setPages] = useState(1);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}store?order=ASC&page=${props.page}&take=10`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data: ShopTypeResponse = response.data;
        setShopList(data.data);
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

  return { shopList, page, error, isLoading };
};

export default useFetchShopList;
