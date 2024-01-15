import axios, { AxiosError, AxiosResponse } from "axios";
import { SetStateAction, useEffect, useState } from "react";

import PlaceType from "../../types/Place/PlaceType";

interface UseFetchPlaceTypeProps {
  code?: string;
  shouldRefesh?: boolean;
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchWardByDistrictCode = (props: UseFetchPlaceTypeProps) => {
  let [wardList, setWardList] = useState<PlaceType[]>([]);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}regions/wards/${props.code}`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data: SetStateAction<PlaceType[]> = response.data;
        setWardList(data);
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
  }, [props.code, props.shouldRefesh]);

  return { wardList, error, isLoading };
};

export default useFetchWardByDistrictCode;
