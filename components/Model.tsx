import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/model.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      {Object.keys(nodes).map((key) => (
        <mesh geometry={nodes[key].geometry}>
          <meshStandardMaterial color="white" metalness={1} roughness={0.1} />
        </mesh>
      ))}
    </group>
  )
}

useGLTF.preload('/model-2-transformed.glb')
