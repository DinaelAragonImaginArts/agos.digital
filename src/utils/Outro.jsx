import Lottie from 'lottie-react';
import outro from './outro.json';

const Loader = () => {
    return <Lottie animationData={outro}  loop={false}/>
}

export default Loader;