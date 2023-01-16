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
  account: string;
  isConnected: boolean;
} & Web3Params;

export const createDefaultState = () => ({
  ethereum: null,
  provider: null,
  contract: null,
  isLoading: true,
  account: "",
  isConnected: false,
});

export const loadContract = async (
  name: string,
  provider: providers.Web3Provider
): Promise<Contract> => {
  const networkId = "5777"; // TODO change this to env var
  console.log("🚀 ~ file: utils.ts:32 ~ networkId", networkId);
  if (!networkId) {
    return Promise.reject("network id is not defined");
  }

  const res = await fetch(`/contracts/${name}.json`);
  const contractJson = await res.json();
  const address = contractJson.networks[networkId].address;
  if (address) {
    const contract = new Contract(address, contractJson.abi, provider);
    return contract;
  } else {
    return Promise.reject(`contract ${name} cannot be loaded!`);
  }
};
