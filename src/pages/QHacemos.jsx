import styles from './css/how.module.css';
import { useEffect } from 'react';
import UseDetect from '../hooks/UseDetect';

const QHacemos = () => {
  const { setIsTop } = UseDetect()
  useEffect(() => {
    setIsTop(true);
  })

  return (
    <div className={styles.container}>
      <div className={styles.infografiaContainer}>
        <div className={styles.infografia} data-aos="fade-up">
        </div>
        <div className={styles.infografia} data-aos="fade-up">
        </div>
        <div className={styles.infografia} data-aos="fade-up">
        </div>
      </div>
    </div>
  )
}

export default QHacemos