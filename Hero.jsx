import React from "react";

function Hero() {
  return (
    <section id="hero">
      {/* Hero container */}
      <div className="container max-w-6xmx-auto px-6 py-12">
        {/* Menu et logo */}
        <nav className="flex justify-around items-center">
          <img src="logo-alecso.png" width={100} height={100} alt="" />
          {/* menu desktop */}
          <div className="hidden text-white sm:flex sm:space-x-8 sm:bg-slate-300">
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
        </nav>
      </div>
    </section>
  );
}

export default Hero;
