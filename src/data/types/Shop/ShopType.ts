export default interface ShopType {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  collectionLocation?: {
    provinceCode?: string;
    districtCode?: string;
    wardCode?: string;
    address?: string;
    type?: string;
  };
  storeLocation?: {
    provinceCode?: string;
    districtCode?: string;
    wardCode?: string;
    address?: string;
    type?: string;
  };
  deliveryMethods?: {
    id?: string;
    isLocked?: boolean;
  }[];

  businessType?: string;
  emailInvoice?: string;
  taxCode?: string;
  companyName?: string;
  identityType?: string;
  businessLicense?: File;
  identityImage?: File;
  number?: string;
  fullName?: string;
  identityImageHold?: File;
}
