import IconList from './iconList/IconList';
import Logo from './logo/Logo';
import Menu from './menu/Menu';

import './style.scss';

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <Logo />
            <Menu />
            <IconList />
        </div>
    );
};

export default HeaderMenu;