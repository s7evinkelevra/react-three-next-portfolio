import React from 'react';

import styles from './WordHighlight.module.css'

const WordHighlight = ({ sep, children }) => {
  const wordList = children.split(sep) || [];

  return (
    <span className={styles.highlight_container}>
      {wordList.map((item, index) => (
        <span key={index}>
          {(index ? "," : "")}{" "}<span className={styles.highlight}>{item}</span>
        </span>
      ))}
    </span>
  )
}

export default WordHighlight;