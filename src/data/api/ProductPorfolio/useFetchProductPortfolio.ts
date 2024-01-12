import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import ProductPortfolioType from "../../types/ProductPortfolio/ProductPortfolioType";

interface ResponseError {
  code: string;
  message: string;
}

interface useFetchProductPorfolioProps {
  shouldRefesh?: boolean;
}

const useFetchProductPorfolio = (props: useFetchProductPorfolioProps) => {
  let [productPort, setProductPort] = useState<ProductPortfolioType[]>([]);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}product-categories`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data = response.data;
        setProductPort(data);

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

  return { productPort, error, isLoading };
};

export default useFetchProductPorfolio;
