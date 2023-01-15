import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

function Nav() {
  const [web3Api, setWeb3Api] = useState({
    web3: null,
    provider: null,
    account: null,
  });

  // TODO lors deconnexion metamask , il faut effacer data du state (redux)
  //  ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
  const handleConnectWallet = async (manualConnect = true) => {
    const provider = await detectEthereumProvider();
    if (provider) {
      let accounts = [];
      const currentAccount = provider.selectedAddress;
      if (manualConnect && !currentAccount) {
        accounts = await provider.request({
          method: "eth_requestAccounts",
        });
      }
      setWeb3Api({
        web3: new Web3(provider),
        provider,
        account: accounts[0] || provider.selectedAddress,
      });
    } else {
      alert("please install metamask");
    }
  };

  // TODO handle case if metamask est deja connecté , on doit remplir le state (redux)
  // TODO //  remarque //  il ya fonctin ethereum.isConnected()
  useEffect(() => {
    handleConnectWallet(false)
      .then(() =>
        console.log(
          "connect to metamask auto si il est connecté deja ..................."
        )
      )
      .catch((error) => console.log({ error }));
  }, []);

  //listner for account change, il faut le faire dans app , si nn si le comp unmount et on fait un chnagement , on aura rien
  useEffect(() => {
    if (web3Api.provider) {
      const listner = web3Api.provider.on("accountsChanged", (accounts) => {
        alert("votre compte est chnger");
        console.log({ accounts });
        // handle redux to save new account
        setWeb3Api((prev) => ({ ...prev, account: accounts[0] }));
      });

      // TODO ethereum.removeListener('accountsChanged', handleAccountsChanged);
      return () => listner;
    }
  }, [web3Api.provider]);

  return (
    <div className="max-md:space-x-10 flex py-8 bg-white space-x-3 items-center justify-center w-full">
      {/* toggle mode sun night */}
      <div className="flex space-x-3 ">
        <a className="flex justify-center items-center w-[46px] h-[46px] bg-[#6345ED] rounded-full hover:cursor-pointer">
          <img src="src/assets/moon.png" alt="" />
        </a>

        <a className="flex justify-center items-center w-[46px] h-[46px] bg-black rounded-full ">
          <img src="src/assets/sun.png" alt="" />
        </a>
      </div>
      {/* wallet */}
      <div
        onClick={handleConnectWallet}
        className="flex justify-center items-center w-[46px] h-[46px] bg-black rounded-full"
      >
        <img src="src/assets/connect-wallet.svg" alt="connect-wallet" />
      </div>
      {/* nav menu */}
      <nav className="max-md:hidden">
        <ul className="flex space-x-5">
          <li>Contact</li>
          <li>Pages</li>
          <li>Community</li>
          <li>Explore</li>
          <li>Home</li>
        </ul>
      </nav>

      {/* search */}
      <div className="max-md:hidden flex justify-center items-center bg-white rounded-3xl px-5 py-3 border-gray-400 border">
        {/* icon */}
        <svg viewBox="0 0 1024 1024" fill="currentColor" height="20" width="20">
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
        </svg>

        <input
          className="focus:outline-none ml-2 text-right"
          id="searchId"
          name="searchName"
          onChange={() => {}}
          value=""
          placeholder="Search here"
        />
      </div>

      {/* brand icon */}
      <div>
        <img src="src/assets/logo.png" alt="logo" />
      </div>
    </div>
  );
}

export default Nav;
