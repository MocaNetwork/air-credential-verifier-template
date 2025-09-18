import { isAddress } from "viem";
import * as jose from "jose";

export const formatNumber = (num: number, decimalPlaces?: number) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
};

export const formatAddress = (address: string) => {
  if (!isAddress(address)) return "Unknown";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatKey = (key: string) => {
  return key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getNameFromAccessToken = (accessToken: string | null) => {
  try {
    const name: string | null = accessToken
      ? jose.decodeJwt(accessToken)["name"] as string
      : null;

    if (name && isAddress(name)) {
      return formatAddress(name);
    }
    return name;
  } catch {
    return null;
  }
};
