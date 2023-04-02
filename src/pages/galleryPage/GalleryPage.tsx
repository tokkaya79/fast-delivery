import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import Gallery from '../../components/gallery/Gallery';

import { images } from '../../components/gallery/images';



const GalleryPage = () => {
    return (
        <main className='gallery-page'>
            <HeaderMenu />
            <Gallery images={images}/>
        </main>
    );
};

export default GalleryPage;