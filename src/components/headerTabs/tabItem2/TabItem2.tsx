import { useState, useRef } from 'react';

import courier from '../../../assets/icons/courier.svg';
import parcel from '../../../assets/icons/parcel.svg';

import './style.scss';

interface TabItem2Props {
    isActive: boolean;
}

const TabItem2 = (props: TabItem2Props) => {
    const { isActive } = props;
    const activeBtnLeftRef = useRef(true);
    const activeBtnRightRef = useRef(false);

    function handleBtnClickLeft() {
        activeBtnLeftRef.current = !activeBtnLeftRef.current;
        activeBtnRightRef.current = !activeBtnLeftRef.current;
        forceUpdate();
    }

    function handleBtnClickRight() {
        activeBtnRightRef.current = !activeBtnRightRef.current;
        activeBtnLeftRef.current = !activeBtnRightRef.current;
        forceUpdate();
    }

    const [, setTick] = useState(0);
    const forceUpdate = () => {
        setTick((tick) => tick + 1);
    };

    return (
        <div className={`tab-item2 ${isActive ? '' : 'hidden'}`}>
            <div className="tab-item__boxes">
                <button
                    className={`tab-item2__box-left btn ${
                        activeBtnLeftRef.current ? 'active' : ''
                    }`}
                    onClick={handleBtnClickLeft}
                >
                    <img
                        src={courier}
                        alt="img-courier"
                    />
                    <p className="tab-item__name">Courier</p>
                </button>
                <button
                    className={`tab-item2__box-right btn ${
                        activeBtnRightRef.current ? 'active' : ''
                    }`}
                    onClick={handleBtnClickRight}
                >
                    <img
                        src={parcel}
                        alt="img-parcel"
                    />
                    <p className="tab-item__name">Parcel</p>
                </button>
            </div>
            <form className="tab-item__form">
                <p className="tab-item__your-pin">Your Pincode</p>
                <input
                    className="tab-item__input"
                    type="text"
                    placeholder="Enter your pincode here"
                />
                <button
                    className="tab-item__btn-submit"
                    type="submit"
                >
                    Get a Quote Now
                </button>
            </form>
        </div>
    );
};

export default TabItem2;
