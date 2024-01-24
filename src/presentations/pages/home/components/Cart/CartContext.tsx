// CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

export interface Product {
  id: string ;
  name: string;
  image: string | File;
  price: number;
  priceSale: number;
  quantityProduct: number;
  weight: number;
  unit: string;
  imageStore: string | File;
  nameStore: string;
}

interface CartState {
  cartItems: Product[];
}

interface CartProviderProps {
  userId: string;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string };


const CART_STORAGE_KEY = 'cartData';

const CartContext = createContext<{ cartState: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingProductIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantityProduct += action.payload.quantityProduct;

        const newState = { ...state, cartItems: updatedCartItems };
        saveToLocalStorage(newState);
        return newState;
      } else {
        // If the product is not in the cart, add it
        const newState = { ...state, cartItems: [...state.cartItems, action.payload] };
        saveToLocalStorage(newState);
        return newState;
      }

    case 'REMOVE_FROM_CART':
      // Filter out the product to be removed
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);

      const newState = { ...state, cartItems: updatedCartItems };
      saveToLocalStorage(newState);
      return newState;

    // Add more cases for other actions if needed

    default:
      return state;
  }
};

const loadFromLocalStorage = (): CartState => {
  const storedData = localStorage.getItem(CART_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : { cartItems: [] };
};

const saveToLocalStorage = (state: CartState): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
};

const CartProvider: React.FC<{ children: ReactNode } & CartProviderProps> = ({ userId, children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] }, loadFromLocalStorage);

  useEffect(() => {
    saveToLocalStorage(cartState);
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): { cartState: CartState; dispatch: React.Dispatch<CartAction> } => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
