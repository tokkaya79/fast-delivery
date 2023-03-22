import track from '../../assets/icons/track.jpg';


import './style.scss';

const HeaderTabs = () => {

    return (
        <div className="header-tabs">
            <div className="header-tabs__login">
                <p className="header-tabs__text"><a href="/">Login</a> / <a href="/">Register</a></p>
            </div>
            <div className="header-tabs__tabs">
                <h3 className="header-tabs__title">
                    We Provide Best Courier & Parcel Service
                </h3>
                <div className="header-tabs__content"></div>
            </div>
            <div className="header-tabs__track">
                <span></span>
                <img className="header-tabs__track-img" src={track} alt="track" />
                <div className="header-tabs__track-text--box"><p className="header-tabs__track-text">Track Your Order</p></div> 
            </div>
        </div>
    );
};

export default HeaderTabs;
