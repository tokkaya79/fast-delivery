
import './style.scss';

interface TabItem3Props{
    isActive: boolean
}

const TabItem3 = (props: TabItem3Props) => {
const {isActive} = props

 

    return (
        <div className={`tab-item3 ${isActive ? '' : 'hidden'}`}>
            <div className="tab-item3__content">
                <ul>
                    <li><a href='/'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>
                    <li><a href='/'>2. Lorem ipsum dolor </a></li>
                    <li><a href='/'>3. Reprehenderit fugit labore mollitia pariatur corrupti </a></li>
                    <li><a href='/'>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. </a></li>
                    <li><a href='/'>5. Neque, minus molestias. </a></li>
                </ul>
            </div>
        </div>
    );
};

export default TabItem3;
