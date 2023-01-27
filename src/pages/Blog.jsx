import styles from './css/blog.module.css';
import { posts } from '../utils/blog.js';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import UseDetect from '../hooks/UseDetect';

const Blog = () => {
  const { setIsTop } = UseDetect()
  useEffect(() => {
    setIsTop(true);
  })

  return (
    <>
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