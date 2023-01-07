import React from "react";
// import logo from "./assets/people01.png";
import Footer from "./components/footer/Footer";
// import Nav from "./components/Nav";
// import Nav2 from "./components/Nav2";
// import Navbar from "./components/Navbar";
// import Hero from "../Hero";
import BtnTop from "./components/BtnTop";
import NavFinal from "./components/NavFinal";
import Carousel from "./components/carousel/Carousel";
import CarouselItem from "./components/carousel/CarouselItem";

// on peut declarer un couleur in config tailwind
const App = () => {
  return (
    <div className=" mx-auto  m-0">
      {/* <Nav /> */}
      {/* <Nav2 /> */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <NavFinal />
      <Carousel>
        <CarouselItem>
          <img src="robot.png" className="object-scale-down" />
        </CarouselItem>
        <CarouselItem>
          <img src="card.png" />
        </CarouselItem>
        <CarouselItem>
          <img src="robot.png" />
        </CarouselItem>
      </Carousel>
      <Footer />
      <BtnTop />
    </div>
  );
};

export default App;

// return (
//   <div className="bg-green-400 h-screen flex justify-center items-center space-x-8">
//     <div className="flex items-center justify-center bg-white  min-w-[260px] max-w-2xl w-1/3 p-4 space-x-8  rounded-md shadow-lg hover:shadow-2xl">
//       <img className="w-12 h-12" src={logo} alt="hello picture" />
//       <div>
//         <p className="text-black text-xl font-medium">Walid Horchani</p>
//         <p>
//           my name is Horchani Walid developpeur full stack js web et mobile
//         </p>
//       </div>
//       <div className=" divide-y-2 divide-green-700">
//         <div>num1</div>
//         <div>num2</div>
//         <div>num3</div>
//         <div>num4</div>
//       </div>
//     </div>
//     <div className="flex items-center justify-center bg-white  min-w-[260px] max-w-2xl w-1/3 p-4 space-x-8  rounded-md shadow-lg hover:shadow-2xl">
//       <div className="border-2 border-blue-500 outline-4 outline-red-800 outline">
//         <div>num1</div>
//       </div>
//       <div>
//         <input
//           type="checkbox"
//           name="test"
//           className="accent-green-30"
//           checked
//         />
//         <input type="checkbox" name="test" className="text-red-600" />
//       </div>
//       <div>
//         <input
//           checked
//           id="red-checkbox"
//           type="checkbox"
//           value=""
//           className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//         />
//         <label
//           for="red-checkbox"
//           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//         >
//           Red
//         </label>
//       </div>
//     </div>
//   </div>
// );
