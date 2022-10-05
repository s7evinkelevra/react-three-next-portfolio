import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useTexture, useGLTF, useHelper, ContactShadows, Environment, Image, Stage } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { DirectionalLightHelper } from 'three'
import Models_A1 from './Models/Models_A1'
import Models_A2 from './Models/Models_A2'
import { useEffect } from 'react'


const sites = [
  {
    name: "DBV Hauptvertretung Antony Kisters",
    url: "https://berufseinstieg-bundeswehr.de",
    letter: "A"
  },
  {
    name: "Newport-Optik",
    url: "https://newport-optik.de",
    letter: "N"
  },
  {
    name: "Oralchirurgie Westerwald Praxis Dr. Rütters",
    url: "https://oralchirurgie-westerwald.de/",
    letter: "O"
  }
]

const MenuScene = (props) => {
  const [currentSiteIndex, setCurrentSiteIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSiteIndex(prevIndex => (prevIndex + 1) % (sites.length - 1))
    }, 15000)

    return () => clearTimeout(timer);
  }, [])


  // Subscribe this component to the render-loop, rotate the mesh every frame
  /*   useFrame((state, delta) =>
      mesh.current
        ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
        : null
    ) */

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
          <Models_A2 iframeSrc={sites[currentSiteIndex].url} />
        </group>
        <Environment preset="city" />
      </Suspense>

      <ContactShadows /* frames={1} */ position={[0, -4.5, 0]} scale={60} blur={2} far={8.5} />

    </>
  )
}
export default MenuScene
