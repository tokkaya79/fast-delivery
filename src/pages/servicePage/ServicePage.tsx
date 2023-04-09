import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import OurServices from '../../components/ourServices/OurServices';

import { services } from '../../components/ourServices/serviceItem/dateServices';

interface ServicePageProps{
    isActive: boolean    
}

const ServicePage:React.FC<ServicePageProps> = ({isActive})  => {
    return (
        <main className="service-page">
            <div className="service-page__inner">
                <HeaderMenu isActive={isActive}/>
                <OurServices services={services} />
            </div>
        </main>
    );
};

export default ServicePage;
