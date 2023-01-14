import React from "react";
import { useWeb3Provider } from "../../context/providerContext";

function Listing() {
  const res = useWeb3Provider();
  console.log("🚀 ~ file: Listing.jsx:6 ~ Listing ~ res", res);
  return <div>Listing</div>;
}

export default Listing;
