import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HoverCar } from "../models/HoverCar";
import Loader from "./Loader";
import { Environment } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
      <Loader />
    </div>
  );
};

const HoverCarBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none">
     <Canvas
  camera={{ fov: 40, position: [0, 0, 5] }}
  style={{ background: "#ffffff" }}
  gl={{ alpha: true }}
  eventSource={document.getElementById("root")}
>
  <Suspense fallback={null}>
    
    {/* 🔥 LIGHTS */}
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <directionalLight position={[-5, 5, 5]} intensity={1} />

    {/* 🔥 ENVIRONMENT (YAHI ADD KARNA HAI) */}
    <Environment preset="studio" />

    {/* 🔥 MODEL */}
    <HoverCar />

  </Suspense>
</Canvas>
    </div>
  );
};

export default HoverCarBackground;
