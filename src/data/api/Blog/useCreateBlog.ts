import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import BlogType from "../../types/Blog/BlogType";

interface ResponseError {
  code: string;
  message: string;
}

interface ParamsBlogType {
  blogs?: BlogType | undefined;
}

const useCreateBlog = () => {
  const [isCreated, setCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const createBlog = useCallback((params: ParamsBlogType) => {
    setCreated(false);
    setError(null);
    setLoading(true);
    const FormData = require("form-data");
    var data = JSON.stringify(params.blogs);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_BASE_URL}articles`,
      headers: {
        accept: "*/*",
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

  return { isCreated, setCreated, error, isLoading, createBlog };
};

export default useCreateBlog;
