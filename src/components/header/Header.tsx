import HeaderMenu from '../headerMenu/HeaderMenu';
import HeaderSlider from '../headerSlider/HeaderSlider';
import { slides } from '../headerSlider/dataSlider/slides';


import './style.scss';
import HeaderTabs from '../headerTabs/HeaderTabs';

const Header: React.FC = () => {
    return (
        <div className="header">
            <HeaderMenu />
            <HeaderSlider slides={slides} />
            <HeaderTabs />
        </div>
    );
};

export default Header;
