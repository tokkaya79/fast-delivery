import Header from '../../components/header/Header';
import HelpForm from '../../components/helpForm/HelpForm';


const HelpPage = () => {
    return (
        <main className="help-page">
            <div className="help-page__inner">
                <Header/>
                <HelpForm />
            </div>
        </main>
    );
};

export default HelpPage;
