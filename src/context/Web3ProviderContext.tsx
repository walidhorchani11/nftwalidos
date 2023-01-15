import React, {
  useEffect,
  useState,
  createContext,
  FunctionComponent,
  useContext,
} from "react";
import { Web3State, createDefaultState } from "./utils";
import { ethers } from "ethers";

const Web3ProviderContext = createContext<Web3State>(createDefaultState());
Web3ProviderContext.displayName = "web3ProviderContext";

const Web3Provider: FunctionComponent = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    setWeb3Api({
      ethereum: window.ethereum,
      provider: new ethers.providers.Web3Provider(window.ethereum),
      contract: null,
      isLoading: false,
    });
  }, []);

  return (
    <Web3ProviderContext.Provider value={web3Api}>
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
