import { DebuggingInfo, VerifierModal } from "./components";

export const GetStartedView = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4">
      <VerifierModal />
      <DebuggingInfo />
    </div>
  );
};
