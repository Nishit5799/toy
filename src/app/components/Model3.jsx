"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import { MathUtils } from "three";

// This component now contains the useFrame hook
const Model3 = () => {
  const model = useGLTF("/pony.glb");
  const model3ref = useRef(null);
  const orbitControlsRef = useRef(null);

  // Move useFrame inside a Canvas child component
  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(MathUtils.degToRad((y + 1) * 45));
      orbitControlsRef.current.update();
    }
    model3ref.current.rotation.y += delta * 0.7;
  });

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(60)} // bottom
        maxPolarAngle={MathUtils.degToRad(120)} // top
        enableZoom={false}
      />
      <ambientLight intensity={2} color={"white"} />
      <directionalLight args={[0, 0, 1]} intensity={2.5} color={"white"} />
      <primitive ref={model3ref} object={model.scene} scale={1} />
    </>
  );
};

export default Model3;
