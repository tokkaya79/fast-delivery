import { useState } from 'react';

import { ISlide } from './dataSlider/type';
import SliderItem from './sliderItem/SliderItem';

import arrowNext from '../../assets/icons/arrowNext.svg';
import arrowPrev from '../../assets/icons/arrowPrev.svg';

import './style.scss';

interface HeaderSliderProps{

    slides: ISlide[]
}

const HeaderSlider: React.FC<HeaderSliderProps> = ({slides}) => {
    
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(nextIndex);
  };

    return (
        <div className="header-slider">
            <div className="header-slider__content">
                {slides.map((slide, index) => (
                    <SliderItem
                        key={slide.id}
                        slide={slide}
                        isActive={index === currentSlideIndex}
                        
                    />
                ))}
            </div>
            <div className="header-slider__btns">
                <button
                    className="header-slider__btn-prev"
                    onClick={handlePrevClick} 
                >
                    <img src={arrowPrev} alt="arrowPrev" />
                </button>
                <button
                    className="header-slider__btn-next"
                    onClick={handleNextClick}
                >
                    <img src={arrowNext} alt="arrowPrev" />
                </button>
            </div>
        </div>
    );
};

export default HeaderSlider;
