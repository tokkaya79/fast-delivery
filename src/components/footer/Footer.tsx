import LogoFooter from './logoFooter/LogoFooter';
import facebook from '../../assets/icons/fb.svg';
import twiter from '../../assets/icons/twit.svg';
import googl from '../../assets/icons/googl.svg';
import point from '../../assets/icons/point.svg';
import phone from '../../assets/icons/phone.svg';
import payment from '../../assets/icons/payment.jpg';


import './style.scss';

const Footer = () => {

    return (
        <section
            className="footer"
            id="footer"
        >
            <div className="container">
                <div className="footer__top">
                    <div className="footer__content">
                        <a href="/">
                            <LogoFooter />
                        </a>
                        <p className="text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley
                        </p>
                    </div>
                    <div className="footer__date">
                        <ul className="footer__list">
                            <li className="footer__item-title">ABOUT</li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Careers
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Corporate Information
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__item-title">HELP</li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Payments
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Shipping
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Report
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__item-title">POLICY</li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Terms Of Use
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Security
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__social">
                            <li className="footer__item-title--social">
                                Social
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    <img
                                        src={facebook}
                                        alt="facebook"
                                    />
                                </a>
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    <img
                                        src={googl}
                                        alt="googl"
                                    />
                                </a>
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    <img
                                        src={twiter}
                                        alt="twiter"
                                    />
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    Contact US
                                </a>
                            </li>
                            <li className="footer__item--point">
                                <a
                                    href="/"
                                    className="footer__link--point"
                                >
                                    <img
                                        src={point}
                                        alt="point"
                                    />
                                </a>
                                <a
                                    href="/"
                                    className="footer__link"
                                >
                                    <img
                                        src={phone}
                                        alt="phone"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__bottom-wraper">
                    <p className="footer__copyright-text">
                        © Copyright 2020, All rights reserved
                    </p>
                    <div className="footer__paymant">
                        <a
                            className="footer__link--help"
                            href="/"
                        >
                            {' '}
                            <span>?</span>
                            <p>Help Center</p>
                        </a>
                        <a
                            className="footer__link--payment"
                            href="/"
                        >
                            <img
                                src={payment}
                                alt="payment-icons"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
