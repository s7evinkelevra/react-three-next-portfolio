import React from 'react';
import dynamic from 'next/dynamic'
import Menu from '@/components/dom/Menu';


// dom components goes here
const Page = (props) => {


  return (
    <>
      portfolio lols
      <Menu width={"600px"} />
    </>
  )
}
// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => {

  return (
    <>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Portfolio',
    },
  }
}
