

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item item-active"><a href="/" className="menu__link">home</a></li>
                <li className="menu__item"><a href="/" className="menu__link">About</a></li>
                <li className="menu__item"><a href="/" className="menu__link">Tracking</a></li>
                <li className="menu__item"><a href="/" className="menu__link">Pricing</a></li>
                <li className="menu__item"><a href="/" className="menu__link">Contact</a></li>
                <li className="menu__item"><a href="/" className="menu__link">Help</a></li>
            </ul>
        </div>
    )
}

export default Menu