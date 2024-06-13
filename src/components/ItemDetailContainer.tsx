import ItemDetail from './ItemDetail';
import Alert from './Alert';
import { Item } from '../model/item';
import { getItemById } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

export default function ItemDetailContainer() {

    const [item, setItem] = useState({} as Item);
    const [isLoading, setIsLoading] = useState(true);
    const {id: itemId} = useParams();

    useEffect(() => {
        const fetchItem = async () => {
          try {
            await getItemById(itemId || '').then(
              (item) => {
                setIsLoading(false);
                setItem(item);
                return item;
              }
            );
          } catch (error) {
            console.error('Error getting item id ' + itemId, error);
          }
        };
    
        fetchItem();
      }, [itemId]);

    return (
        <div>
          {isLoading ? ( 
            <div className="container flex justify-center items-center">
              <ReactLoading type={'spin'} color={'black'} /> 
            </div>
          ) : (
            itemId || item.id ? (
            <ItemDetail item={item} />
          ) : (
            <Alert message='Item not found'/>
          ))
          }
        </div>
    );
};