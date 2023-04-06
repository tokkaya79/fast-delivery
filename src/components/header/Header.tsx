import { useState } from 'react';

import BurgerMenu from '../burgerMenu/BurgerMenu';
import HeaderMenu from '../headerMenu/HeaderMenu';
import HeaderSlider from '../headerSlider/HeaderSlider';
import HeaderTabs from '../headerTabs/HeaderTabs';

import { slides } from '../headerSlider/dataSlider/slides';

import './style.scss';

const Header: React.FC = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }


    return (
        <section
            className="header"
            id="header"
        >
            <div className="container">
                <div className="header-top">
                    <BurgerMenu isActive={isActive} handleClick={handleClick}/>
                </div>
                <div className="header-inner">
                    <HeaderMenu />
                    <HeaderSlider slides={slides} />
                    <HeaderTabs />
                </div>
            </div>
        </section>
    );
};

export default Header;
