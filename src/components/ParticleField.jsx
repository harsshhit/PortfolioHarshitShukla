import { useRef, useMemo, useCallback, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";

function Particles({ count = 600, mouse, isTouch = false }) {
  const meshRef = useRef();

  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 6;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return { positions, originalPositions };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = meshRef.current.geometry.attributes.position;
    
    // skip repulsion loops on touch to save battery
    if (isTouch) {
      meshRef.current.rotation.y = time * 0.02;
      return;
    }

    const mouseX = mouse.current.x;
    const mouseY = mouse.current.y;

    for (let i = 0; i < count; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      const driftX = Math.sin(time * 0.3 + i * 0.7) * 0.02;
      const driftY = Math.cos(time * 0.2 + i * 0.5) * 0.02;

      const nx = (mouseX / window.innerWidth) * 2 - 1;
      const ny = -(mouseY / window.innerHeight) * 2 + 1;

      const dx = ox - nx * 5;
      const dy = oy - ny * 5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulse = dist < 1.8 ? (1.8 - dist) / 1.8 : 0;
      const repulseX = repulse * (dx / (dist + 0.001)) * 0.6;
      const repulseY = repulse * (dy / (dist + 0.001)) * 0.6;

      pos.setXYZ(i, ox + driftX + repulseX, oy + driftY + repulseY, oz);
    }
    pos.needsUpdate = true;

    meshRef.current.rotation.y = time * 0.04;
    meshRef.current.rotation.x = time * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isTouch ? 0.03 : 0.022}
        color="#E8834A"
        transparent
        opacity={isTouch ? 0.4 : 0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

const ParticleField = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkTouch = () => {
      const touch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.innerWidth < 768;
      setIsTouch(touch);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // pause canvas when offscreen to avoid background GPU drain
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isTouch) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }
  }, [isTouch]);

  if (prefersReducedMotion) {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(232,131,74,0.08) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      onMouseMove={onMouseMove}
      aria-hidden="true"
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
          dpr={isTouch ? 1 : [1, 1.5]}
        >
          <Particles count={isTouch ? 220 : 650} mouse={mouse} isTouch={isTouch} />
        </Canvas>
      )}
    </div>
  );
};

export default ParticleField;
