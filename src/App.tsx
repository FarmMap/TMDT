// External files
import { Routes, Route } from "react-router-dom";

// Internal files
import LoginPage from "./presentations/pages/login";
import NotFound from "./presentations/components/notFound";
import HomePage from "./presentations/pages/home/HomePage";
import RegisterPage from "./presentations/pages/home/register/RegisterPage";
import DetailsPage from "./presentations/pages/home/components/Details/DetailsPage";
//Style

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/san-pham" element={<DetailsPage />} />
        {/* Private Route */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
