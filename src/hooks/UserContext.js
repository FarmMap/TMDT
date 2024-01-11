// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const setPersistedUserName = (name) => {
    localStorage.setItem("userName", name);
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, setPersistedUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
