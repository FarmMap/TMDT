import axios, { AxiosError, AxiosResponse } from "axios";
import { SetStateAction, useEffect, useState } from "react";

import PlaceType from "../../types/Place/PlaceType";

interface UseFetchPlaceTypeProps {
  shouldRefesh?: boolean;
}

interface ResponseError {
  code: string;
  message: string;
}

const useFetchDistrictList = (props: UseFetchPlaceTypeProps) => {
  let [districtList, setDistrictList] = useState<PlaceType[]>([]);
  let [error, setError] = useState<string | null>(null);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}regions/districts`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then((response: AxiosResponse) => {
        let data: SetStateAction<PlaceType[]> = response.data;
        setDistrictList(data);
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
  }, [props.shouldRefesh]);

  return { districtList, error, isLoading };
};

export default useFetchDistrictList;
