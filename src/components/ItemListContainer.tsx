import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../firebase/firebase';
import { Item } from '../model/item';
import ItemList from './ItemList';
import Alert from './Alert';

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
            
              {
                items.length === 0 ? (
                  <tr><td><Alert message='Items not found'/></td></tr>
                ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <ItemList key={item.id} item={item} />
                    </td>
                  </tr>
                ))
              )}
          </tbody>
        </table>
      </div>
    </>
  );
}
