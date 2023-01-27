import { useRef, useState, useEffect } from 'react';


const VideoDesk = () => {
    const videoRef = useRef(null);
    const [active, setActive] = useState(false);

    function handlePlay() {
        videoRef.current.play();
    }
    useEffect(() => {
        if (active) {
            handlePlay();
        }
    }, [active])

    window.addEventListener('wheel', ()=>{
        if (window.pageYOffset === 500) {
            setActive(true)
        }
    })


    return (
        <>
            <video ref={videoRef} src='/agos_min.mp4' muted  controls></video>
        </>
    )
}

export default VideoDesk;