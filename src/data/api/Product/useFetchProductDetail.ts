import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import ProductType from "../../types/Product/ProductType";
import Meta from "../../types/Meta/Meta";

interface UseFetchProductDetailProps {
  //   page?: number;
  shouldRefesh?: boolean;
  id?: number;
}

interface ProductListResponse {
  //   meta: Meta;
  // data: ProductType;
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchProductDetail = (props: UseFetchProductDetailProps) => {
  let [product, setProduct] = useState<ProductType>({});
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}products/${props.id}`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data = response.data;
        setProduct(data);

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
  }, [props.id, props.shouldRefesh]);

  return { product, error, isLoading };
};

export default useFetchProductDetail;
