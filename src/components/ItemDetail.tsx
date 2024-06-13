import { Item } from '../model/item';

interface Props {
    item: Item;
}

export default function ItemDetail({ item } : Props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-1">
            <figure><img src={item.image} alt="item image"/></figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    )
};

