import { useState, useEffect, createContext } from 'react';

const DetectContext = createContext();

const DetectProvider = ({ children }) => {

    const [isTop, setIsTop] = useState(false);

    return (
        <DetectContext.Provider value={{
            isTop,
            setIsTop
        }}>{children}</DetectContext.Provider>
    )

}

export {
    DetectProvider
}

export default DetectContext;