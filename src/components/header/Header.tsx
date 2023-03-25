import HeaderMenu from '../headerMenu/HeaderMenu';
import HeaderSlider from '../headerSlider/HeaderSlider';
import HeaderTabs from '../headerTabs/HeaderTabs';

import { slides } from '../headerSlider/dataSlider/slides';

import './style.scss';

const Header: React.FC = () => {
    return (
        <section className="header">
            <HeaderMenu />
            <HeaderSlider slides={slides} />
            <HeaderTabs />
        </section>
    );
};

export default Header;
