import styles from './css/index.module.css';
import Outro from '../utils/Outro';
import { useEffect, useState } from 'react';
import UseDetect from '../hooks/UseDetect';
import VideoDesk from './components/VideoDesk';
import VideoMobil from './components/VideoMobil';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [videoView, setVideoView] = useState(null);
  const [id, setId] = useState("1");
  const { setIsTop } = UseDetect();


  useEffect(() => {
    if ((window.screen.availWidth - window.screen.availHeight >= 0)) {
      setVideoView(true);
    }
    else {
      setVideoView(false);
    }
  }, []);

  const weAnimation = (diapositiva) => {
    setId(diapositiva);
  }

  const changeScroll = () => {
    if (window.pageYOffset > 1200) {
      setIsTop(true);
    } else if (window.pageYOffset < 1200) {
      setIsTop(false);
    };
  }



  if (videoView == false) {
    return (
      <div>
        <div className={styles.banner_container}>
          <h1>
            <span>We Think </span>
            <span>We Do</span>
            <span>We Deliver</span>
          </h1>
          <div className={styles.outro}>
            <Outro />
          </div>
          <div className={styles.btnScroll}>
            <span></span>
          </div>
        </div>
        <div className={styles.videoRell} data-aos="fade-up" >
          <VideoMobil />
        </div>
        <div className={styles.weDescripcions}>
          <div className={styles.controls}>
            <button onClick={() => weAnimation("1")}>We Think </button>
            <button onClick={() => weAnimation("2")}>We Do</button>
            <button onClick={() => weAnimation("3")}>We Deliver</button>
          </div>
          <div className={styles.contenido}>
            <div className={id === "1" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive}  `}>
              <h2>We Think</h2>
              <p>El alma de una estrategia digital que funciona es el concepto <span className={styles.brunel}>creativo</span>. En Agos Digital queremos que tu proyecto alcance su potencial, por ello dise??amos tu concepto y estrategia a la medida para que cumplas todas tus metas. <span className={styles.brunel}>Ofrecemos: </span>Concepto creativo, Dise??o de producto, Estrategia digital, Estrategia de posicionamiento, Campa??as publicitarias, Estrategia de contenidos, Experiencia de usuarios y servicio al cliente, Estrategia de ventas, Capacitaciones y actualizaciones, Consultor??a de negocios</p>
            </div>
            <div className={id === "2" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
              <h2>We Do</h2>
              <p>La <span className={styles.brunel}>forma</span> que toma tu estrategia comienza en la producci??n. Tenemos la capacidad de hacer realidad tu <span className={styles.brunel}>visi??n</span> mediante: Producci??n de video, Producci??n de audio, Fotograf??a de producto, Fotograf??a de retrato, Dise??o gr??fico, Animaci??n y motion graphics, Dise??o de identidad, Producci??n de contenido, Copywriting y redacci??n</p>
            </div>
            <div className={id === "3" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
              <h2>We Deliver</h2>
              <p>Haz que tu estrategia cause <span className={styles.brunel}>impacto</span>. En Agos Digital ejecutamos <span className={styles.brunel}>exitosamente</span> campa??as a trav??s de: Publicidad en todas las plataformas de redes sociales, Google Ads, Posicionamiento SEO, Dise??o y gesti??n de campa??as offline y BTL</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (videoView === true) {
    return (
      <div onWheel={() => changeScroll()}>
        <div className={styles.banner_container}>
          <h1>
            <span>We Think </span>
            <span>We Do</span>
            <span>We Deliver</span>
          </h1>
          <div className={styles.outro}>
            <Outro />
          </div>
          <div className={styles.btnScroll}>
            <span></span>
          </div>
        </div>
        <div className={styles.videoRell} data-aos="fade-up" >
          <VideoDesk />
        </div>
        <div className={styles.weDescripcions}>
          <div className={styles.controls}>
            <button className={id === "1" ? `${styles.amarillo}` : `${styles.deactive}`} onMouseEnter={() => weAnimation("1")}>We Think </button>
            <button className={id === "2" ? `${styles.rojo}` : `${styles.deactive}`} onMouseEnter={() => weAnimation("2")}>We Do</button>
            <button className={id === "3" ? `${styles.azul}` : `${styles.deactive}`} onMouseEnter={() => weAnimation("3")}>We Deliver</button>
          </div>
          <div className={styles.contenido}>
            <div className={id === "1" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive}  `}>
              <h2>We Think</h2>
              <p>El alma de una estrategia digital que funciona es el concepto <span className={styles.brunel}>creativo</span>. En Agos Digital queremos que tu proyecto alcance su potencial, por ello dise??amos tu concepto y estrategia a la medida para que cumplas todas tus metas. <span className={styles.brunel}>Ofrecemos: </span>Concepto creativo, Dise??o de producto, Estrategia digital, Estrategia de posicionamiento, Campa??as publicitarias, Estrategia de contenidos, Experiencia de usuarios y servicio al cliente, Estrategia de ventas, Capacitaciones y actualizaciones, Consultor??a de negocios</p>
            </div>
            <div className={id === "2" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
              <h2>We Do</h2>
              <p>La <span className={styles.brunel}>forma</span> que toma tu estrategia comienza en la producci??n. Tenemos la capacidad de hacer realidad tu <span className={styles.brunel}>visi??n</span> mediante: Producci??n de video, Producci??n de audio, Fotograf??a de producto, Fotograf??a de retrato, Dise??o gr??fico, Animaci??n y motion graphics, Dise??o de identidad, Producci??n de contenido, Copywriting y redacci??n</p>
            </div>
            <div className={id === "3" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
              <h2>We Deliver</h2>
              <p>Haz que tu estrategia cause <span className={styles.brunel}>impacto</span>. En Agos Digital ejecutamos <span className={styles.brunel}>exitosamente</span> campa??as a trav??s de: Publicidad en todas las plataformas de redes sociales, Google Ads, Posicionamiento SEO, Dise??o y gesti??n de campa??as offline y BTL</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;