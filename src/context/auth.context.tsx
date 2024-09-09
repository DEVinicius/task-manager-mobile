import { ReactNode, createContext, useState } from "react";
import { setItem } from "../config/storage";

interface AuthContextData {
  accessToken: string | null;
  handleChangeAccessToken: (data: string | null) => Promise<void>;
}

interface AuthContextProps {
  children: ReactNode;
  accessToken: string | null;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children, ...rest }: AuthContextProps) {
  const [accessToken, setAccessToken] = useState<string | null>(
    rest.accessToken
  );

  async function handleChangeAccessToken(data: string | null): Promise<void> {
    await setItem("ACCESS_TOKEN", data);
    setAccessToken(data);
  }

  return (
    <AuthContext.Provider value={{ accessToken, handleChangeAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}
