export default interface ShopType {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  pickupAddress?: string[];
  shippingMethodIds?: string[];
  provinceCode?: string;
  districtCode?: string;
  wardCode?: string;
  type?: string;
  address?: string;
  taxCode?: string;
  companyName?: string;
  step?: number;
  businessLicense?: File;
  identity?: File;
  identityCode?: string;
  fullName?: string;
  avatar?: File;
}
