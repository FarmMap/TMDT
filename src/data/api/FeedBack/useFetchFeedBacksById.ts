import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import FeedBackType from "../../types/FeedBack/FeedBackType";

interface useFetchFeedBacksByIdProps {
  page?: number;
  shouldRefesh?: boolean;
  productId?: number;
  rating?: number;
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchFeedBacksById = (props: useFetchFeedBacksByIdProps) => {
  let [feedBacksById, setFeedBacksById] = useState<FeedBackType[]>([]);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}product-rating/{productId}?productId=${props.productId}&rating=${props.rating}`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data = response.data;
        setFeedBacksById(data);
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
  }, [props.productId, props.page, props.shouldRefesh, props.rating]);

  return { feedBacksById, error, isLoading };
};

export default useFetchFeedBacksById;
