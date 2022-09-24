import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useTexture, useGLTF, useHelper, ContactShadows, Environment, ScrollControls, Scroll } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { MacbookComponent } from './Macbook'
import { DirectionalLightHelper } from 'three'
import Overlay from '../dom/Overlay'

const ScrollMenuComponent = ({ route }) => {
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

  /* useHelper(light, DirectionalLightHelper, 0.5, "red") */

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <ScrollControls pages={5}>
        <Scroll html style={{ width: "100%", height: "100%" }}>
          <div className='sticky text-white'>
            Test
          </div>
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default ScrollMenuComponent
