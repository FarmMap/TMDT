import ProductType from "../Product/ProductType";

export default interface OrderDetailType {
    id?: number;
    note?: string;
    quantity?: number;
    product?: ProductType;
    productId?: number;
}