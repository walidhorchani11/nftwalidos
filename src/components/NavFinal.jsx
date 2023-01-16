import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Web3ProviderContext } from "../context/Web3ProviderContext";
function NavFinal() {
  const [show, setShow] = useState(false);
  const [heightMenu, setHeightMenu] = useState(0);
  const refMenuMobile = useRef(null);

  useLayoutEffect(() => {
    setHeightMenu(refMenuMobile.current.scrollHeight);
  }, []);

  const {
    web3Api: { ethereum, account, isConnected },
    setWeb3Api,
  } = useContext(Web3ProviderContext);

  const handleConnect = async () => {
    try {
      console.log("clique to connect");
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

  return (
    <section className="">
      {/* container navigation and logo and mobile menu */}
      <div className=" mx-auto py-5 ">
        <div className="flex items-center justify-around md:justify-center  md:space-x-11">
          {isConnected ? (
            <img
              src="people01.png"
              alt="connected"
              className=""
              width={40}
              height={40}
            />
          ) : (
            <button
              onClick={handleConnect}
              className="rounded-full bg-gradient-to-l from-[#6345ED] to-[#DC39FC] transition duration-700 hover:bg-gradient-to-l hover:from-[#6345ED] hover:to-[#6345ED]  max-w-full p-4 xl:px-6 flex items-center justify-center"
            >
              <span className="hidden xl:block px-2 text-white text-[16px] font-bold ">
                ربط المحفظة الرقمية
              </span>
              <img
                src="connect-wallet.svg"
                alt="wallet"
                className=""
                width={20}
                height={20}
              />
            </button>
          )}

          {/* nav menu for desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-5 font-normal text-[18px] ">
            <div>اتصل بنا</div>
            <div>
              <Link to={"nfts/new"}>أضف NFT</Link>
            </div>
            <div className="relative">
              <div className="group">
                عرض
                <div className=" absolute top-16 left-5 opacity-0 p-4 -z-40  space-y-10 transition-all duration-1000 group-hover:z-40  group-hover:-translate-y-5  group-hover:opacity-100 ">
                  <Link to={"nfts"}>رموز الـNFT</Link>
                  <a href="#">صانعي الرموز</a>
                </div>
              </div>
            </div>
            <div>تقديم المشروع</div>
            <div>
              <Link to={"/"}>الرئيسية</Link>
            </div>
          </nav>
          <img
            className=""
            src="logo-alecso.png"
            alt="alecso"
            width={80}
            height={80}
          />
          <button
            className=" block md:hidden md:ml-10"
            onClick={() => setShow((prev) => !prev)}
          >
            <div
              className={`bg-black w-6 h-[3px] m-1 transition-all duration-700 ${
                show && "rotate-45 translate-y-[7px]"
              } `}
            ></div>
            <div
              className={`bg-black w-6 h-[3px] m-1 transition-opacity duration-700 ${
                show && "opacity-0"
              } `}
            ></div>
            <div
              className={`bg-black w-6 h-[3px] m-1 transition-all duration-700  ${
                show && "-rotate-45 -translate-y-[7px] "
              }`}
            ></div>
          </button>
        </div>

        {/* mobile menu */}
        <div
          ref={refMenuMobile}
          style={{ height: show ? heightMenu : 0 }}
          className={`md:hidden space-y-2 absolute bg-white  transition-h duration-1000 overflow-hidden w-full my-5 px-3`}
        >
          <div className="border-b" href="#">
            اتصل بنا
          </div>
          <div className="border-b" href="#">
            أضف NFT
          </div>
          <div className="border-b" href="#">
            عرض
          </div>
          <div className="border-b" href="#">
            تقديم المشروع
          </div>
          <div href="#">الرئيسية</div>
        </div>
      </div>
    </section>
  );
}

export default NavFinal;
