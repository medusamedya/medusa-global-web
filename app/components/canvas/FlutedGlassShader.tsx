"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

const FragmentShader = `
  uniform float uTime;
  uniform vec3 uBaseColor;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // 1. DİYAGONAL CAM ÇİZGİLERİ
    float angle = -0.35; 
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rotUv = rot * uv;
    
    float ridgeFreq = 9.0; 
    float ridge = fract(rotUv.x * ridgeFreq);
    
    uv.x += (ridge - 0.5) * 0.03; 
    uv.y += (ridge - 0.5) * 0.03;

    // 2. AKIŞKAN SIVI MASKESİ
    vec2 p = uv * 2.0 - 1.0;
    float t = uTime * 0.4;
    float radius = length(uv - vec2(0.8, 0.5)); 
    float falloff = smoothstep(0.85, 0.1, radius); 
    
    float wave = sin(p.x * 3.0 + t) * cos(p.y * 2.5 + t * 0.8) + sin(p.y * 3.5 - t * 1.5) * cos(p.x * 2.0 + t * 1.2);
    
    // 3. KESKİN PARLAMA MATEMATİĞİ
    float peak = 1.0 - abs(ridge - 0.5) * 2.0; 
    
    float sharpPeak = pow(peak, 8.0); 
    float softPeak = pow(peak, 2.0);  

    // 4. RENK İNŞASI
    vec3 baseColor = mix(uBaseColor, uColor1, smoothstep(-1.0, 1.0, wave) * falloff);
    
    float glowIntensity = smoothstep(-0.2, 1.5, wave) * falloff;
    
    // Parlama çarpanları gözü yormayacak şekilde düşürüldü (3.5 -> 1.5, 0.8 -> 0.4)
    vec3 glowColor = uColor2 * (sharpPeak * 1.5 + softPeak * 0.4) * glowIntensity;
    vec3 finalColor = baseColor + glowColor;
    
    // 5. GÖLGELER VE KONTRAST
    float valley = smoothstep(1.0, 0.0, peak);
    finalColor -= valley * 0.15; // Gölgeler biraz yumuşatıldı

    // Genel arka plan yansıması hafifletildi (0.1 -> 0.04)
    finalColor += uColor2 * sharpPeak * 0.04;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const VertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function ShaderPlane({ isDark }: { isDark: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBaseColor: { value: new THREE.Color() },
      uColor1: { value: new THREE.Color() },
      uColor2: { value: new THREE.Color() },
    }),
    []
  );

  useEffect(() => {
    // Parlama rengi (uColor2) artık her iki temada da ortak: Premium Krem/Gümüş-Gold geçişi
    const sharedGlowColor = "#E8D4B8";
    uniforms.uColor2.value.set(sharedGlowColor);

    if (isDark) {
      // Dark (Medusa) Teması zeminleri
      uniforms.uBaseColor.value.set("#08020F"); 
      uniforms.uColor1.value.set("#3D0A6B");    // Koyu Mor
    } else {
      // Light (Krem) Teması zeminleri
      uniforms.uBaseColor.value.set("#F5EBE1"); 
      uniforms.uColor1.value.set("#F26522");    // Medusa Turuncu
    }
  }, [isDark, uniforms]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={VertexShader}
        fragmentShader={FragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function FlutedGlassShader() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none transition-opacity duration-500">
      <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
        <ShaderPlane isDark={isDark} />
      </Canvas>
    </div>
  );
}