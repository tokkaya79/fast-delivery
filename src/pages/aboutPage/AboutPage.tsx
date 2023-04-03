import AboutUs from '../../components/aboutUs/AboutUs';
import HeaderMenu from '../../components/headerMenu/HeaderMenu';

import { advans } from '../../components/aboutUs/advanItem/dateAdvan';

const AboutPage = () => {
    return (
        <main className="about-page">
            <div className="about-page__inner">
                <HeaderMenu />
                <AboutUs advans={advans} />
            </div>
        </main>
    );
};

export default AboutPage;
