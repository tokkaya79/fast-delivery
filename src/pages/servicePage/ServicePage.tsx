import Header from '../../components/header/Header';
import OurServices from '../../components/ourServices/OurServices';

import { services } from '../../components/ourServices/serviceItem/dateServices';



const ServicePage = ()  => {
    return (
        <main className="service-page">
            <div className="service-page__inner">
                <Header />
                <OurServices services={services} />
            </div>
        </main>
    );
};

export default ServicePage;
