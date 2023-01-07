import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Listing from "./pages/nft/Listing";
import NewNft from "./pages/nft/NewNft";
import NftLayout from "./pages/nft/NftLayout";
import ErrorPage from "./pages/error/ErrorPage";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      // Layout principal
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="" element={<Home />} />
        {/* NFT layout */}
        <Route path="nfts" element={<NftLayout />}>
          <Route path="" element={<Listing />} />
          <Route path="new" element={<NewNft />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
