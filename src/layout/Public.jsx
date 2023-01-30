import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import PiedePagina from '../components/PiedePagina';


const Public = () => {
    return (
        <div className='content-public'>
            <div className='header-container'>
                <Header />
            </div>
            <div className="contenido">
                <Outlet  />
            </div>
            <div className='footer-container'>
                    <PiedePagina />
            </div>
        </div>
    )
}

export default Public;