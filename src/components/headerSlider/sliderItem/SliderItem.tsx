import { ISlide } from '../dataSlider/type';


interface SliderItemProps {
    slide: ISlide,
    isActive: boolean,
}

const SliderItem: React.FC<SliderItemProps> = ({ slide, isActive }) => {
    return (
        <div className={`slider-item ${isActive ? 'active' : ''}`}>
            <img
                src={slide.img}
                alt={slide.name}
            />
        </div>
    );
};

export default SliderItem;
