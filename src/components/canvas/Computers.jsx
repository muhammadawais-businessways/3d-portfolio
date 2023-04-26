import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-60,50,40]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
       />
      <primitive object={computer.scene}
      scale={0.75}
      position={[0,-3.65,-1.5]}
      rotation={[-0.01,-0.2,-0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 4, 5], fov: 25 }}
    >
      <Suspense >
        <OrbitControls
          enableZoom={false}
     
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Computers;
