import React from 'react';
import NoResults from '../assets/no-results.png'
import styles from '../styles/NotFound.module.css'
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.Margins}>
         <Asset src={NoResults} message={"Nothing here to see!!"} />
    </div>
  )
}

export default NotFound