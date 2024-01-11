export default interface ProductList {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  saleStartDate?: string;
  saleEndDate?: string;
  quantity?: number;
  images?: File;
  inventory?: number;
  status?: boolean;
  approveStatus?: string;
  description?: string;
  rating?: string;
}
