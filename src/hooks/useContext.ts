import { createContext } from "react";
import UserAccountType from "../data/types/UserAccount/UserAccountType";
const UserContext = createContext<UserAccountType | undefined>(undefined);

export { UserContext };
