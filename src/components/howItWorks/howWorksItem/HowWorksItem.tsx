import { IItem } from './type';

interface HowWorksItemProps {
    item: IItem;
    backgroundColor: string;
}

const HowWorksItem: React.FC<HowWorksItemProps> = ({
    item,
    backgroundColor,
}) => {
    return (
        <div
            className="how-works__item"
            style={{ backgroundColor }}
        >
            <span className="how-works__item--span">0{item.id}</span>
            <h4 className="how-works__item--title">{item.title}</h4>
            <p className="how-works__item--text">{item.text}</p>
        </div>
    );
};

export default HowWorksItem;
