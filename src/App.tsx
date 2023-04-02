import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import AboutPage from './pages/aboutPage/AboutPage';
import TrackingPage from './pages/trackingPage/TracingPage';
import ServicePage from './pages/servicePage/ServicePage';
import GalleryPage from './pages/galleryPage/GalleryPage';
import HelpPage from './pages/helpPage/HelpPage';

import Footer from './components/footer/Footer';


import './styles/index.scss';

function App() {
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
                        element={<AboutPage />}
                    />
                     <Route
                        path="/fast-delivery/tracking"
                        element={<TrackingPage/>}
                    />
                     <Route
                        path="/fast-delivery/services"
                        element={<ServicePage />}
                    />
                    <Route
                        path="/fast-delivery/gallery"
                        element={<GalleryPage />}
                    />
                     <Route
                        path="/fast-delivery/help"
                        element={<HelpPage />}
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
