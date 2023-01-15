import React, { createContext, FunctionComponent, useContext } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";

export type Web3State = {
  ethereum?: MetaMaskInpageProvider;
  provider?: providers.Web3Provider;
  contract?: Contract;
};

const Web3ProviderContext = createContext<Web3State>({});
Web3ProviderContext.displayName = "web3ProviderContext";

const Web3Provider: FunctionComponent = ({ children }) => {
  return (
    <Web3ProviderContext.Provider value={{}}>
      {children}
    </Web3ProviderContext.Provider>
  );
};

export default Web3Provider;

export const useWeb3Provider = () => {
  const context = useContext(Web3ProviderContext);
  if (!context) {
    throw new Error("component doit etre wrapper in web3ProviderContext...");
  } else {
    return context;
  }
};
