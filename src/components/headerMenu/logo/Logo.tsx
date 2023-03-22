import logo from '../../../assets/icons/logo.svg';

import './style.scss';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Logo