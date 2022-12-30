import React from "react";
import CardFooter from "./CardFooter";

import { data } from "./data.js";

function Footer() {
  return (
    <footer className="bg-black flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center text-white p-10 border-b ">
        {data.map((item) => (
          <CardFooter key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full">
        {/* TODO terminer phrase car il est melange entre arabe et francais  */}
        <div className="max-w-xl p-6 text-center text-white text-sm  m-auto">
          <bdi>منصة الألكسو للـNFT</bdi>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
