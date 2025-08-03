import { useContext } from "react";
import { MobileContext } from "./MobileContext";

export function useMobile() {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error("useMobile must be used within a MobileProvider");
  }
  return context;
}
