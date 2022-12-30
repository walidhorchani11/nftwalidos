import React from 'react';

function MiniProj() {
  return (
    // global container
    <div className="flex justify-center items-center bg-cyan-200 min-h-screen ">
      {/* card container */}
      <div className="bg-white rounded-md p-3 m-4 shadow-2xl md:py-40">
        {/* div menu */}
        <div className="flex flex-col p-2 space-y-5 justify-center items-center  md:flex-row md:space-x-20 md:space-y-0">
          <div className="group">
            <a href="#">nounou</a>
            <div className=" border-b-2 m-2 transition-opacity duration-700 border-black opacity-0 group-hover:opacity-100"></div>
          </div>

          <div className="group">
            <a href="#">walidos</a>
            <div className=" border-b-2 m-2 transition-opacity duration-700 border-black opacity-0 group-hover:opacity-100"></div>
          </div>

          <div className="group">
            <a href="#">gaara</a>
            <div className=" border-b-2 m-2 transition-opacity duration-700 border-black opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>

        {/* search container */}
        <div className="flex flex-col space-y-5 py-5 md:flex-row md:space-y-0 md:justify-around md:m-20">
          {/* input */}
          <div className="flex flex-row justify-between border-b p-1 items-center">
            <input
              placeholder="here walidos"
              id="inputt"
              className="focus:outline-none placeholder:font-thin"
            />
            <label htmlFor="inputt">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>
            </label>
          </div>
          <button className="bg-black px-15 py-2 text-lg font-normal rounded-sm shadow-2xl border border-black  text-white hover:bg-white hover:text-black hover:shadow-none duration-500 md:px-10">
            valider
          </button>
        </div>
        {/* gallery image */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* image */}
          <div className="relative group">
            <img src="./src/assets/robot.png" alt="robot" className="w-72" />
            <div className="absolute text-white bottom-0 left-0 right-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 ">
              <div className="p-2 flex">
                <div className="w-full font-normal">
                  <p className="text-sm">Very nice Item</p>
                  <p className="text-sm">25-like 30-share</p>
                </div>
                <div className="flex justify-center items-center rounded-full border border-white min-w-[40px] rotate-0 duration-500 hover:rotate-180">
                  <svg
                    width="24"
                    height="24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="./src/assets/card.png" alt="card" className="w-72" />
            <div className="absolute text-white bottom-0 left-0 right-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 ">
              <div className="p-2 flex">
                <div className="w-full font-normal">
                  <p className="text-sm">Very nice Item</p>
                  <p className="text-sm">25-like 30-share</p>
                </div>
                <div className="flex justify-center items-center rounded-full border border-white min-w-[40px] rotate-0 duration-500 hover:rotate-180">
                  <svg
                    width="24"
                    height="24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="./src/assets/robot.png" alt="robot" className="w-72" />
            <div className="absolute text-white bottom-0 left-0 right-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 ">
              <div className="p-2 flex">
                <div className="w-full font-normal">
                  <p className="text-sm">Very nice Item</p>
                  <p className="text-sm">25-like 30-share</p>
                </div>
                <div className="flex justify-center items-center rounded-full border border-white min-w-[40px] rotate-0 duration-500 hover:rotate-180">
                  <svg
                    width="24"
                    height="24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="./src/assets/bill.png" alt="bill" className="w-72" />
            <div className="absolute text-white bottom-0 left-0 right-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 ">
              <div className="p-2 flex">
                <div className="w-full font-normal">
                  <p className="text-sm">Very nice Item</p>
                  <p className="text-sm">25-like 30-share</p>
                </div>
                <div className="flex justify-center items-center rounded-full border border-white min-w-[40px] rotate-0 duration-500 hover:rotate-180">
                  <svg
                    width="24"
                    height="24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniProj;
