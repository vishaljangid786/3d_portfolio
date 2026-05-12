import { useRef, useLayoutEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Stars, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Building = ({ position, scale, color, speed }) => {
  const ref = useRef();
  
  useFrame((state) => {
    // Subtle idle drift
    ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref} position={position}>
      <mesh scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0} metalness={1} />
      </mesh>
      <mesh scale={[scale[0] * 1.02, scale[1] * 1.02, scale[2] * 1.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={1} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const CyberCity = ({ isHome }) => {
  const buildings = useMemo(() => {
    const data = [];
    for (let i = 0; i < 80; i++) {
      const x = (Math.random() - 0.5) * 120;
      const z = Math.random() * -200;
      const h = 5 + Math.random() * 40;
      const w = 2 + Math.random() * 6;
      const d = 2 + Math.random() * 6;
      const color = Math.random() > 0.5 ? "#c5a059" : "#4a5568";
      data.push({ position: [x, h / 2 - 15, z], scale: [w, h, d], color, speed: 0 });
    }
    return data;
  }, [isHome]);

  return (
    <group>
      {buildings.map((b, i) => (
        <Building key={i} {...b} />
      ))}
      <group position={[0, -15.1, 0]}>
        <gridHelper args={[300, 60, "#111", "#050505"]} />
      </group>
    </group>
  );
};

const CameraController = ({ isHome }) => {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Continuous drift
    // Very subtle idle drift
    camera.position.x += (state.mouse.x * 2 - camera.position.x) * 0.01;
    camera.position.y += (state.mouse.y * 1 + 10 - camera.position.y) * 0.01;
    camera.lookAt(0, 0, -100);
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isHome) {
        // Hyperspace zoom on scroll
        gsap.to(camera.position, {
          z: -100,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      } else {
        gsap.to(camera.position, {
          z: 50,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }
    });
    return () => ctx.revert();
  }, [camera, isHome]);

  return null;
};

const CyberScene = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="canvas-container">
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 10, 100]} fov={70} />
        <CameraController isHome={isHome} />
        
        <color attach="background" args={["#08080a"]} />
        <fog attach="fog" args={["#08080a", 10, 200]} />
        
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 50, 0]} intensity={1.5} color="#c5a059" />
        
        <Stars radius={150} depth={50} count={10000} factor={6} saturation={0} fade speed={0.2} />
        
        <CyberCity isHome={isHome} />
        
        <Sparkles count={500} scale={150} size={2} speed={0.2} color="#c5a059" />
      </Canvas>
    </div>
  );
};

export default CyberScene;
