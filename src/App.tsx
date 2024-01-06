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
//Style

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* Public Route */}
        <Route element={<RedirectRoute path="/" />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/san-pham" element={<DetailsPage />} />
          <Route path="/" element={<HomePage />} />
          {/* Tai khoan */}
          <Route path="/tai-khoan/trang-ca-nhan" element={<ProfilePage />} />
          <Route path="/tai-khoan/cua-hang" element={<ShopAccountPage />} />
        </Route>
        {/* Private Route */}
        <Route path="/" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
};

export default App;
