import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import ProductList from "../../types/Product/ProductList";
import Meta from "../../types/Meta/Meta";

interface UseFetchProductListProps {
  page?: number;
  shouldRefesh?: boolean;
}

interface ProductListResponse {
  meta: Meta;
  data: ProductList[];
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchProductList = (props: UseFetchProductListProps) => {
  let [productList, setProductList] = useState<ProductList[]>([]);
  let [page, setPages] = useState(1);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}products?order=ASC&page=${props.page}&take=10`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data: ProductListResponse = response.data;
        setProductList(data.data);
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

  return { productList, page, error, isLoading };
};

export default useFetchProductList;
