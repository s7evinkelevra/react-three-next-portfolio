import { useEffect, Suspense, useState } from 'react'
import { ContactShadows, Environment } from '@react-three/drei'

import Models_A2 from './Models/Models_A2'

import useStore, { setState } from '@/helpers/store'


const sites = [
  {
    name: "Luedemann2 Digitaler Serivce",
    url: "http://luedemann2.de/",
    letter: "L"
  },
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
  },
  {
    name: "Fenster Shop Artur Schatz",
    url: "http://bwkz2f.myraidbox.de/product/iglo-5-classic/",
    letter: "F"
  },
  {
    name: "Dr. med. Dirk Wiechert",
    url: "https://dr-wiechert.com/",
    letter: "D"
  },
  {
    name: "QMB Glasmachers",
    url: "http://qmb-dienstleistungen.de/",
    letter: "Q"
  }
]

const MenuScene = (props) => {
  const [currentSiteIndex, setCurrentSiteIndex] = useState(1)
  const scroll = useStore(state => state.scroll)

  // reset scroll on component mount
  useEffect(() => {
    scroll.current = 0
    setCurrentSiteIndex(Math.floor(Math.random() * sites.length))
  }, [])

  /*   useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSiteIndex(prevIndex => (prevIndex + 1) % (sites.length - 1))
      }, 15000)
  
      return () => clearTimeout(timer);
    }, []) */


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

      <ContactShadows frames={10} position={[0, -4.5, 0]} scale={60} blur={2} far={8.5} />

    </>
  )
}
export default MenuScene
