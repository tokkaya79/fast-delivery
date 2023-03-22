import { useState } from 'react';

import TabItem from '../tabItem/TabItem';

import './style.scss';

const TabsForm = () => {
    return (
        <div className="tabs-form">
            <div className="tabs-form__btn-box">
                <button className="tabs-form__btn active">Domestic</button>
                <button className="tabs-form__btn">International</button>
                <button className="tabs-form__btn">Vehicles</button>
            </div>
            <TabItem />
        </div>
    );
};

export default TabsForm;
