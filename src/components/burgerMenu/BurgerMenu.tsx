import './style.scss';

interface BurgerMenuProps{
    isActive: boolean,
    handleClick: any
}

const BurgerMenu:React.FC<BurgerMenuProps> = ({isActive, handleClick}) => {

    return (
        <div className={isActive ? 'burger-menu _active' : 'burger-menu'} onClick={handleClick}><span></span></div>
    );
};

// const BurgerMenu = ({isActive, handleClick}) => {
// 
//     return (
//         <div className={isActive ? 'burger-menu _active' : 'burger-menu'} onClick={handleClick}>
//             <span></span>
//         </div>
//     );
// };

export default BurgerMenu;