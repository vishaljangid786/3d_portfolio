import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NeuralNetwork = ({ isAnimating }) => {
  const count = 60;
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
      });
    }
    return p;
  }, []);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  const pointsRef = useRef();
  const linesRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = new Float32Array(count * 3);
    const linePositions = [];

    points.forEach((p, i) => {
      // Update positions
      p.position.add(p.velocity);

      // Bounce off boundaries
      if (Math.abs(p.position.x) > 5) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 5) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 3) p.velocity.z *= -1;

      // Mouse influence
      const distToMouse = p.position.distanceTo(new THREE.Vector3(state.mouse.x * 5, state.mouse.y * 5, 0));
      if (distToMouse < 2) {
        p.position.lerp(new THREE.Vector3(state.mouse.x * 5, state.mouse.y * 5, 0), 0.01);
      }

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;

      // Find connections
      for (let j = i + 1; j < count; j++) {
        const dist = p.position.distanceTo(points[j].position);
        if (dist < 3) {
          linePositions.push(p.position.x, p.position.y, p.position.z);
          linePositions.push(points[j].position.x, points[j].position.y, points[j].position.z);
        }
      }
    });

    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (linesRef.current) {
      linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial 
          color="#c5a059" 
          size={0.15} 
          sizeAttenuation 
          transparent 
          opacity={0.8} 
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial 
          color="#c5a059" 
          transparent 
          opacity={0.2} 
          linewidth={1}
        />
      </lineSegments>
      
      {/* Central Core Pulse */}
      <mesh scale={isAnimating ? 1.2 : 1}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#c5a059" 
          emissive="#c5a059" 
          emissiveIntensity={isAnimating ? 2 : 0.5} 
          transparent 
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

export default NeuralNetwork;
