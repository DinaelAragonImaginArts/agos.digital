import styles from './css/blog.module.css';
import { posts } from '../utils/blog.js';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import UseDetect from '../hooks/UseDetect';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const { setIsTop } = UseDetect();

  useEffect(() => {
    setIsTop(true);
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
      <div className={styles.blog_container}>
        {posts?.length ?
          (posts.map(post => (
            <Link to={`${post.id}`} key={post.id} className={styles.card_blog}>
              <img src={post.img} alt={post.titulo} />
              <div className={styles.texto}>
                <h1>{post.titulo}</h1>
                <p>{post.texto}</p>
              </div>
            </Link>
          ))
          )
          :
          <div>
            <span>No hay blogs disponibles</span>
          </div>
        }
      </div>
    </>
  )
}

export default Blog