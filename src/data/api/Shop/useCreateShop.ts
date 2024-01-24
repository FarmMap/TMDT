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
      params.shop?.businessLicense?.name
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
    data.append(
      "storeLocation.provinceCode",
      params.shop?.storeLocation?.provinceCode
    );
    data.append(
      "storeLocation.districtCode",
      params.shop?.storeLocation?.districtCode
    );
    data.append("storeLocation.wardCode", params.shop?.storeLocation?.wardCode);
    data.append("storeLocation.address", params.shop?.storeLocation?.address);
    data.append("storeLocation.type", "STORE");

    // Add collectionLocation data
    data.append(
      "collectionLocation.provinceCode",
      params.shop?.collectionLocation?.provinceCode
    );
    data.append(
      "collectionLocation.districtCode",
      params.shop?.collectionLocation?.districtCode
    );
    data.append(
      "collectionLocation.wardCode",
      params.shop?.collectionLocation?.wardCode
    );
    data.append(
      "collectionLocation.address",
      params.shop?.collectionLocation?.address
    );
    data.append("collectionLocation.type", "COLLECTION");

    // Append deliveryMethods data
    if (
      params.shop?.deliveryMethods &&
      params.shop.deliveryMethods.length > 0
    ) {
      params.shop.deliveryMethods.forEach((method, index) => {
        data.append(
          `deliveryMethods[${index}].id`,
          method.id?.toString() || ""
        );
        data.append(
          `deliveryMethods[${index}].isLocked`,
          method.isLocked?.toString() || ""
        );
      });
    }

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
