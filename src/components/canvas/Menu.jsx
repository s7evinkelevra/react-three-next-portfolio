import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useTexture, useGLTF, useHelper, ContactShadows, Environment } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { DirectionalLightHelper } from 'three'
import Models_A1 from './Models/Models_A1'
import Models_A2 from './Models/Models_A2'

const MenuComponent = ({ route }) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)

  const light = useRef(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  /*   useFrame((state, delta) =>
      mesh.current
        ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
        : null
    ) */

  useHelper(light, DirectionalLightHelper, 0.5, "red")

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <pointLight position={[30, 30, 30]} intensity={1.5} />
      {/*       <directionalLight ref={light} position={[20, 50, 50]} />
      <directionalLight position={[20, 50, -50]} /> */}
      {/* <gridHelper /> */}
      <Suspense fallback={null}>
        <group position={[0, 5, 0]}>
          {/* <MacbookComponent /> */}
          {/* <Models_A1 /> */}
          <Models_A2 />
        </group>
        <Environment preset="city" />
      </Suspense>

      <ContactShadows position={[0, -4.5, 0]} scale={60} blur={2} far={8.5} />

    </>
  )
}
export default MenuComponent
