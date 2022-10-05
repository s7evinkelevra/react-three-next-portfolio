import React, { useRef } from 'react';
import dynamic from 'next/dynamic'

import Overlay from '@/components/dom/Overlay';
import useStore from "@/helpers/store"


/* 
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})
 */

const MenuScene = dynamic(() => import('@/components/canvas/MenuScene'), {
  ssr: false
})

// dom components goes here
const Page = (props) => {
  const overlay = useRef();
  const scroll = useStore(state => state.scroll)


  return (
    <>
      <Overlay ref={overlay} scroll={scroll} />
    </>
  )
}
// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => {

  return (
    <>
      {/* <Shader /> */}
      <MenuScene />

    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}
