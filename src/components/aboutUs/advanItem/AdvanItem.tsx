import { IAdvan } from './type';

import arrowDown from '../../../assets/icons/arrowDown.svg'


interface AdvanItemProps {
    advan: IAdvan
}


const AdvanItem: React.FC<AdvanItemProps> = ({advan}) => {
    return (
        <div className="advan-item">
            <img className='advan-item__icon'
                src={advan.img}
                alt={advan.title}
            />
            <img className='advan-item__arrow' src={arrowDown} alt="arrowDown" />
            <h4 className='advan-item__subtitle'>{advan.title}</h4>
            <p className='advan-item__text'>{advan.text}</p>
        </div>
    );
};

export default AdvanItem;
