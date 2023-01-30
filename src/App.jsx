import { BrowserRouter, Routes, Route } from "react-router-dom";
import Public from "./layout/Public";
import { HelmetProvider } from "react-helmet-async";
//Pages
import Index from './pages/Index';
import Nosotros from './pages/Nosotros';
import QHacemos from './pages/QHacemos';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Post from './pages/components/Post';
import { DetectProvider } from "./context/DetectProvider";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <DetectProvider>
          <Routes>
            <Route exact path="/" element={<Public />}>
              <Route index element={<Index />} />
              <Route path='nosotros' element={<Nosotros />} />
              <Route path='que_hacemos' element={<QHacemos />} />
              <Route path='blog' element={<Blog />} />
              <Route path='contacto' element={<Contacto />} />
              <Route path="blog/:id" element={<Post />} />
            </Route>
          </Routes>
        </DetectProvider>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
