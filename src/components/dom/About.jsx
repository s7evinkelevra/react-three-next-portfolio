import React from 'react';

import Image from 'next/image';
import profilePic from 'public/img/jan_comp.jpg'


import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.text}>
          <h1>About Me</h1>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
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