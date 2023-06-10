import { useContext } from 'react';
import { CartContext } from 'context/CartContext';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { Button } from 'antd';

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity, deleteItem } =
    useContext(CartContext);
  const { data, isError } = useQuery([id, 'cart'], async () => {
    const response = await axios.get(`https://dummyjson.com/product/${id}`);
    return response.data;
  });

  if (isError) {
    return (
      <h1 className='w-fit m-auto text-2xl text-red-500 my-10'>
        Oops! Something went wrong
      </h1>
    );
  }

  return (
    <div className='grid grid-cols-10 mx-10 border-t border-gray-100'>
      {/* thumbnail */}
      <Link to={`/products/product/${id}`} className='col-span-2'>
        <img src={data?.thumbnail} className='p-4 m-auto w-[200px] h-[130px]' />
      </Link>

      {/* details */}
      <div className='font-medium text-black col-span-6'>
        <Link to={`/products/product/${id}`}>{data?.title}</Link>
        <p className='text-sm'>
          by:
          <span className='text-blue-500 ml-1'>{data?.brand}</span>
        </p>
        <p>
          price: <span className='text-blue-500 ml-1'>${data?.price}</span>
        </p>
        <p className='max-w-[400px]'>
          about:
          <span className='text-gray-500 ml-1 font-normal'>
            {data?.description}
          </span>
        </p>
      </div>

      {/* actions */}
      <div className='col-span-2 flex flex-col gap-2'>
        <div className='flex gap-2 items-start pt-2'>
          <Button onClick={() => decreaseQuantity(id)} className='py-1 px-1'>
            <MinusCircleIcon className='h-5 text-blue-500' />
          </Button>
          <Button onClick={() => increaseQuantity(id)} className='py-1 px-1'>
            <PlusCircleIcon className='h-5 text-blue-500' />
          </Button>
          <Button onClick={() => deleteItem(id)} className='py-1 px-1'>
            <TrashIcon className='h-5 text-red-500' />
          </Button>
        </div>
        <div className='font-medium'>
          quantity: <span className='text-blue-500 ml-1'>{quantity}</span>
        </div>
        <div className='font-medium'>
          total:
          <span className='text-blue-500 ml-1'>${quantity * data?.price}</span>
        </div>
      </div>
    </div>
  );
};
