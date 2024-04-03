import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import FeedBackType from "../../types/FeedBack/FeedBackType";

interface CreateFeedBackParams {
  feedBack: FeedBackType | undefined;
}

interface ResponseError {
  code: string;
  message: string;
}

const useCreateFeedBack = () => {
  const [isCreated, setCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const createFeedBack = useCallback((params: CreateFeedBackParams) => {
    setCreated(false);
    setError(null);
    setLoading(true);

    let data = JSON.stringify(params.feedBack);

    let config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}product-rating`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response: AxiosResponse) => {
        setCreated(true);
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
  }, []);

  return { isCreated, setCreated, error, isLoading, createFeedBack };
};

export default useCreateFeedBack;
