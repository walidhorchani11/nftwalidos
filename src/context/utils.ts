import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";
// window.ethereum doe not recognised , sol
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export type Web3Params = {
  ethereum: MetaMaskInpageProvider | null;
  provider: providers.Web3Provider | null;
  contract: Contract | null;
};

export type Web3State = {
  isLoading: boolean;
} & Web3Params;

export const createDefaultState = () => ({
  ethereum: null,
  provider: null,
  contract: null,
  isLoading: true,
});
