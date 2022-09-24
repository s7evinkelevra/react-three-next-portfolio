import Overlay from '@/components/dom/Overlay';
import useStore from '@/helpers/store';
import dynamic from 'next/dynamic'


const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const MenuComponent = dynamic(() => import('@/components/canvas/Menu'), {
  ssr: false
})

// dom components goes here
const Page = (props) => {
  const overlay = useStore(state => state.overlay);
  const scroll = useStore(state => state.scroll);
  const caption = useStore(state => state.caption);


  return (
    <>
      <Overlay ref={overlay} scroll={scroll} caption={caption} />
      {/* <Instructions /> */}
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => {

  return (
    <>
      {/* <Shader /> */}
      <MenuComponent />

    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Scrolling test',
    },
  }
}
