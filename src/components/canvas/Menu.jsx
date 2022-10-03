import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useTexture, useGLTF, useHelper, ContactShadows, Environment } from '@react-three/drei'
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
    name: "Praxis Dr. Wiechert",
    url: "https://dr-wiechert.com",
    letter: "W"
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
  },
  {
    name: "Spizen-Prävention",
    url: "https://spitzen-praevention.com/neue-gesundheitskultur/",
    letter: "S"
  },
  {
    name: "Fenster Konfigurator",
    url: "https://fenster.luedemann2.de",
    letter: "K"
  }
]

const MenuComponent = (props) => {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)

  const light = useRef(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  const [currentSiteIndex, setCurrentSiteIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSiteIndex >= (sites.lenght - 1)) {
        setCurrentSiteIndex(0)
      } else {
        setCurrentSiteIndex(currentSiteIndex + 1)
      }
    }, 10000)

    return () => clearTimeout(timer);
  }, [])


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
          <Models_A2 iframeSrc={sites[currentSiteIndex].url} />
        </group>
        <Environment preset="city" />
      </Suspense>

      <ContactShadows /* frames={1} */ position={[0, -4.5, 0]} scale={60} blur={2} far={8.5} />

    </>
  )
}
export default MenuComponent
