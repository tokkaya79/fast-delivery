import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import Gallery from '../../components/gallery/Gallery';

import { images } from '../../components/gallery/images';

interface GalleryPageProps{
    isActive: boolean    
}

const GalleryPage:React.FC<GalleryPageProps> = ({isActive}) => {
    return (
        <main className="gallery-page">
            <div className="gallery-page__inner">
                <HeaderMenu isActive={isActive}/>
                <Gallery images={images} />
            </div>
        </main>
    );
};

export default GalleryPage;
