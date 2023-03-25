import { useState, useRef } from 'react';

import courier from '../../../assets/icons/courier.svg';


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
                
            </div>
            <form className="tab-item__form">
                <p className="tab-item__your-pin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quam, provident debitis delectus unde numquam! Eos, accusantium asperiores? Repellat expedita maiores ea. Harum iusto praesentium voluptates! Totam fugiat dicta quibusdam!</p>
               
            </form>
        </div>
    );
};

export default TabItem2;
