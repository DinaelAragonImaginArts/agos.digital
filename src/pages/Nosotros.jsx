import styles from './css/nosotros.module.css';
import UseDetect from '../hooks/UseDetect';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Nosotros = () => {
  const { setIsTop } = UseDetect()
  useEffect(() => {
    setIsTop(false);
  }, [])


  return (
    <>
      <Helmet>
        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="fb:app_id" content="754725111402415" />
        <meta property="og:url" content="https://agos.digital" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agos Digital" />
        <meta property="og:description"
          content="Con más de 10 años de experiencia en Marketing, Publicidad y Estrategia de contenidos, somos la agencia de comunicación que te ayudará a posicionar ideas, marcas y proyectos, y alcanzar su potencial con una estrategia enfocada en hacer realidad tu visión." />
        <meta property="og:image" content="/portada.png" />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="agos.digital" />
        <meta property="twitter:url" content="/portada.png" />
        <meta name="twitter:title" content="Agos Digital" />
        <meta name="twitter:description"
          content="Con más de 10 años de experiencia en Marketing, Publicidad y Estrategia de contenidos, somos la agencia de comunicación que te ayudará a posicionar ideas, marcas y proyectos, y alcanzar su potencial con una estrategia enfocada en hacer realidad tu visión." />
        <meta name="twitter:image" content="/portada.png" />
        <meta name="keywords"
          content="que es marketing digital, estrategias de marketing digital, comunicación y marketing digital, tecnicatura en marketing digital, ganar dinero con marketing digital, marketing digital tiktok, que es marketing digital y como funciona, benchmarking digital" />
      </Helmet>
      <div className={styles.nosotros_container}>
        <h1>COMUNICACIÓN DE VERDAD</h1>
        <p>Con más de 10 años de experiencia en Marketing, Publicidad y Estrategia de contenidos, somos la agencia de comunicación que te ayudará a posicionar ideas, marcas y proyectos, y alcanzar su potencial con una estrategia enfocada en hacer realidad tu visión. En Agos Digital nos apasiona analizar, entender y generar conexiones en comunidades, para crear una corriente transformadora de ser y hacer comunicación de la cual nos sentimos orgullosos.</p>
      </div>
    </>
  )
}

export default Nosotros