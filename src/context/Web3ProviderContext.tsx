import React, {
  useEffect,
  useState,
  createContext,
  FunctionComponent,
  useContext,
} from "react";
import { Web3State, createDefaultState, loadContract } from "./utils";
import { ethers } from "ethers";

const Web3ProviderContext = createContext<Web3State>(createDefaultState());
Web3ProviderContext.displayName = "web3ProviderContext";

const Web3Provider: FunctionComponent = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    // create an async fct to not block code, also load contract is an async fct,we have to use await
    const initWeb3 = async () => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const contract = await loadContract("NftMarket", provider);

      setWeb3Api({
        ethereum: window.ethereum,
        provider,
        contract,
        isLoading: false,
      });
    };
    initWeb3();
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
