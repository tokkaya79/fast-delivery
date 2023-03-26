import './style.scss';

interface Image {
    url: string;
    ilt: string;
}

interface GalleryProps {
    images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <section className="gallery">
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
        </section>
    );
};

export default Gallery;
