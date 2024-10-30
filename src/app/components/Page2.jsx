"use client";

import { Canvas } from "@react-three/fiber";

import Model2 from "./Model2";
import Page2_Heading from "./Page2_Heading";
import Page2_Para from "./Page2_Para";
import Page2_button from "./Page2_button";

const Page2 = () => {
  return (
    <>
      <div className=" page2 min-h-screen sm:h-screen w-full sm:flex font-['Bayon'] text-white bg-black">
        <div className="container w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7 ">
          <Page2_Heading />
          <div className="w-full relative h-[50vw]  overflow-hidden rounded-md sm:hidden ">
            <div className="overlay w-full h-full  absolute top-0 left-0 z-[100] bg-transparent"></div>
            <Canvas>
              <Model2 />
            </Canvas>
          </div>
          <Page2_Para />
          <Page2_button />
        </div>
        <div className="hidden   sm:w-1/2 sm:flex sm:items-center sm:pt-[10vw] sm:justify-center sm:h-full ">
          <Canvas>
            <Model2 />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Page2;
