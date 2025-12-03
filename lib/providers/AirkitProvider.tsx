import { AirEventData, AirLoginResult, AirService } from "@mocanetwork/airkit";
import { memo, useEffect, useMemo, useState } from "react";
import { AirkitContext } from "../contexts/AirkitContext";
import { env } from "../env";

export const defaultAirkitOptions: Parameters<
  typeof AirService.prototype.init
>[0] = {
  buildEnv: env.NEXT_PUBLIC_BUILD_ENV,
  enableLogging: true,
  skipRehydration: false,
  preloadCredential: true,
};

export const AirkitProvider = memo(
  ({ children }: { children: React.ReactNode }) => {
    const airService = useMemo(() => {
      return new AirService({
        partnerId: env.NEXT_PUBLIC_PARTNER_ID,
      });
    }, []);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginResult, setLoginResult] = useState<AirLoginResult | null>(null);

    useEffect(() => {
      const init = async () => {
        if (airService.isInitialized) {
          setIsInitialized(true);
        } else {
          const eventListener = (eventData: AirEventData) => {
            if (eventData.event === "logged_in") {
              setIsLoggedIn(true);
              setLoginResult(eventData.result);
            } else if (eventData.event === "logged_out") {
              setIsLoggedIn(false);
              setLoginResult(null);
            }
          };
          airService.on(eventListener);

          try {
            await airService.init(defaultAirkitOptions);

            setIsInitialized(true);
          } catch (error) {
            console.error("Error initializing Airkit", error);
          }

          return () => {
            void airService.cleanUp();
          };
        }
      };

      init();
    }, [airService]);

    return (
      <AirkitContext.Provider
        value={{ airService, isInitialized, isLoggedIn, loginResult }}
      >
        {children}
      </AirkitContext.Provider>
    );
  }
);

AirkitProvider.displayName = "AirkitProvider";
