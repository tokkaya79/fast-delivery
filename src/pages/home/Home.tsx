import AboutUs from "../../components/aboutUs/AboutUs";
import Header from "../../components/header/Header";
import TrackProduct from "../../components/trackProduct/TrackProduct";

import { advans } from "../../components/aboutUs/advanItem/dateAdvan";


const Home = () => {
    return (
        <>
            <Header/>
            <AboutUs advans={advans} />
            <TrackProduct />

        </>
    )
}

export default Home