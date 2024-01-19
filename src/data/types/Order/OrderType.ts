import ProductType from "../Product/ProductType";

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
  orderDetails?: {
    id?: number;
    note?: string;
    quantity?: number;
    product?: ProductType;
    productId?: number;
  }[];
}
