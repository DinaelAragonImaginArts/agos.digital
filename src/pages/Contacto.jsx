import styles from './css/contacto.module.css';
import cliente from '../config/cliente';
import { useState, useEffect } from 'react';
import Alerta from '../utils/Alerta';
import Spiner from '../components/Spiner';
import UseDetect from '../hooks/UseDetect';
import { Helmet } from 'react-helmet-async';

const Contacto = () => {
  const [check, setCheck] = useState(false);

  /*Variables del formulario*/
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [detalles, setDetalles] = useState('');
  const [alerta, setAlerta] = useState({});
  const { setIsTop } = UseDetect()

  useEffect(() => {
    setIsTop(true);
  }, [])

  const mostrarAlerta = alerta => {
    setAlerta(alerta)
    setTimeout(() => {
      setAlerta({})
    }, 10000);
  }

  useEffect(() => {
    setAlerta({});
  }, [nombre, correo, telefono, detalles])


  const mailSender = async mail => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      const { data } = await cliente.post('/emails', mail, config);
      console.log(data);
    } catch (error) {
      mostrarAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, correo, telefono, detalles].includes('')) {
      mostrarAlerta({
        msg: 'Todos los Campos son obligatorios',
        error: true
      })
      return
    } else if (telefono.length < 10) {
      mostrarAlerta({
        msg: 'Numero telefónico no valido',
        error: true
      })
      return
    }
    mailSender({ nombre, correo, telefono, detalles });
    setNombre('');
    setCorreo('');
    setTelefono('');
    setDetalles('');
    setCheck(true);

  }

  useEffect(() => {
    if (check) {
      setTimeout(() => {
        setCheck(false);
      }, 5000)
    }
  }, [check])

  const { msg } = alerta;

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
      <div className={styles.contenedor_principal} >
        <h1 className={styles.titleContacto}>CRECE CON NOSOTROS</h1>
        {check ? <Spiner /> :
          <div className={styles.contacto_container}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
              {msg && <Alerta alerta={alerta} />}
              <div className={styles.inputContainer}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  autoComplete="off" type="text" name="nombre" />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Correo</label>
                <input
                  value={correo}
                  onChange={e => setCorreo(e.target.value)}
                  autoComplete="off" type="email" name="email" />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="numero">Teléfono</label>
                <input
                  value={telefono}
                  onChange={e => setTelefono(e.target.value)}
                  autoComplete="off" type="tel" name="numero" />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="text-area">Cuéntanos tu visión</label>
                <textarea name="text-area"
                  value={detalles}
                  onChange={e => setDetalles(e.target.value)}
                />
              </div>
              <div className={styles.btnSubmit}>
                <input type="submit" />
              </div>
            </form>
            <div className={styles.contacto_rrss}>
              <p>Tel:  (664) 210 12 83</p>
              <p>Correo: info@agos.mx</p>
              <div className={styles.rrss_icon}>
                {/*FACEBOOK ICON*/}
                <a href='https://www.facebook.com/agosdigitalmex' target={"_blank"} className={styles.redIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#fdfdfd" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                {/*INSTAGRAM ICON*/}
                <a href='https://www.instagram.com/agosdigitalmx/' target={"_blank"} className={styles.redIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#fdfdfd" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                {/*TWITTER ICON*/}
                <a href='https://twitter.com/agosdigitalmx' target={"_blank"} className={styles.redIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#fdfdfd" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
                {/*TIKTOK ICON*/}
                <a href='https://www.tiktok.com/@agos_digital' target={"_blank"} className={styles.redIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#fdfdfd" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                {/*YOUTUBE ICON*/}
                <a href='https://www.youtube.com/channel/UCqijftCgB-8RxUN85rBzP6g' target={"_blank"} className={styles.redIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#fdfdfd" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
                </a>
                {/*LINKEDIN ICON*/}
                <a href='https://www.linkedin.com/company/agosdigitalmx/mycompany/' target={"_blank"} className={styles.redIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#FDFDFD" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        }
      </div >
    </>
  )
}

export default Contacto