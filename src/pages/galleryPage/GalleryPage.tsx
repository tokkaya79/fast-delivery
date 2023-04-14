import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';

import { images } from '../../components/gallery/images';

const GalleryPage = () => {

    const imagesToDisplay = images.slice(0, 5);
  


    return (
        <main className="gallery-page">
            <div className="gallery-page__inner">
                <Header />
                <Gallery images={imagesToDisplay} />
            </div>
        </main>
    );
};

export default GalleryPage;
