import { useContext } from "react";
import { AirkitContext } from "../contexts/AirkitContext";

export const useAirkit = () => {
  const context = useContext(AirkitContext);
  if (!context) {
    throw new Error("useAirkit must be used within an AirkitProvider");
  }
  return context;
};
