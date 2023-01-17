import React, {
  useEffect,
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
} from "react";
import { Web3State, createDefaultState, loadContract } from "./utils";
import { ethers } from "ethers";

export const Web3ProviderContext = createContext<Web3State>(
  createDefaultState()
);
Web3ProviderContext.displayName = "web3ProviderContext";

const Web3Provider: FunctionComponent = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  const handleAccount = useCallback(
    (newAccount) => {
      // TODO , why web3Api.account always same value

      console.log(
        "******************ancien value of address :::::: ",
        web3Api.account
      );
      console.log(
        "🚀 ~ file: Web3ProviderContext.tsx:21 ~ handleAccount ~ newAccount",
        newAccount
      );
      setWeb3Api((prev) => {
        return {
          ...prev,
          account: newAccount,
        };
      });
    },
    [web3Api.account]
  );

  useEffect(() => {
    console.log("in ------------------ 1111");
    // create an async fct to not block code, also load contract is an async fct,we have to use await
    const initWeb3 = async () => {
      try {
        const ethereum = window.ethereum;
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        //TODO NftMarket mettre dans un const ou var env
        const contract = await loadContract("NftMarket", provider);

        setWeb3Api({
          ethereum,
          provider,
          contract,
          isLoading: false,
          account: ethereum.selectedAddress || "",
          isConnected: Boolean(ethereum.selectedAddress),
        });
      } catch (error) {
        console.error(
          "🚀 ~ file: Web3ProviderContext.tsx:64 ~ initWeb3 ~ error",
          error
        );
        setWeb3Api((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    };
    initWeb3();
  }, []);

  return (
    <Web3ProviderContext.Provider
      value={{ web3Api, setWeb3Api, handleAccount }}
    >
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
