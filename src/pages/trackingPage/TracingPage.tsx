import Header from '../../components/header/Header';
import TrackProduct from '../../components/trackProduct/TrackProduct';

const TrackingPage = () => {
    return (
        <main className="tracking-page">
            <div className="tracking-page__inner">
                <Header/>
                <TrackProduct />
            </div>
        </main>
    );
};

export default TrackingPage;
