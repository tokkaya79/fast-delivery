import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import HelpForm from '../../components/helpForm/HelpForm';


interface HelpPageProps{
    isActive: boolean    
}


const HelpPage:React.FC<HelpPageProps> = ({isActive}) => {
    return (
        <main className="help-page">
            <div className="help-page__inner">
                <HeaderMenu isActive={isActive}/>
                <HelpForm />
            </div>
        </main>
    );
};

export default HelpPage;
