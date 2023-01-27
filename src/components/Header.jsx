import styles from './css/header.module.css';
import logo from './img/agos.digital_blanco.png';
import logo2 from './img/agos.digital.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseDetect from '../hooks/UseDetect';

const Header = () => {
  const [active, setActive] = useState(false);
  const { isTop } = UseDetect();
  const activateMenu = () => {
    setActive(!active);
  };

  return (
    <header className={styles.headerContainer}>
      <a href={'/'}>
        <div className={styles.logo}>
          {isTop?
          <img src={logo2} alt="logo agos digital" width="100%" height={"100%"} />  
          :
          <img src={logo} alt="logo agos digital" width="100%" height={"100%"} />
        }
          </div>
      </a>
      <div className={styles.menuContainer}>
        <div className={!isTop? `${styles.menuburger}` : `${styles.menuBurgerBlack}  ${styles.menuburger}`} onClick={() => activateMenu()}>
          <div className={styles.burger}></div>
          <div className={!active ? `${styles.burger}` : `${styles.burgeropen}`}></div>
          <div className={styles.burger}></div>
        </div>
      </div>
      <div className={active ? `${styles.active} ${styles.menubar}` : `${styles.desactive} ${styles.menubar}`}>
        <nav className={active ? `${styles.active} ${styles.navegacion}` : `${styles.desactive} ${styles.navegacion}`}>
          <a href={"/"} onClick={() => activateMenu()}>
            Inicio
          </a>
          <Link to={"/nosotros"} onClick={() => activateMenu()}>
            Nosotros
          </Link>
          <Link to={"/que_hacemos"} onClick={() => activateMenu()}>
            Qué hacemos
          </Link>
          <Link to={"/blog"} onClick={() => activateMenu()}>
            Blog
          </Link>
          <Link to={"/contacto"} onClick={() => activateMenu()}>
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
