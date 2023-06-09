import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { TrashIcon } from '@heroicons/react/24/outline';

import { CartContext } from 'context/CartContext';
import { Button } from 'components/Button';
import { ImageThumbnail } from './ImageThumbnail';
import { ItemDetails } from './ItemDetails';

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { decreaseQuantity, increaseQuantity, deleteItem } =
    useContext(CartContext);

  const { data, error } = useQuery([id, 'cart'], async () => {
    const response = await axios.get(`https://dummyjson.com/product/${id}`);
    return response.data;
  });

  if (error) {
    return (
      <h1 className='text-red-700 text-center text-2xl'>
        Oops! something went wrong
      </h1>
    );
  }

  return (
    <div className='flex gap-5'>
      <ImageThumbnail src={data?.thumbnail} />
      <div className='flex justify-between items-start grow'>
        <div>
          <ItemDetails
            title={data?.title}
            price={data?.price}
            quantity={quantity}
          />
        </div>
        <div className='flex gap-2'>
          <Button
            onClick={() => decreaseQuantity(id)}
            className='bg-blue-500 hover:bg-blue-600'
          >
            -
          </Button>
          <Button
            onClick={() => deleteItem(id)}
            className='bg-red-500 hover:bg-red-700'
          >
            <TrashIcon className='h-5' />
          </Button>
          <Button
            onClick={() => increaseQuantity(id)}
            className='bg-blue-500 hover:bg-blue-600'
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
