import './style.scss';
import { IService } from './type';

interface ServiceItemProps {
    service: IService;
    backgroundColor: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
    service,
    backgroundColor,
}) => {
    return (
        <div className="service-item">
            <div
                className="service-item__box-icon"
                style={{ backgroundColor }}
            >
                <img
                    src={service.icon}
                    alt="iconServices"
                />
            </div>
            <div className="service-item__box-content">
                <h4 className="service-item__title">{service.title}</h4>
                <p className="service-item__text">{service.content}</p>
            </div>
        </div>
    );
};

export default ServiceItem;
