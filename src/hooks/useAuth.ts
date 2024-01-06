import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import UserAccountType from "../data/types/UserAccount/UserAccountType";

type RequestError = {
  code: string;
  message: string;
};

function useAuth() {
  const [user, setUser] = useState<UserAccountType | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<String | undefined>(
    undefined
  );
  const token: string | null = window.localStorage.getItem("token");

  useEffect(() => {
    if (token == null) {
      setUser(undefined);
      setErrorMessage("Cần đăng nhập trước mới có thể vào trang này");
    }

    if (token != null) {
      var config = {
        method: "GET",
        url: `${process.env.REACT_APP_API_BASE_URL}users?order=ASC&page=1&take=10`,
        headers: { Authorization: `Bearer ${token}` },
      };

      axios(config)
        .then((response: AxiosResponse) => {
          let user: UserAccountType = response.data;
          setUser(user);
        })
        .catch((error: AxiosError) => {
          setUser(undefined);
          setErrorMessage((error.response?.data as RequestError).message);
        });
    }
  }, [token]);

  return [user, errorMessage];
}

export default useAuth;
