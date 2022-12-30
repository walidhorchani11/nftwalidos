import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

function Nav2() {
  return (
    <nav className="bg-red-300 w-full min-h-[100px] ">
      {/* icon */}
      <div className="flex  items-center space-x-10 ">
        <div className="">
          <a className="flex  justify-center items-center w-[46px] h-[46px] bg-[#6345ED] rounded-full hover:cursor-pointer">
            <img src="src/assets/moon.png" alt="" />
          </a>
        </div>

        <div className=" ">
          <a className="flex justify-center items-center w-[46px] h-[46px] bg-black rounded-full ">
            <img src="src/assets/sun.png" alt="" />
          </a>
        </div>
        <div className="max-w-4xl">
          <img src="logo-alecso.png" alt="alecso" width={100} height={100} />
        </div>
        <div className="">
          <span className="flex  justify-center items-center w-[46px] h-[46px] bg-black rounded-full text-white">
            X
          </span>
        </div>
      </div>

      {/* menu */}
      <div className="flex flex-row">
        <ul>
          <li>الرئيسية</li>
          <li>تقديم المشروع</li>
          <li>عرض</li>
          <li>أضف NFT</li>
          <li>اتصل بنا</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav2;
