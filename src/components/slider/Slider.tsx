import { useState } from 'react';

import { IFoto } from './type';

import './style.scss';

interface SliderProps {
    fotos: IFoto[];
}

const Slider: React.FC<SliderProps> = ({ fotos }) => {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    const handlePrevClick = () => {
        const prevIndex =
            activeIndex === 0 ? fotos.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
    };

    const handleNextClick = () => {
        const nextIndex =
            activeIndex === fotos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const isLastElement = activeIndex === fotos.length - 1;
    const isNullElement = activeIndex === 0;

    return (
        <section className="slider">
            <div className="container">
                <div className="slider__wrapper">
                    <div className="slider__fotos-block">
                        {fotos.map((foto, index) => (
                            <div
                                className={
                                    index === activeIndex
                                        ? 'slider__inner active'
                                        : 'slider__inner'
                                }
                            >
                                <div
                                    className={
                                        index === activeIndex
                                            ? 'slider__foto-box active'
                                            : 'slider__foto-box'
                                    }
                                >
                                    <img
                                        key={index}
                                        src={foto.foto}
                                        alt={foto.alt}
                                        className={
                                            index === activeIndex
                                                ? 'slider__foto active'
                                                : 'slider__foto'
                                        }
                                        onClick={() => handleClick(index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="slider__content-block">
                        <p className="slider__text">
                            {fotos[activeIndex].content}
                        </p>
                        <h3 className="slider__name">
                            {fotos[activeIndex].name}
                        </h3>
                    </div>

                    <div className="slider__btns">
                        <button
                            className={`slider__btn-prev ${
                                isNullElement ? 'disabled' : ''
                            } `}
                            onClick={handlePrevClick}
                            disabled={isNullElement}
                        >
                            &#60;
                        </button>
                        <button
                            className={`slider__btn-next ${
                                isLastElement ? 'disabled' : ''
                            } `}
                            onClick={handleNextClick}
                            disabled={isLastElement}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
