// External files
import { Routes, Route } from "react-router-dom";

// Internal files
import LoginPage from "./presentations/pages/login";
import NotFound from "./presentations/components/notFound";
import HomePage from "./presentations/pages/home/HomePage";
import RegisterPage from "./presentations/pages/home/register/RegisterPage";
import DetailsPage from "./presentations/pages/home/components/Details/DetailsPage";
import RedirectRoute from "./routes/RedirectRoute";
import PrivateRoute from "./routes/PrivateRoute";
import ProfilePage from "./presentations/pages/account/profile/ProfilePage";
import ShopAccountPage from "./presentations/pages/account/shop/ShopAccountPage";
import InfoMyShopPage from "./presentations/pages/shop/infoMyShop/InfoMyShopPage";
import OrderShopPage from "./presentations/pages/shop/orderlistShop/OrderShopPage";
import { Children } from "react";
import ProductShopPage from "./presentations/pages/shop/productShop/ProductShopPage";
import AddProductPage from "./presentations/pages/shop/addProductShop/AddProductPage";
import PayProductPage from "./presentations/pages/home/components/Pay/PayProductPage";
import SuccessOrderPage from "./presentations/pages/home/components/Pay/Success/SuccessOrderPage";
import CartShopPage from "./presentations/pages/home/components/Cart/CartShopPage";
import OrderShopListPage from "./presentations/pages/home/components/Order/OrderShopListPage";
import ContactPage from "./presentations/pages/contacts/ContactPage";
//Style

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* Public Route */}
        {/* <Route element={<RedirectRoute path="/" />}> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/san-pham/:productId" element={<DetailsPage />} />
        <Route
          path="/san-pham/:productId/thanh-toan/:name-:quantity"
          element={<PayProductPage />}
        />
        <Route
          path="/san-pham/:productId/thanh-toan-thanh-cong"
          element={<SuccessOrderPage />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/gio-hang" element={<CartShopPage />} />
        <Route path="/tai-khoan/don-mua" element={<OrderShopListPage />} />
        {/* </Route> */}
        {/* Private Route */}
        <Route path="/" element={<PrivateRoute />}>
          {/* Tai khoan */}
          <Route path="/tai-khoan/trang-ca-nhan" element={<ProfilePage />} />
          <Route path="/tai-khoan/cua-hang" element={<ShopAccountPage />} />

          {/* Shop */}
          <Route
            path="/cua-hang/cua-hang-cua-toi"
            element={<InfoMyShopPage />}
          />
          <Route
            path="/cua-hang/danh-sach-don-hang"
            element={<OrderShopPage />}
          />
          <Route
            path="/cua-hang/danh-sach-san-pham"
            element={<ProductShopPage />}
          />
          <Route
            path="/cua-hang/danh-sach-san-pham/tao-san-pham"
            element={<AddProductPage />}
          />
        </Route>
        {/* Liên hệ */}
        <Route path="/lien-he" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
