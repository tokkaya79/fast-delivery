import HeaderMenu from '../../components/headerMenu/HeaderMenu';
import HelpForm from '../../components/helpForm/HelpForm';

const HelpPage = () => {
    return (
        <main className="help-page">
            <div className="help-page__inner">
                <HeaderMenu />
                <HelpForm />
            </div>
        </main>
    );
};

export default HelpPage;
