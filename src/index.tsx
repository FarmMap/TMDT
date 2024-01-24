import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// External files
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Internal files
import GlobalStyle from "./presentations/components/globalStyle";
import { CartProvider } from "./presentations/pages/home/components/Cart/CartContext";
// Style

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
type User = {
  id?: string;
  // other user properties
};

// Example user object, replace this with your actual user data logic
const user: User = { id: '2' };
root.render(
  <CartProvider userId={user?.id || ''}>
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </BrowserRouter>
      <ToastContainer
        style={{ zIndex: 9999999999999 }}
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </React.StrictMode>
  </CartProvider>

);
