import { useContext } from "react";
import { NavigationContext } from "../context/navigation.context";

export function useNavigation() {
  return useContext(NavigationContext);
}
