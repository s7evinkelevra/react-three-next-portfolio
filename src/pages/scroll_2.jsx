import Overlay from '@/components/dom/Overlay';
import useStore from '@/helpers/store';
import { Scroll, ScrollControls } from '@react-three/drei';
import dynamic from 'next/dynamic'


const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const ScrollMenuComponent = dynamic(() => import('@/components/canvas/ScrollMenu'), {
  ssr: false,
});

// dom components goes here
const Page = (props) => {
  console.log(props);
  const overlay = useStore(state => state.overlay);
  const scroll = useStore(state => state.scroll);
  const caption = useStore(state => state.caption);

  console.log(scroll);

  return (
    <>
      {/* <Overlay ref={overlay} scroll={scroll} caption={caption} /> */}
      {/* <Instructions /> */}
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => {

  return (
    <>
      <ScrollMenuComponent />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Scrolling test 2',
    },
  }
}
