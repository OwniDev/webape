import React, { Suspense, useCallback, useRef, useEffect } from "react"

import * as THREE from "three"

import { Canvas } from "react-three-fiber"
import Model from "./Scene"

const R3FMonkey = () => {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [
        x - window.innerWidth / 2 - 150,
        y - window.innerHeight / 2,
      ]),
    []
  )
  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      const handleOrientation = e => {
        mouse.current[1] = e.beta - 90
        mouse.current[0] = e.gamma
        // alert("Device orientation detected")
      }
      window.addEventListener("deviceorientation", handleOrientation)
    }
  }, [])
  
  return (
    <>
      <Canvas
        gl={{ alpha: false, antialias: true, gammaOutput:true }}
        camera={{ fov: 75, position: [0, 0, 70] }}
        onCreated={({ gl }) => {
          gl.setClearColor("white")
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
        onMouseMove={onMouseMove}
        colorManagement={true}
      >
        <Suspense fallback={null}>
          <Model mouse={mouse} />
        </Suspense>
        <ambientLight color="white" intensity={0.5} />
        <pointLight position={[100, 100, 100]} intensity={2} color="blue"/>
        <pointLight position={[-100, -100, -100]} intensity={5} color="green" />
      </Canvas>
    </>
  )
}

export default R3FMonkey
