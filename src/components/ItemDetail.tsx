import { Item } from '../model/item';
import ItemCard from './ItemCard';

interface Props {
    item: Item;
}

export default function ItemDetail({ item } : Props) {
    return (
        <div>
            <ItemCard key={item.id} item={item} />
        </div>
    );
};

