import React from 'react';

import Image from 'next/image';
import profilePic from 'public/img/jan_comp.jpg'


import styles from './About.module.css'
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.text}>
          <h1>About Me</h1>
          <p>
            Hi, i&apos;m Jan Lüdemann. The best way to get to know me is to look at some of the <Link href="/portfolio">projects</Link> i did. If you don&apos;t want to do that, here is a quick summary: together with my brother, i&apos;ve been building for the web since 2018. This includes everything on the spectrum between designing and setting up wordpress sites for clients, consultation for online marketing to fullstack development. For most projects, i&apos;ve been the sole developer in the team, but also had the chance to collaborate with in-house developers of some clients.
          </p>
          <p>
            For people who care about this sort of thing, here is a list of technologies and methods i&apos;m familiar with or have used in the past: Javascript, R, Python, C++, mySQL, postgreSQL, mongoDB, SQLite, MSSQL, firebase, Node, Express, Wordpress, Woocommerce, React, NextJS, ThreeJS, Zustand, tailwindCSS, bootstrap, MaterialUI, radixUI, git, docker, AWS, Kanban, Agile, wet lab methods, DNA sequencing, population genetics analysis.
          </p>
          <p>
            Recently, i&apos;ve also received my masters degree in biology (🎉), developing a simulation model.
          </p>
          <p>
            Feel free to contact me at jan.luedemann@gmail.com
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.image_container}>
          <Image alt="Jan Lüdemann profile picture" src={profilePic} />
        </div>
      </div>
    </div>

  );
};

export default About;