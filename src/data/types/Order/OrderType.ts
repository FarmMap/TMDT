import PlaceType from "../Place/PlaceType";
import ProductType from "../Product/ProductType";
import OrderDetailType from "./OrderDetailType";

export default interface OrderType {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  total?: string;
  status?: string;
  provinceCode?: string;
  districtCode?: string;
  wardCode?: string;
  address?: string;
  orderDetails?: OrderDetailType[];
  province?: PlaceType;
  district?: PlaceType;
  ward?: PlaceType;
}
