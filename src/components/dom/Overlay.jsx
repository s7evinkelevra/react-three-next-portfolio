import Link from "next/link"
import React, { forwardRef } from "react"
import styles from './Overlay.module.css'


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

const MenuLink = ({ href, children }) => (
  <Link href={href}>
    <a className={styles.menu_link}>{children}</a>
  </Link>
)


const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      console.log("scrolling...")
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    className={styles.scroll}
  >


    <Section height="100vh">
      <h1>Hi, Im Jan!</h1>
      Im a developer mostly focussed on web/react, with &gt;30 completed professional projects since 2018.
      Scroll to take a quick tour of what i do, or see the portfolio for a comprehensive overview.
    </Section>

    <Section height="100vh">
      <h1>Websites</h1>
      It all started with wordpress websites for local businesses, like a b and c.
    </Section>

    <Section height="100vh">
      <h1>Simulation in Biology</h1>
      Text unter der Überschrift lul
    </Section>


    <div className={styles.fixed_menu_container}>
      <div className={styles.fixed_menu}>
        <MenuLink href="/portfolio">Portfolio</MenuLink>
        <MenuLink href="/about">About Me</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>

      </div>
    </div>


    {/*     <div style={{ height: "100vh" }}>
      <div className={styles.dot}>
        <h1>Jan Lüdemann</h1>
        Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
      </div>
    </div>




    <div style={{ height: "100vh" }}>
      <div className={styles.dot}>
        <h1>headphone</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the head over a users ears.
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className={styles.dot}>
        <h1>rocket</h1>A rocket  is a projectile that spacecraft, aircraft or other
        vehicle use to obtain thrust from a rocket engine.
      </div>
    </div> */}
    {/* <div style={{ height: "200vh" }}>
      <div className={styles.dot}>
        <h1>turbine</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a
        rotary mechanical device that extracts energy from a fluid flow and converts it into useful work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className={styles.dot}>
        <h1>table</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or
        on which to place things.[1][2]
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className={styles.dot}>
        <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and
        alphanumeric keyboard.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className={styles.dot}>
        <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German
        pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning of the 20th century.
      </div>
    </div> */}
    <span class={styles.caption} ref={caption}>
      0.00
    </span>
  </div>
))

Overlay.displayName = "Overlay";
export default Overlay
