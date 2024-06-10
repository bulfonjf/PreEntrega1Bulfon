import { useEffect, useState } from 'react';
import { getItems } from '../firebase/firebase';
import { Item } from '../model/item';
import ItemList from './ItemList';

interface Props {
  greeting: string;
}


export default function ItemListContainer({greeting}: Props) {

  const [items, setItems] = useState([] as Item[]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();

        setItems(items);
        
      } catch (error) {
        console.error('Error getting items', error)
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">{greeting}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-xl">
          <tbody>
            <tr>
            {items.map((item) => (
              <ItemList key={item.id} item={item} />
            ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
