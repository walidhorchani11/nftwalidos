import React, { createContext, FunctionComponent, useContext } from "react";
import { Web3State, createDefaultState } from "./utils";

const Web3ProviderContext = createContext<Web3State>(createDefaultState());
Web3ProviderContext.displayName = "web3ProviderContext";

const Web3Provider: FunctionComponent = ({ children }) => {
  return (
    <Web3ProviderContext.Provider value={createDefaultState()}>
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
