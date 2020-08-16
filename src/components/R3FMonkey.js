import * as THREE from 'three'
import React, { Suspense, useCallback, useEffect, useRef, } from 'react'
import { Canvas } from "react-three-fiber";
import Model from './Scene';

const R3FMonkey = ()=>{
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  return (
    <Canvas gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
    camera={{ fov: 75, position: [0, 0, 70] }}
    onCreated={({ gl }) => {
      gl.setClearColor('white')
      gl.toneMapping = THREE.ACESFilmicToneMapping
      gl.outputEncoding = THREE.sRGBEncoding
    }}
    onMouseDown={onMouseMove}>
      <ambientLight intensity={1.1} />
      <pointLight position={[100, 100, 100]} intensity={1} />
      <pointLight position={[-100, -100, -100]} intensity={1} color="green" />
      <Suspense fallback={null}>
        <Model mouse={mouse}/>
      </Suspense>
    </Canvas>
  );
}

export default R3FMonkey;
