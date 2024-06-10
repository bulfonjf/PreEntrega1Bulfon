import { Item } from '../model/item';

interface Props {
    item: Item;
}

export default function ItemDetail({ item } : Props) {
    return (
        <div>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
};

