import React from "react";
import { useWeb3Provider } from "../../context/Web3ProviderContext";

function Listing() {
  const { provider, ...rest } = useWeb3Provider();
  console.log("🚀 ~ file: Listing.jsx:6 ~ Listing ~ rest", rest);
  async function getAccounts() {
    const x = await provider?.listAccounts();
    console.log("🚀 ~ file: Listing.jsx:6 ~ Listing ~ res", x);
  }
  getAccounts();
  return <div>Listing </div>;
}

export default Listing;
