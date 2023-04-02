import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import OurServices from '../../components/ourServices/OurServices';

import { services } from '../../components/ourServices/serviceItem/dateServices';



const ServicePage = () => {
    return (
        <main className='service-page'>
            <HeaderMenu />
            <OurServices services={services}/>
        </main>
    );
};

export default ServicePage;