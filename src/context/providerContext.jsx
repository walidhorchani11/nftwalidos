import { createContext, useContext } from "react";

const Web3ProviderContext = createContext();
Web3ProviderContext.displayName = "web3ProviderContext";

const Web3Provider = ({ children }) => {
  return (
    <Web3ProviderContext.Provider value={{ title: "hello walidos" }}>
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
