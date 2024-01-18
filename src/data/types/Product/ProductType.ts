export default interface ProductType {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name?: string;
  price?: string;
  salePrice?: string;
  saleStartDate?: string;
  saleEndDate?: string;
  quantity?: number;
  images?: File[];
  inventory?: number;
  status?: boolean;
  approveStatus?: string;
  description?: string;
  rating?: string;
  categoryId?: number;
}
