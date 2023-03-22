import facebook from '../../../assets/icons/facebook.jpg';
import googl from '../../../assets/icons/googl.jpg';
import twiter from '../../../assets/icons/twiter.jpg';

import './style.scss';


const IconList = () => {
    return (
        <div className="icon-list">
            <ul className="icon-list__list">
                <li className="icon-list__item"><a href="/" className="icon-list-link"><img src={facebook} alt="facebook" /></a></li>
                <li className="icon-list__item"><a href="/" className="icon-list-link"><img src={googl} alt="googl" /></a></li>
                <li className="icon-list__item"><a href="/" className="icon-list-link"><img src={twiter} alt="twiter" /></a></li>
            </ul>
        </div>
    )
}

export default IconList