import ItemDetail from './ItemDetail';
import Alert from './Alert';
import { Item } from '../model/item';
import { getItemById } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [item, setItem] = useState({} as Item);

    const {id: itemId} = useParams();

    useEffect(() => {
        const fetchItem = async () => {
          try {
            console.log(`itemId: `, itemId)
            const item = await getItemById(itemId || '');
    
            setItem(item);
            
          } catch (error) {
            console.error('Error getting item id ' + itemId, error);
          }
        };
    
        fetchItem();
      }, [itemId]);

    return (
        <div>
            {itemId || item.id ? (
              <ItemDetail item={item} />
            ) : (
              <Alert message='Item not found'/>
            )}
        </div>
    );
};