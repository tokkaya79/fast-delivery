import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';

import { images } from '../../components/gallery/images';



const GalleryPage = () => {
    return (
        <main className="gallery-page">
            <div className="gallery-page__inner">
                <Header/>
                <Gallery images={images} />
            </div>
        </main>
    );
};

export default GalleryPage;
