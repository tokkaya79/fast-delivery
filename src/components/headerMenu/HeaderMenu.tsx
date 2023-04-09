import IconList from './iconList/IconList';
import Logo from './logo/Logo';
import Menu from './menu/Menu';


interface HeaderMenuProps{
    isActive: boolean    
}

const HeaderMenu:React.FC<HeaderMenuProps> = ({isActive}) => {
    return (
        <div className="header-menu">
            <Logo />
            <Menu isActive={isActive}/>
            <IconList />
        </div>
    );
};

export default HeaderMenu;
