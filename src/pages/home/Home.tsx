import AboutUs from "../../components/aboutUs/AboutUs";
import Header from "../../components/header/Header";

import { advans } from "../../components/aboutUs/advanItem/dateAdvan";


const Home = () => {
    return (
        <>
            <Header/>
            <AboutUs advans={advans} />

        </>
    )
}

export default Home