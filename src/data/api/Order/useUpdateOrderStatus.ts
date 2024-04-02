import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

interface ResponseError {
  code: string;
  message: string;
}

interface ParamsOrderStatus {
  status?: string;
}

interface UseUpdateOrderStatusProps {
    id?:number
}

const useUpdateOrderStatus = (props:UseUpdateOrderStatusProps) => {
  const [isUpdated, setUpdate] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const updateUser = useCallback((params: ParamsOrderStatus) => {
    setUpdate(false);
    setError(null);
    setLoading(true);
    let data = JSON.stringify(params);

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_BASE_URL}orders/${props.id}`,
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response: AxiosResponse) => {
        setUpdate(true);

        setLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          let responseError: ResponseError = error.response
            .data as ResponseError;

          setError(responseError.message);
        } else {
          let requestError = error.request;

          setError(requestError.message);
        }

        setLoading(false);
      });
  }, [props.id]);

  return { isUpdated, setUpdate, error, isLoading, updateUser };
};

export default useUpdateOrderStatus;
