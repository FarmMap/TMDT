import { message } from "antd";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import UserAccountType from "../../types/UserAccount/UserAccountType";

interface ResponseError {
  code: string;
  message: string;
}

interface ParamsUserAccount {
  user?: UserAccountType | undefined;
}

const useUpdateMyAccount = () => {
  const [isUpdated, setUpdate] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const updateUser = useCallback((params: ParamsUserAccount) => {
    setUpdate(false);
    setError(null);
    setLoading(true);
    let data = JSON.stringify(params.user);

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_BASE_URL}users`,
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
  }, []);

  return { isUpdated, setUpdate, error, isLoading, updateUser };
};

export default useUpdateMyAccount;
