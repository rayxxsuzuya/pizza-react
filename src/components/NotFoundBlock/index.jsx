import React from 'react'

import styles from './NotFoundBlock.module.scss';

const index = () => {
  return (
    <h1 className={styles.root}>
      <span style={{fontSize: '100px'}}>🙁</span>
      <br />
      <h1>Ничего не найдено</h1>
    </h1>
  )
}

export default index