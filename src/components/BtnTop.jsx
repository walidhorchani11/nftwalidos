import React, { useEffect, useState } from "react";

// TODO use it in layout page
function BtnTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("%c in useEffect", "rcolor:red");
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      console.info("scroll fire+++++++++++++++++++", scrollTop);

      if (scrollTop > 200 && show == false) {
        console.log("breeeaaaaaakkk +++++");
        setShow(true);
      } else if (scrollTop <= 200 && show == true) {
        console.log("to false --------------");

        setShow(false);
      }
    };
  }, [show]);
  return (
    show && (
      <button
        className="fixed bottom-40 right-4 rounded-full bg-cyan-500 w-10 h-10 flex justify-center items-center "
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <span className="-translate-y-[20%] rotate-90  ">&#x3008;</span>
      </button>
    )
  );
}

export default BtnTop;
