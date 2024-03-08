// External files
import { Routes, Route } from "react-router-dom";

// Internal files
import LoginPage from "./presentations/pages/login/LoginPage";
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
import BlogPage from "./presentations/pages/blog/allblog/BlogPage";
import BlogShopPage from "./presentations/pages/shop/blog/BlogShopPage";
import AboutUsPage from "./presentations/pages/aboutUs/AboutUsPage";
import ProductSearchPage from "./presentations/pages/product/ProductSearchPage";
import LoginSMS from "./presentations/pages/login/LoginSMS";
//Style
type User = {
  id?: string;
};
const App: React.FC = () => {
  const user: User = { id: "1" };
  return (
    <div className="App">
      <Routes>
        {/* Public Route */}
        {/* <Route element={<RedirectRoute path="/" />}> */}
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/dang-nhap-so-dien-thoai" element={<LoginSMS />} />
        <Route path="/dang-ky" element={<RegisterPage />} />
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
        <Route path="/ve-chung-toi" element={<AboutUsPage />} />
        <Route
          path="/san-pham/tim-kiem-san-pham/:productName"
          element={<ProductSearchPage />}
        />
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
          <Route path="/" element={<HomePage />} />
          <Route path="/gio-hang" element={<CartShopPage />} />
          <Route path="/tin-tuc" element={<BlogPage />} />
          <Route path="/tai-khoan/don-mua" element={<OrderShopListPage />} />
        </Route>
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
          <Route
            path="/cua-hang/danh-sach-bai-viet"
            element={<BlogShopPage />}
          />
          {/* Liên hệ */}
          <Route path="/lien-he" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
