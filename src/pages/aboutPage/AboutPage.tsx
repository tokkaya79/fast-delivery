import AboutUs from '../../components/aboutUs/AboutUs';
import HeaderMenu from '../../components/headerMenu/HeaderMenu';

import { advans } from '../../components/aboutUs/advanItem/dateAdvan';

interface AboutPageProps{
    isActive: boolean    
}

const AboutPage:React.FC<AboutPageProps> = ({isActive}) => {
    return (
        <main className="about-page">
            <div className="about-page__inner">
                <HeaderMenu isActive={isActive}/>
                <AboutUs advans={advans} />
            </div>
        </main>
    );
};

export default AboutPage;
