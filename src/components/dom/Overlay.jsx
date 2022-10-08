import React, { useRef, forwardRef, useEffect } from "react"
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

  useEffect(() => {
    if (scroll?.current && scroll.current > 0) {
      ref.current.scrollTo({
        top: (ref.current.scrollHeight - window.innerHeight) * scroll.current,
        behavior: "auto"
      })
    }
  }, [])

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
        I&apos;m a developer interested in creating for the web, preferably with react. Together with my brother, i&apos;ve build a business based on that, with &gt;&nbsp;30 professional projects completed since we started in 2018.
        <br />Scroll to take a quick tour of what i do, or see the <Link href="/portfolio"><a>portfolio</a></Link> for a comprehensive overview.
      </Section>

      <Section height="100vh">
        <h1>Websites</h1>
        At the core are websites build using wordpress + the divi page builder. The quick iteration time and large wordpress plugin ecosystem allow for efficient development. For examples, take a look <Link href="/portfolio?project=websites"><a>here</a></Link> or at the background :)
      </Section>

      <Section height="100vh">
        <h1>Node + React</h1>
        For custom products, my stack of choice is node + express for the backend, and react for anything frontend. The database largely depends on the project, i&apos;ve worked with mySQL, postgreSQL, mongoDB and, unfortunately, MSSQL. I&apos;ve had the pleasure of developing some very interesting and complex applications with this stack, like <Link href="/portfolio?project=conditioner">this</Link> or <Link href="/portfolio?project=fenster_configurator">this</Link>.
      </Section>

      <Section height="100vh">
        <h1>Simulation</h1>
        For my masters degree, i&apos;ve developed a <Link href="http://localhost:3000/portfolio?project=sim">simulation model</Link> to investigate the evolution of some highly polymorphic immune genes (MHC, see background). To meet the performance requirements, it was implemented in c++, which i also enjoyed quite a bit. For the analysis, lots of stats and plotting was done in R and python.
      </Section>

      <Section height="100vh">
        <h1>Let&apos;s go!</h1>
        If anything here sounds interesting or you want to get in touch, feel free to contact me at jan.luedemann@gmail.com
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
