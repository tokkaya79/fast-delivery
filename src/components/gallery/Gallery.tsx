import { NavLink } from "react-router-dom";

import './style.scss';

interface Image {
    url: string;
    ilt: string;
}

interface GalleryProps {
    images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const handleImgClick = (url: string) => {
        const modal = document.createElement('div');
        modal.classList.add('modal-gallery');
        modal.innerHTML = `<div className="modal-gallery__content">
        <img src='${url}' alt='modalFoto'></img></div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => {
            modal.remove();
        });
    };

    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__wrapper">
                    <h2 className="gallery__title title">
                        <span>Gallery</span>
                    </h2>
                    <h3 className="gallery__subtitle subtitle">
                        Lorem Ipsum is simply dummy text.
                    </h3>
                    <div className="gallery__imgs-block">
                        {images.map((img, index) => (
                            <div className="gallery__img-box">
                                <img
                                    key={index}
                                    src={img.url}
                                    alt={img.ilt}
                                    onClick={() => handleImgClick(img.url)}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <NavLink
                        className="gallery__link"
                        to="/fast-delivery/all-gallery"
                    >
                        View All Gallery
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
