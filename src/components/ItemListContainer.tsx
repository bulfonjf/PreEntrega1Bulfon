import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getItems } from '../firebase/firebase';
import { Item } from '../model/item';
import ItemCard from './ItemCard';

interface Props {
  greeting: string;
}


export default function ItemListContainer({greeting}: Props) {

  const [items, setItems] = useState([] as Item[]);
  const {category} = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems(category || 'all');

        setItems(items);
        
      } catch (error) {
        console.error('Error getting items', error)
      }
    };

    fetchItems();
  }, [category]);

  return (
    <>
      <h1 className="text-3xl">{greeting}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-xl">
          <tbody>
            <tr>
            {items.map((item) => (
              <Link to={`/item/${item.id}`}>
                <ItemCard key={item.id} item={item} />
              </Link>
            ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
