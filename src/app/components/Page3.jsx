"use client";

import { Canvas } from "@react-three/fiber";

import Model3 from "./Model3";
import Page3_Heading from "./Page3_Heading";
import Page3_Para from "./Page3_Para";
import Page2_button from "./Page2_button";

const Page3 = () => {
  return (
    <>
      <div className=" page2 min-h-screen sm:h-screen w-full sm:flex font-['Bayon'] text-white bg-black">
        <div className="hidden   sm:w-[40vw] sm:flex sm:items-center sm:pt-[10vw] sm:justify-center sm:h-full ">
          <Canvas>
            <Model3 />
          </Canvas>
        </div>
        <div className="container w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full  sm:w-1/2 px-10 py-7 ">
          <Page3_Heading />
          <div className="w-full relative h-[50vw]  overflow-hidden rounded-md sm:hidden ">
            <div className="overlay w-full h-full  absolute top-0 left-0 z-[100] bg-transparent"></div>
            <Canvas>
              <Model3 />
            </Canvas>
          </div>
          <Page3_Para />
          <Page2_button />
        </div>
      </div>
    </>
  );
};

export default Page3;
