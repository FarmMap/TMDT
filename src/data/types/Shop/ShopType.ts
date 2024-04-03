import PlaceType from "../Place/PlaceType";
import UserAccountType from "../UserAccount/UserAccountType";
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
  deliveryOptions?:{
    id?: number,
    isLocked?: boolean,
    deliveryMethod: {
      id?: 1,
      title?: string,
      description?: string
    }
  }[]
  locations?:{
    id?: number,
    address?: string,
    type?: string,
    province?:PlaceType
    district?:PlaceType
    ward?:PlaceType
  }[]

  identity?: {
    id?: number,
    identityType?: string,
    number?: string,
    fullName?: string,
    identityImage?: File;
    identityImageHold?: File
  }
  user?:UserAccountType
}
