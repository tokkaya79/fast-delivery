import ServiceItem from './serviceItem/ServiceItem';
import { IService } from './serviceItem/type';

import './style.scss';

interface OurServicesProps {
    services: IService[];
}

const OurServices: React.FC<OurServicesProps> = ({ services }) => {
    return (
        <section className="our-services">
            <div className="container">
                <div className="our-services__inner">
                    <h2 className="our-services__title title">
                        <span>Our</span> Services
                    </h2>
                    <h3 className="our-services__subtitle subtitle">
                        Lorem Ipsum is simply dummy text{' '}
                    </h3>
                    <p className="our-services__text text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                    </p>
                    <div className="our-services__wrapper">
                        {services.map((service) => (
                            <ServiceItem
                                key={service.id}
                                service={service}
                                backgroundColor={service.bgColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
