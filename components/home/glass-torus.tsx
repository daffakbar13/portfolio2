"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/** Glass needs something to reflect: a procedural room, prefiltered once. */
function addEnvironment({ gl, scene }: { gl: THREE.WebGLRenderer; scene: THREE.Scene }) {
  const pmrem = new THREE.PMREMGenerator(gl);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
}

function Torus() {
  const mesh = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX / window.innerWidth - 0.5;
      pointer.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    m.rotation.z += delta * 0.12;
    const tx = 1.05 + pointer.current.y * 0.6;
    const ty = pointer.current.x * 0.9 + Math.sin(t * 0.3) * 0.15;
    m.rotation.x += (tx - m.rotation.x) * 0.05;
    m.rotation.y += (ty - m.rotation.y) * 0.05;
    m.position.y = Math.sin(t * 0.9) * 0.12;
  });

  return (
    <mesh ref={mesh} rotation={[1.05, 0, 0.3]}>
      <torusGeometry args={[1.75, 0.42, 64, 160]} />
      <meshPhysicalMaterial
        color="#dfe6ff"
        metalness={0.05}
        roughness={0.08}
        transmission={0.92}
        thickness={1.2}
        ior={1.35}
        clearcoat={1}
        clearcoatRoughness={0.06}
        iridescence={0.6}
        iridescenceIOR={1.3}
        attenuationColor="#c8ff3d"
        attenuationDistance={4}
        transparent
        opacity={0.95}
      />
    </mesh>
  );
}

/** Real 3D glass torus. Loaded lazily, only on capable desktop browsers. */
export default function GlassTorus() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
      onCreated={addEnvironment}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[-3, 2, 3]} intensity={30} color="#c8ff3d" />
      <pointLight position={[3, -2, 2]} intensity={30} color="#8b7cff" />
      <Torus />
    </Canvas>
  );
}
