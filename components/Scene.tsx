'use client'

import { Bounds, Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Model } from './Model'

export const Scene = () => {
  return (
    <Canvas>
      <Bounds fit observe margin={1}>
        <Center>
          <Model scale={0.005} />
        </Center>
      </Bounds>

      <color attach="background" args={['#fff']} />
      <OrbitControls makeDefault />

      <Environment preset="apartment" />
    </Canvas>
  )
}
