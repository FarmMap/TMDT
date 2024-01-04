import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import ProductPortfolioType from "../../types/ProductPortfolio/ProductPortfolioType";
import { env } from "process";

interface ResponseError {
  code: string;
  message: string;
}

interface useFetchProductPorfolioProps {
  shouldRefesh?: boolean;
}

const useFetchProductPorfolio = (props: useFetchProductPorfolioProps) => {
  let [productPort, setProductPort] = useState<ProductPortfolioType>({});
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}product-categories`,
      headers: {
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZS1jb21tZXJjZS0yZDY5ZiIsImF1ZCI6ImUtY29tbWVyY2UtMmQ2OWYiLCJhdXRoX3RpbWUiOjE3MDQzNTk3OTQsInVzZXJfaWQiOiJaMjYwYUZaTWtTTXZnc3F4NGZPdEJxU1ZQNHAyIiwic3ViIjoiWjI2MGFGWk1rU012Z3NxeDRmT3RCcVNWUDRwMiIsImlhdCI6MTcwNDM1OTc5NCwiZXhwIjoxNzA0MzYzMzk0LCJwaG9uZV9udW1iZXIiOiIrODQzOTQwMjE4MTQiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDM5NDAyMTgxNCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.WNxf8UuFF-irW1OPA5ccUnTrQ2ZgN5gTNDZ23lSWZaxMRDaaACoF4jT3Xhu8EWE42TsoSphfegX0EtBXwL3C8mDHkgb8u7nAHkJWV5jsLW0a19RH1MjgexLGS8RNuvMu746sBBPEgZYXP23qu3lrFQs-IjIY3eoOj2-5kC7oR2l6A0rfUAvudgZ6zNRvas-mIEYwwyvFJMeLc_pYukONOb-DsWAoLKi_nNAp-7b6rHyj_qw00MdsKiHtGrRTSH7ZrNezSlsln4oDy-DP_dy6g6jm2kM2wUlcGQ6ME7ce5G8mFUIg6ZFdLxNAvQvn6tfMPrr4VBKi1AVKB5Xb8O19yQ`,
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
