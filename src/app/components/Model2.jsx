"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import { MathUtils } from "three";

// This component now contains the useFrame hook
const Model2 = () => {
  const model = useGLTF("/toy2.glb");
  const model2ref = useRef(null);
  const orbitControlsRef = useRef(null);

  // Move useFrame inside a Canvas child component
  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(
        MathUtils.degToRad((y + 1) * 60) + 0.5
      );
      orbitControlsRef.current.update();
    }
    model2ref.current.rotation.y += delta * 0.7;
  });

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(70)} // bottom
        maxPolarAngle={MathUtils.degToRad(100)} // top
        enableZoom={false}
      />
      <ambientLight intensity={1.5} />
      <directionalLight args={[0, 0, 3]} intensity={2.5} color={"white"} />
      <primitive ref={model2ref} object={model.scene} scale={0.3} />
    </>
  );
};

export default Model2;
