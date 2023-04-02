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
        modal.classList.add('modal');
        modal.innerHTML = `<div className="modal__content">
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
                    <a
                        className="gallery__link"
                        href="/"
                    >
                        View All Gallery
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
