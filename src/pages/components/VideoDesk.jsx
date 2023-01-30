import { useRef, useState, useEffect } from 'react';


const VideoDesk = () => {
    const videoRef = useRef(null);
    const [active, setActive] = useState(false);

    function handlePlay() {
        videoRef.current.play();
        videoRef.current.muted = false;
    }

    function handlePause() {
        videoRef.current.pause();
        videoRef.current.muted = true;
    }

    useEffect(() => {
        if (active) {
            handlePlay();
        } else if (!active) {
            handlePause();
        }
    }, [active]);

    return (
        <>
            <div  onPointerEnter={() => setActive(true)} onPointerLeave={() => setActive(false)} className='videoContainerAction'>
                <video ref={videoRef} src='/agos_min.mp4' muted ></video>
            </div>
        </>
    )
}

export default VideoDesk;