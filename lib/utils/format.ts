import { isAddress } from "viem";

export const formatAddress = (address: string) => {
  if (!isAddress(address)) return "Unknown";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
