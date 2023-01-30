import { useLocation } from "react-router-dom";
import { posts } from '../../utils/blog';
import { useEffect, useState } from 'react';
import styles from './post.module.css';
import UseDetect from "../../hooks/UseDetect";
import { Helmet } from "react-helmet-async";

const Post = () => {
    const { pathname } = useLocation();
    const id = pathname[location.pathname.length - 1];
    const [post, setPost] = useState();
    const { setIsTop } = UseDetect();

    useEffect(() => {
        getPost(parseInt(id));
    }, [id]);
    useEffect(() => {
        setIsTop(true);
    }, [])

    const getPost = (id) => {
        setPost(posts.find(x => x.id === id));
    }

    return (
        <>
            <Helmet>
                {/*<!-- Facebook Meta Tags -->*/}
                <meta property="fb:app_id" content="754725111402415" />
                <meta property="og:url" content="https://agos.digital" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={post?.titulo} />
                <meta property="og:description"
                    content={post?.texto} />
                <meta property="og:image" content={post?.img} />

                {/*<!-- Twitter Meta Tags -->*/}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="agos.digital" />
                <meta property="twitter:url" content={post?.img} />
                <meta name="twitter:title" content={post?.titulo} />
                <meta name="twitter:description"
                    content={post?.texto} />
                <meta name="twitter:image" content="/portada.png" />
                <meta name="keywords"
                    content="que es marketing digital, estrategias de marketing digital, comunicación y marketing digital, tecnicatura en marketing digital, ganar dinero con marketing digital, marketing digital tiktok, que es marketing digital y como funciona, benchmarking digital" />
            </Helmet>
            <div className={styles.postContent}>
                <img src={post?.img} />
                <div className={styles.contenido}>
                    <h1>{post?.titulo}</h1>
                    <h2>{post?.subtitulo}</h2>
                    <p>{post?.texto}</p>
                    <div className={styles.autor}>
                        <h4>Por: {post?.autor}</h4>
                        <img src={post?.autor_imagen} alt="imagen del autor" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
