import React from "react";
const color = ["bg-green-400", "bg-blue-400", "bg-red-400", "bg-green-400"];
function CarouselItem({ children, index, widthStyle = "100%" }) {
  return (
    <div
      style={{ width: widthStyle }}
      className={` inline-block ${color[index]} h-full overflow-hidden`}
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {});
      })}
    </div>
  );
}

export default CarouselItem;
