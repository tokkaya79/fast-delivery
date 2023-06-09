import './style.scss';

const TrackProduct = () => {
    return (
        <section
            className="track-product"
            
        >
            <div className="container">
                <div className="track-product__inner">
                    <form className="track-product__form">
                        <h3 className="track-product__title">
                            TRACK YOUR PRODUCT
                        </h3>
                        <input
                            className="track-product__input"
                            type="text"
                            placeholder="Enter your Order ID Here..."
                        />
                        <button className="track-product__btn">Track</button>
                        <p className="track-product__text">
                            Now you can track your Order easily
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TrackProduct;
