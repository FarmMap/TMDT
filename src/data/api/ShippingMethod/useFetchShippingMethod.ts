import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import ShippingMethodType from "../../types/ShippingMethod/ShippingMethodType";

interface ResponseError {
  code: string;
  message: string;
}

interface useFetchShippingMethodProps {
  shouldRefesh?: boolean;
}

const useFetchShippingMethod = (props: useFetchShippingMethodProps) => {
  let [shippingMethod, setShippingMethod] = useState<ShippingMethodType[]>([]);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}shipping-methods`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data = response.data;
        setShippingMethod(data);

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

  return { shippingMethod, error, isLoading };
};

export default useFetchShippingMethod;
