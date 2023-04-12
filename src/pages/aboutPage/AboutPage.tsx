import AboutUs from '../../components/aboutUs/AboutUs';
import Header from '../../components/header/Header';

import { advans } from '../../components/aboutUs/advanItem/dateAdvan';



const AboutPage = () => {
    return (
        <main className="about-page">
            <div className="about-page__inner">
                <Header />
                <AboutUs advans={advans} />
            </div>
        </main>
    );
};

export default AboutPage;
