import AboutUs from '../../components/aboutUs/AboutUs';
import Header from '../../components/header/Header';
import TrackProduct from '../../components/trackProduct/TrackProduct';
import OurServices from '../../components/ourServices/OurServices';
import HowItWorks from '../../components/howItWorks/HowItWorks';
import Gallery from '../../components/gallery/Gallery';
import Slider from '../../components/slider/Slider';

import { advans } from '../../components/aboutUs/advanItem/dateAdvan';
import { services } from '../../components/ourServices/serviceItem/dateServices';
import { items } from '../../components/howItWorks/howWorksItem/dateItems';
import { images } from '../../components/gallery/images';
import { fotos } from '../../components/slider/fotos';

const Home = () => {
    return (
        <main className='home-page'>
            <Header />
            <AboutUs advans={advans} />
            <TrackProduct />
            <OurServices services={services} />
            <HowItWorks items={items} />
            <Gallery images={images}/>
            <Slider fotos={fotos} />   
        </main>
    );
};

export default Home;
