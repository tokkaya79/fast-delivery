import courier from "../../../assets/icons/courier.svg";
import parcel from "../../../assets/icons/parcel.svg";

import './style.scss';



const TabItem = () => {
    return (
        <div className='tab-item'>
            <div className="tab-item__boxes">
            <button className="tab-item__box-left">
                <img src={courier} alt="img-courier" />
                <p className="tab-item__name">Courier</p>
            </button>
            <button className="tab-item__box-right">
                <img src={parcel} alt="img-parcel" />
                <p className="tab-item__name">Parcel</p>
            </button>
            </div>
            <form className="tab-item__form">
                <p className="tab-item__your-pin">Your Pincode</p>
                <input className="tab-item__input" type="text" placeholder="Enter your pincode here"/>
                <button className="tab-item__btn-submit" type="submit">Get a Quote Now</button>
            </form>
        
        </div>
    )
}

export default TabItem