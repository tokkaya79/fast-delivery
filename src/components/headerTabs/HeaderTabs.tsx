import { useState } from 'react';

import TabsForm from './tabsForm/TabsForm';

import track from '../../assets/icons/track.jpg';
import moveDown from '../../assets/icons/moveDown.svg';
import RegisterModal from '../modals/registerModal/RegisterModal';
import LoginModal from '../modals/loginModal/LoginModal';

const HeaderTabs = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleShowRegisterModal = () => {
        setShowRegisterModal(true);
    };
    const handleCloseRegisterModal = () => {
        setShowRegisterModal(false);
    };
    const handleShowLoginModal = () => {
        setShowLoginModal(true);
    };
    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };

    return (
        <div className="header-tabs">
            <div className="header-tabs__login">
                <p className="header-tabs__text">
                    <button onClick={handleShowLoginModal}>Login</button> /{' '}
                    <button onClick={handleShowRegisterModal}>Register</button>
                </p>
                <RegisterModal
                    show={showRegisterModal}
                    handleClose={handleCloseRegisterModal}
                />
                 <LoginModal
                    show={showLoginModal}
                    handleClose={handleCloseLoginModal}
                />
            </div>
            <div className="header-tabs__tabs">
                <h3 className="header-tabs__title">
                    We Provide Best Courier & Parcel Service
                </h3>
                <TabsForm />
                <div className="header-tabs__content"></div>
            </div>
            <div className="header-tabs__move-down">
                <a href="#track-product">
                    <img
                        src={moveDown}
                        alt="moveDown"
                    />
                </a>
            </div>
            <div className="header-tabs__track">
                <span></span>
                <img
                    className="header-tabs__track-img"
                    src={track}
                    alt="track"
                />
                <div className="header-tabs__track-text--box">
                    <p className="header-tabs__track-text">Track Your Order</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderTabs;
