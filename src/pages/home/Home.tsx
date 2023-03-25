import AboutUs from "../../components/aboutUs/AboutUs";
import Header from "../../components/header/Header";
import TrackProduct from "../../components/trackProduct/TrackProduct";
import OurServices from "../../components/ourServices/OurServices";

import { advans } from "../../components/aboutUs/advanItem/dateAdvan";
import { services } from "../../components/ourServices/serviceItem/dateServices";


const Home = () => {
    return (
        <>
            <Header/>
            <AboutUs advans={advans} />
            <TrackProduct />
            <OurServices services={services}/>
        </>
    )
}

export default Home