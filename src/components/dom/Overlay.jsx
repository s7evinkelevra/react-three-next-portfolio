import React, { useRef, forwardRef } from "react"
import Link from "next/link"

import styles from './Overlay.module.css'
import Menu from "./Menu"


const Section = ({ height, children }) => {

  return (
    <div style={{ height }}>
      <div className={styles.section}>
        <div className={styles.section_box}>
          {children}
        </div>
      </div>
    </div>
  )
}



const Overlay = forwardRef(({ scroll }, ref) => {
  const caption = useRef();

  return (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        caption.current.innerText = scroll.current.toFixed(2)
      }}
      className={styles.scroll}
    >


      <Section height="100vh">
        <h1>Hi, I&apos;m Jan!</h1>
        I&apos;m a developer mostly interested in web/react, with &gt;&nbsp;30 professional projects completed since 2018.
        Scroll to take a quick tour of what i do, or see the <Link href="/portfolio"><a>portfolio</a></Link> for a comprehensive overview.
      </Section>

      <Section height="100vh">
        It all started with wordpress websites for local businesses, like a b and c.
      </Section>

      <Section height="100vh">
        <h1>React</h1>
        It all started with wordpress websites for local businesses, like a b and c.
      </Section>

      <Section height="100vh">
        <h1>Simulation in Biology</h1>
        Text unter der Überschrift lul
      </Section>


      <Menu width={"600px"} />


      <span className={styles.caption} ref={caption}>
        0.00
      </span>
    </div>
  )
})

Overlay.displayName = "Overlay";
export default Overlay
