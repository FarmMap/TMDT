import UserAccountType from "../UserAccount/UserAccountType";

export default interface FeedBackType {
  productId?: number;
  rating?: number;
  comment?: string;
  user?: UserAccountType;
  0?: number;
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
}
