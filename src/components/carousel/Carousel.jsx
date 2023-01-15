import React, { useState, useEffect } from "react";

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nbr, setNbr] = useState(1);

  //   useEffect(() => {
  //     const scrollCarousel = setTimeout(
  //       () => updateIndex(currentIndex + 1),
  //       5000
  //     );

  //     return () => clearTimeout(scrollCarousel);
  //   }, [currentIndex]);

  function updateIndex(val) {
    if (val >= React.Children.count(children)) {
      setCurrentIndex(0);
    } else if (val < 0) {
      setCurrentIndex(React.Children.count(children) - 1);
    } else {
      setCurrentIndex(val);
    }
  }

  return (
    <div className=" w-4/5 mx-auto overflow-hidden">
      {/* inner */}
      <div
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
        className={`whitespace-nowrap transition-all duration-1000 h-96 `}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            index,
            widthStyle: `${Math.trunc(100 / nbr)}%`,
          });
        })}
      </div>
      <div className="space-x-3">
        {React.Children.map(children, (child, index) => {
          return (
            <span
              onClick={() => updateIndex(index)}
              className={`h-4 w-4 rounded-full border-2 border-green-800 inline-flex ${
                currentIndex === index && "bg-red-400"
              } `}
              key={index}
            />
          );
        })}
      </div>
      <button
        className="bg-cyan-500 z-50"
        onClick={() => updateIndex(currentIndex - 1)}
      >
        prev
      </button>
      <button
        className="bg-red-500 z-50"
        onClick={() => updateIndex(currentIndex + 1)}
      >
        next
      </button>
    </div>
  );
}

export default Carousel;
