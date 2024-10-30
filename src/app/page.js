"use client";
import { Canvas } from "@react-three/fiber";

import Toys from "./components/Toys";
import Quality from "./components/Quality";
import Page2 from "./components/Page2";

import Page1_DownArrow from "./components/Page1_DownArrow";
import Quality_Heading from "./components/Page1_Heading";
import Navbar from "./components/Navbar";
import Page3 from "./components/Page3";
import Page1_Heading from "./components/Page1_Heading";

const Page = () => {
  return (
    <>
      <div className="back ">
        <div className="page1 w-full h-screen font-['Bayon']  relative overflow-hidden">
          <div className=" w-full h-full  absolute top-0 left-0"></div>
          <Navbar />

          {/* Quality Canvas with lower z-index */}
          <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
            <Quality />
          </Canvas>

          {/* Quality_Heading with medium z-index */}
          <div
            style={{ position: "relative", zIndex: 2 }}
            className="sm:relative sm:z-[2] absolute top-2/3 sm:top-0  "
          >
            <Page1_Heading />
          </div>

          {/* Toys Canvas with higher z-index */}
          <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}>
            <Toys />
          </Canvas>

          <Page1_DownArrow />
        </div>
        <Page2 />
        <Page3 />
      </div>
    </>
  );
};

export default Page;
