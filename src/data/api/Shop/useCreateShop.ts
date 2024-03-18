import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import ShopType from "../../types/Shop/ShopType";

interface ResponseError {
  code: string;
  message: string;
}

interface ShopParams {
  shop: ShopType | undefined;
}

const useCreateShop = () => {
  const [isCreated, setCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const createShop = useCallback((params: ShopParams) => {
    setCreated(false);
    setError(null);
    setLoading(true);
    const FormData = require("form-data");
    var data = new FormData();
    data.append("name", params.shop?.name);
    data.append("email", params.shop?.email);
    data.append("phone", params.shop?.phone);
    data.append("taxCode", params.shop?.taxCode);

    data.append("businessType", params.shop?.businessType);
    data.append("companyName", params.shop?.companyName);
    data.append("emailInvoice", params.shop?.emailInvoice);
    data.append("number", params.shop?.number);
    data.append("fullName", params.shop?.fullName);
    data.append("identityType", params.shop?.identityType);

    data.append(
      "businessLicense",
      params.shop?.businessLicense,
      params.shop?.businessLicense?.name ?? ""
    );
    data.append(
      "identityImage",
      params.shop?.identityImage,
      params.shop?.identityImage?.name
    );
    data.append(
      "identityImageHold",
      params.shop?.identityImageHold,
      params.shop?.identityImageHold?.name
    );

    // Add storeLocation data
    data.append("storeLocation", JSON.stringify(params.shop?.storeLocation));

    // Add collectionLocation data
    data.append(
      "collectionLocation",
      JSON.stringify(params.shop?.collectionLocation)
    );

    // Append deliveryMethods data
    data.append(
      "deliveryMethods",
      JSON.stringify(params.shop?.deliveryMethods)
    );

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_BASE_URL}store`,
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
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

  return { isCreated, setCreated, error, isLoading, createShop };
};

export default useCreateShop;
