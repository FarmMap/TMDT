import ShopType from "../Shop/ShopType";

export default interface ProductType {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name?: string;
  retailPrice?: string;
  salePrice?: string;
  saleStartDate?: string;
  saleEndDate?: string;
  inventory?: number;
  images?: File[];
  weight?: number;
  unit?: string;
  isActive?: boolean;
  approveStatus?: string;
  description?: string;
  rating?: string;
  productCategoryId?: number;
  productPrice?: {
    id?: number;
    retailPrice?: number;
    salePrice?: number;
    saleStartDate?: string;
    saleEndDate?: string;
  };

  store?: ShopType;
}
