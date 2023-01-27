import { useLocation } from "react-router-dom";
import { posts } from '../../utils/blog';
import { useEffect, useState } from 'react';
import styles from './post.module.css';

const Post = () => {
    const location = useLocation();
    const id = location.pathname[location.pathname.length - 1];
    const [post, setPost] = useState();

    useEffect(() => {
        getPost(parseInt(id));
    }, [id]);

    const getPost = (id) => {
        setPost(posts.find(x => x.id === id));
    }

    return (
        <div className={styles.postContent}>
            <img src={post?.img} />
            <div className={styles.contenido}>
            <h1>{post?.titulo}</h1>
            <h2>{post?.subtitulo}</h2>
            <p>{post?.texto}</p>
            <div className={styles.autor}>
                <h4>Autor: {post?.autor}</h4>
                <img src={post?.autor_imagen} alt="imagen del autor" />
            </div>
            </div>
        </div>
    )
}

export default Post
