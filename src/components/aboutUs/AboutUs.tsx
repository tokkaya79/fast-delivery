import AdvanItem from './advanItem/AdvanItem';
import { IAdvan } from './advanItem/type';

import aboutUs01 from '../../assets/images/aboutUs01.jpg';
import aboutUs02 from '../../assets/images/aboutUs02.jpg';
import aboutUs03 from '../../assets/images/aboutUs03.jpg';

import './style.scss';

interface AboutUsProps {
    advans: IAdvan[];
}

const AboutUs: React.FC<AboutUsProps> = ({ advans }) => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="about-us__inner">
                    <h1 className="about-us__title title">
                        <span>ABOUT</span> US
                    </h1>
                    <h3 className="about-us__subtitle subtitle">
                        Lorem Ipsum is simply dummy text
                    </h3>
                    <div className="about-us__wrapper">
                        <div className="about-us__imgs-block">
                            <div className="about-us__img-box about-us__img-box--01">
                                <img
                                    src={aboutUs01}
                                    alt="aboutUsImg01"
                                />
                            </div>
                            <div className="about-us__img-box about-us__img-box--02">
                                <img
                                    src={aboutUs02}
                                    alt="aboutUsImg02"
                                />
                            </div>
                            <div className="about-us__img-box about-us__img-box--03">
                                <img
                                    src={aboutUs03}
                                    alt="aboutUsImg03"
                                />
                            </div>
                        </div>
                        <div className="about-us__content-block">
                            <p className="about-us__text">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <div className="about-us__advan-items">
                                {advans.map((advan) => (
                                    <AdvanItem
                                        key={advan.id}
                                        advan={advan}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
