import { NavLink } from "react-router-dom";

import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';

import { images } from '../../components/gallery/images';



const AllGalleryPage = () => {
    return (
        <main className="allgallery-page">
            <div className="gallery-page__inner">
                <Header/>
                <Gallery images={images} />
                <NavLink
                        className="allgallery__link"
                        to="/fast-delivery/gallery"
                    >
                        &lt; Go back
                </NavLink>
            </div>
        </main>
    );
};

export default AllGalleryPage;
