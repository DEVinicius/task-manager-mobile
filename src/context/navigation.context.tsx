import { ReactNode, createContext } from "react";

interface NavigationContextData {
  navigation: any;
}

interface NavigationContextProps {
  children: ReactNode;
  navigation: any;
}

export const NavigationContext = createContext({} as NavigationContextData);

export function NavigationContextProvider({
  children,
  ...rest
}: NavigationContextProps) {
  return (
    <NavigationContext.Provider
      value={{
        navigation: rest.navigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
