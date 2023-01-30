import styles from './css/how.module.css';
import { useEffect } from 'react';
import UseDetect from '../hooks/UseDetect';

const QHacemos = () => {
  const { setIsTop } = UseDetect();
  
  useEffect(() => {
    setIsTop(true);
    window.scrollTo(0, 0);
  }, [])



  return (
    <div className={styles.container}>
      <div className={styles.infografiaContainer}>
        <div className={styles.infografia} >
        </div>
        <div className={styles.infografia} >
        </div>
        <div className={styles.infografia} >
        </div>
      </div>
    </div>
  )
}

export default QHacemos