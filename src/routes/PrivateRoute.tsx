import { CircularProgress } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserAccountType from "../data/types/UserAccount/UserAccountType";
import { UserContext } from "../hooks/useContext";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const [user, errorMessage] = useAuth();
  const [showErrorToast, setShowErrorToast] = useState(false);

  useEffect(() => {
    if (errorMessage !== undefined && showErrorToast) {
      toast.error(`${errorMessage}`);
      setShowErrorToast(false);
    }
  }, [errorMessage, showErrorToast]);

  useEffect(() => {
    if (errorMessage !== undefined) {
      setShowErrorToast(true);
    }
  }, [errorMessage]);

  if (user === undefined && errorMessage === undefined) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (user !== undefined) {
    return (
      <UserContext.Provider value={user as UserAccountType}>
        <Outlet />
      </UserContext.Provider>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
