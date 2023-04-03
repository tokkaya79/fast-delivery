import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import TrackProduct from '../../components/trackProduct/TrackProduct';

const TrackingPage = () => {
    return (
        <main className="tracking-page">
            <div className="tracking-page__inner">
                <HeaderMenu />
                <TrackProduct />
            </div>
        </main>
    );
};

export default TrackingPage;
