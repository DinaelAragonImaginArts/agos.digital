import { useContext } from "react";
import DetectProvider from '../context/DetectProvider';

const UseDetect = () => {
    return useContext(DetectProvider);
}

export default UseDetect