import { useRef, useState, useEffect } from 'react';

const VideoMobil = () => {
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

    window.addEventListener('touchmove', ()=>{
        if (window.pageYOffset === 520) {
            setActive(true)
        }
    })


    return (
        <>
            <video ref={videoRef} src='/data.mp4' muted  controls></video>
        </>
    )
}

export default VideoMobil