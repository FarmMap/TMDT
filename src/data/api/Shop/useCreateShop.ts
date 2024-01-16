import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

interface ResponseError {
  code: string;
  message: string;
}

interface useCreateShopProps {
  name?: string;
  pickupAddress?: string[];
  email?: string;
  phone?: string;
  taxCode?: string;
  shippingMethodIds?: string[];
  type?: string;
  companyName?: string;
  provinceCode?: string;
  districtCode?: string;
  wardCode?: string;
  address?: string;
  businessLicense?: File;
  identity?: File;
  avatar?: File;
}

const useCreateShop = (props: useCreateShopProps) => {
  const [isCreated, setCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const createShop = useCallback(() => {
    setCreated(false);
    setError(null);
    setLoading(true);
    const FormData = require("form-data");
    var data = new FormData();
    data.append("name", props.name);
    data.append("pickupAddress", props.pickupAddress);
    data.append("email", props.email);
    data.append("phone", props.phone);
    data.append("taxCode", props.taxCode);
    if (props.shippingMethodIds) {
      props.shippingMethodIds.forEach((id, index) => {
        data.append(`shippingMethodIds`, id);
      });
    }
    // if (props.pickupAddress) {
    //   props.pickupAddress.forEach((id, index) => {
    //     data.append(`pickupAddress[${index}]`, id);
    //   });
    // }
    data.append("type", props.type);
    data.append("companyName", props.companyName);
    data.append("provinceCode", props.provinceCode);
    data.append("districtCode", props.districtCode);
    data.append("wardCode", props.wardCode);
    data.append("address", props.address);
    data.append(
      "businessLicense",
      props.businessLicense,
      props.businessLicense?.name
    );
    data.append("identity", props.identity, props.identity?.name);
    data.append("avatar", props.avatar, props.avatar?.name);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_BASE_URL}shop`,
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
  }, [
    props.address,
    props.avatar,
    props.businessLicense,
    props.companyName,
    props.districtCode,
    props.email,
    props.identity,
    props.name,
    props.phone,
    props.pickupAddress,
    props.provinceCode,
    props.shippingMethodIds,
    props.taxCode,
    props.type,
    props.wardCode,
  ]);

  return { isCreated, setCreated, error, isLoading, createShop };
};

export default useCreateShop;
