import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import sceneGlb from "../assets/3d/scene.glb";

import bodyNormal from "../assets/3d/textures/cdp_body_normal.png";
import bodySpecular from "../assets/3d/textures/cdp_body_specularGlossiness.png";
import metalDiffuse from "../assets/3d/textures/cdp_metal_diffuse.png";
import metalSpecular from "../assets/3d/textures/cdp_metal_specularGlossiness.png";
import plasticDiffuse from "../assets/3d/textures/cdp_plastic_diffuse.png";
import plasticSpecular from "../assets/3d/textures/cdp_plastic_specularGlossiness.png";
import glossDiffuse from "../assets/3d/textures/gloss_diffuse.png";
import glossSpecular from "../assets/3d/textures/gloss_specularGlossiness.png";
import planeDiffuse from "../assets/3d/textures/Plane.005_0_diffuse.png";
import planeOcclusion from "../assets/3d/textures/Plane.005_0_occlusion.png";
import whiteLight from "../assets/3d/textures/white_light_emissive.png";

export function HoverCar() {
  const carRef = useRef();

  const { scene, animations } = useGLTF(sceneGlb);
  const { actions } = useAnimations(animations, carRef);

  const textures = useTexture({
    bodyNormal,
    bodySpecular,
    metalDiffuse,
    metalSpecular,
    plasticDiffuse,
    plasticSpecular,
    glossDiffuse,
    glossSpecular,
    planeDiffuse,
    planeOcclusion,
    whiteLight,
  });

  // 🔥 AUTO ROTATION
  useFrame((_, delta) => {
    if (carRef.current) {
      carRef.current.rotation.y += delta * 0.7;
    }
  });

  useEffect(() => {
    // ✅ FIX TEXTURE SETTINGS
    Object.values(textures).forEach((t) => {
      if (!t) return;
      t.flipY = false;
      t.colorSpace = THREE.SRGBColorSpace; // 🔥 important
    });

    scene.traverse((child) => {
      if (child.isMesh) {
        let mat = child.material;
        if (!mat) return;

        mat = mat.clone();
        child.material = mat;

        // 🔥 BODY (dark + slight blue tint for richness)
        if (mat.name === "cdp_body") {
          mat.color.set("#111827"); // rich dark blue-black
          mat.metalness = 1;
          mat.roughness = 0.2;
        }

        // 🔥 METAL (bright highlight for contrast)
        else if (mat.name === "cdp_metal") {
          mat.color.set("#f9fafb"); // near white metal
          mat.metalness = 1;
          mat.roughness = 0.15;
        }

        // 🔥 PLASTIC (contrast layer)
        else if (mat.name === "cdp_plastic") {
          mat.color.set("#4b5563"); // mid gray
          mat.metalness = 0.2;
          mat.roughness = 0.7;
        }

        // 🔥 GLASS (real visible glass)
        else if (mat.name === "gloss") {
          mat.color.set("#38bdf8"); // subtle cyan tint
          mat.transparent = true;
          mat.opacity = 0.25;
          mat.roughness = 0;
          mat.metalness = 0;
        }

        // ❌ REMOVE GROUND
        else if (mat.name === "Plane.005_0") {
          child.visible = false;
        }

        // 🔥 LIGHTS (MAIN HERO 🔥)
        else if (mat.name === "white_light" || mat.name === "thruster") {
          mat.emissive.set("blue"); // bright neon cyan
          mat.emissiveIntensity = 8; // 👈 BOOST
          mat.color.set("blue");
        }

        mat.needsUpdate = true;
      }
    });

   actions["Take 01"]?.play();
  }, [scene, textures, actions]);

  return (
    <group ref={carRef} position={[0, -0.5, 0]} scale={[0.8, 0.8, 0.8]}>
      <primitive object={scene} />
    </group>
  );
}