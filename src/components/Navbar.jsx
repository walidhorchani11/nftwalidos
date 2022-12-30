import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [displayed, setDisplayed] = useState(false);
  const [heightMenu, setHeightMenu] = useState(0);

  const refMenuMobile = useRef(null);

  useEffect(() => {
    setHeightMenu(refMenuMobile.current.scrollHeight);
  }, []);

  return (
    <section id="hero" className={` relative bg-white`}>
      {/* Hero container */}
      <div className={` mx-auto pt-12 md:py-12`}>
        {/* Menu et logo */}
        <nav className="flex justify-around items-center my-5">
          <img src="logo-alecso.png" width={100} height={100} alt="" />
          {/* menu desktop */}
          <div className="hidden  md:flex md:space-x-8 text-black h-10">
            <div className="group">
              <a href="#">about</a>
              <div className="group-hover:border-b-2 group-hover:border-blue-500"></div>
            </div>
            <div className="group">
              <a href="#">contact</a>
              <div className="group-hover:border-b-2 group-hover:border-blue-500"></div>
            </div>
            <div className="group">
              <a href="#">products</a>
              <div className="group-hover:border-b-2 group-hover:border-blue-500"></div>
            </div>
            <div className="group">
              <a href="#">home</a>
              <div className="group-hover:border-b-2 group-hover:border-blue-500"></div>
            </div>
          </div>
          {/* hamburger menu */}
          <button
            onClick={() => setDisplayed((prev) => !prev)}
            className="group bg-blue-400  rounded-full w-[50px] h-[50px] flex justify-center items-center md:hidden z-10"
          >
            {/* {Array(3)
              .fill("")
              .map((el) => {
                return (
                  <span className=" block w-[30px] h-1 bg-white my-1"></span>
                );
              })} */}
            <div className="">
              <span
                className={`block w-[25px] h-[2px] bg-white my-1 ${
                  displayed && "rotate-45 translate-y-[6px]"
                }  transition duration-500`}
              ></span>
              <span
                className={`block w-[25px] h-[2px] bg-white my-1 ${
                  displayed && "opacity-0 "
                } transition-opacity duration-500`}
              ></span>
              <span
                className={`block w-[25px] h-[2px] bg-white my-1 ${
                  displayed && "-rotate-45 -translate-y-[6px]"
                }  transition duration-500`}
              ></span>
            </div>
          </button>
        </nav>
        {/* mobile menu */}
        <div
          style={{ height: displayed ? `${heightMenu}px` : "0px" }}
          ref={refMenuMobile}
          className={` absolute bg-slate-50 w-full transition-all duration-1000 overflow-hidden  md:hidden `}
        >
          <div className={`md:hidden space-y-3 p-5`}>
            <div className="group border-b">
              <a className="block" href="#">
                about
              </a>
            </div>
            <div className="group border-b">
              <a className="block" href="#">
                contact
              </a>
            </div>
            <div className="group border-b">
              <a className="block" href="#">
                products
              </a>
            </div>
            <div className="group">
              <a className="block" href="#">
                home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
