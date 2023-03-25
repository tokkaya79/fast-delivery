import HowWorksItem from './howWorksItem/HowWorksItem';
import { IItem } from './howWorksItem/type';

import bgBlue from '../../assets/images/bg.webp';
import delivery from '../../assets/images/delivery.svg';

import './style.scss';

interface HowItWorksProps {
    items: IItem[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ items }) => {
    return (
        <section className="how-works">
            <div className="how-works__img-block">
                <img
                    className="how-works__img-bg"
                    src={bgBlue}
                    alt="bgBlue"
                />
                <img
                    className="how-works__img-up"
                    src={delivery}
                    alt="delivery"
                />
            </div>
            <div className="how-works__content-block">
                <h2 className="how-works__title title">
                    <span>How</span> it works?
                </h2>
                <h3 className="how-works__subtitle subtitle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </h3>
                <div className="how-works__items">
                    {items.map((item) => (
                        <HowWorksItem
                            key={item.id}
                            item={item}
                            backgroundColor={item.bgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
