import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import TrackProduct from '../../components/trackProduct/TrackProduct';

interface TrackingPageProps{
    isActive: boolean    
}

const TrackingPage:React.FC<TrackingPageProps> = ({isActive}) => {
    return (
        <main className="tracking-page">
            <div className="tracking-page__inner">
                <HeaderMenu isActive={isActive}/>
                <TrackProduct />
            </div>
        </main>
    );
};

export default TrackingPage;
