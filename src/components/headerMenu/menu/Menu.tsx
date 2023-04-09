import { NavLink } from "react-router-dom";

interface MenuProps{
    isActive: boolean
    
}


const Menu:React.FC<MenuProps> = ({isActive}) => {
    return (
        <div className={isActive ? 'menu _active' : 'menu'}>
            <ul className="menu__list">
                <li className="menu__item item-active"><NavLink to="/fast-delivery/" className="menu__link">home</NavLink></li>
                <li className="menu__item"><NavLink to="/fast-delivery/about" className="menu__link">About</NavLink></li>
                <li className="menu__item"><NavLink to="/fast-delivery/tracking" className="menu__link">Tracking</NavLink></li>
                <li className="menu__item"><NavLink to="/fast-delivery/services" className="menu__link">Services</NavLink></li>
                <li className="menu__item"><NavLink to="/fast-delivery/gallery" className="menu__link">Gallery</NavLink></li>
                <li className="menu__item"><NavLink to="/fast-delivery/help" className="menu__link">Help</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu