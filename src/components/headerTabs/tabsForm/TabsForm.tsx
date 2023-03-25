import {useState} from 'react';

import TabItem from '../tabItem/TabItem';
import TabItem2 from '../tabItem2/TabItem2';
import TabItem3 from '../tabItem3/TabItem3';


const TabsForm = () => {

    const [activeTab, setActiveTab] = useState('Domestic')

    const handleActivTab = (tab: any)=>{
        setActiveTab(tab)
    }


    return (
        <div className="tabs-form">
            <div className="tabs-form__btn-box">
                <button className={activeTab === 'Domestic' ? 'tabs-form__btn active' : 'tabs-form__btn'} onClick={()=> {handleActivTab('Domestic')}}>Domestic</button>
                <button className={activeTab === 'International' ? 'tabs-form__btn active' : 'tabs-form__btn'} onClick={()=> handleActivTab('International')}>International</button>
                <button className={activeTab === 'Vehicles' ? 'tabs-form__btn active' : 'tabs-form__btn'} onClick={() => handleActivTab('Vehicles')} >Vehicles</button>
            </div>
            <TabItem isActive={activeTab === 'Domestic'}/>
            <TabItem2 isActive={activeTab === 'International'}/>
            <TabItem3 isActive={activeTab === 'Vehicles'}/>
        </div>
    );
};

export default TabsForm;
