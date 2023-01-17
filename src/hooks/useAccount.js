import { useEffect } from "react";

import { useWeb3Provider } from "../context/Web3ProviderContext";

function useAccount() {
  const {
    web3Api: { ethereum, isConnected },
    setWeb3Api,
    handleAccount,
  } = useWeb3Provider();

  const handleConnect = async () => {
    try {
      console.log("clique to connect");
      if (!ethereum) {
        alert("please install metamask");
        window.open("https://metamask.io/download/", "_blank");
        return;
      }
      const [currentAccount] = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // TODO we have currentAccount we can connect to db to get information about user connected by address
      //TODO a verifier:  mettre a jour state here or by listner to connection
      setWeb3Api((prev) => ({
        ...prev,
        account: currentAccount,
        isConnected: true,
      }));
      console.log("m a aj termineeeeeeeeee");
    } catch (error) {
      console.error(
        "🚀 ~ file: NavFinal.jsx:25 ~ handleConnect ~ error",
        error
      );
    }
  };

  const handleAccountChange = (args) => {
    handleAccount(args[0]);
  };

  useEffect(() => {
    console.log("in ------------------ 2222");

    ethereum?.on("accountsChanged", handleAccountChange);
    return () =>
      ethereum?.removeListener("accountsChanged", handleAccountChange);
  }, [ethereum]);

  return { handleConnect, isConnected };
}

export default useAccount;
