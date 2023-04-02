import AboutUs from '../../components/aboutUs/AboutUs';
import HeaderMenu from '../../components/headerMenu/HeaderMenu';

import { advans } from '../../components/aboutUs/advanItem/dateAdvan';

const AboutPage = () => {
    return (
        <main className='about-page'>
            <HeaderMenu />
            <AboutUs advans={advans} />
        </main>
    );
};

export default AboutPage;
