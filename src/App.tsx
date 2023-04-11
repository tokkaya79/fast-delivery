
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import AboutPage from './pages/aboutPage/AboutPage';
import TrackingPage from './pages/trackingPage/TracingPage';
import ServicePage from './pages/servicePage/ServicePage';
import GalleryPage from './pages/galleryPage/GalleryPage';
import HelpPage from './pages/helpPage/HelpPage';


import Footer from './components/footer/Footer';


import './styles/index.scss';


interface AppProps{
    isActive: boolean    
}


const App:React.FC<AppProps> = ({isActive}) => {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/fast-delivery"
                        element={<Home />}
                    />
                    <Route
                        path="/fast-delivery/about"
                        element={<AboutPage isActive={isActive}/>}
                    />
                     <Route
                        path="/fast-delivery/tracking"
                        element={<TrackingPage isActive={isActive}/>}
                    />
                     <Route
                        path="/fast-delivery/services"
                        element={<ServicePage isActive={isActive} />}
                    />
                    <Route
                        path="/fast-delivery/gallery"
                        element={<GalleryPage isActive={isActive} />}
                    />
                     <Route
                        path="/fast-delivery/help"
                        element={<HelpPage isActive={isActive} />}
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
