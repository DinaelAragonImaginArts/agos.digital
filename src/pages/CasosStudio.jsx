import styles from './css/casos.module.css';
import { useState } from 'react';

const CasosStudio = () => {
  const [lamina, setLamina] = useState(1);

  const cambioLamina = () => {
    if (lamina < 3) {
      setLamina(lamina + 1);
    }
    else if (lamina == 3) {
      setLamina(1);
    }
  }

  return (
    <div className={styles.casos_container}>
      <div className={styles.laminas}>
        <div
          onTouchEndCapture={() => cambioLamina()}
          className={
            lamina == 1 ?
              `${styles.mina} ${styles.active}`
              : `${styles.mina} ${styles.noActive}`}>1</div>
        <div
          onTouchEndCapture={() => cambioLamina()}
          className={
            lamina == 2 ?
              `${styles.mina} ${styles.active}`
              : `${styles.mina} ${styles.noActive}`}>2</div>
        <div
          onTouchEndCapture={() => cambioLamina()}
          className={
            lamina == 3 ?
              `${styles.mina} ${styles.active}`
              : `${styles.mina} ${styles.noActive}`}>3</div>
      </div>
      <button
        className={styles.btnSg}
        onClick={() => cambioLamina()}>
        Siguiente
      </button>
    </div>
  )
}

export default CasosStudio