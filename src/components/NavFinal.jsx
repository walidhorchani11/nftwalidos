import React, { useState, useRef, useLayoutEffect } from "react";
import f from "../../public/f.svg";

function NavFinal() {
  console.log({ f });
  const [show, setShow] = useState(false);
  const [heightMenu, setHeightMenu] = useState(0);
  const refMenuMobile = useRef(null);
  useLayoutEffect(() => {
    setHeightMenu(refMenuMobile.current.scrollHeight);
  }, []);

  return (
    <section className="">
      {/* container navigation and logo and mobile menu */}
      <div className=" mx-auto py-5 ">
        <div className="flex items-center justify-around md:justify-center  md:space-x-11">
          <a href="" className="bg-[#6345ED]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-white"
              width="48px"
              height="48px"
            >
              <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
            </svg>
          </a>
          <a
            href=""
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
          </a>
          {/* nav menu for desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-5 font-normal text-[18px] ">
            <div>اتصل بنا</div>
            <div>أضف NFT</div>
            <div className="relative">
              <div className="group">
                <a href="#">عرض</a>
                <div className=" absolute top-16 left-5 opacity-0 p-4 -z-40  space-y-10 transition-all duration-1000 group-hover:z-40  group-hover:-translate-y-5  group-hover:opacity-100 ">
                  <a href="#">رموز الـNFT</a>
                  <a href="#">صانعي الرموز</a>
                </div>
              </div>
            </div>
            <div>تقديم المشروع</div>
            <div>الرئيسية</div>
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
