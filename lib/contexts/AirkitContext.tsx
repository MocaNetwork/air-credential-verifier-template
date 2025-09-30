import { AirLoginResult, AirService } from "@mocanetwork/airkit";
import { createContext } from "react";

interface AirkitContextType {
  airService: AirService;
  isInitialized: boolean;
  isLoggedIn: boolean;
  loginResult: AirLoginResult | null;
}

export const AirkitContext = createContext<AirkitContextType | null>(null);
