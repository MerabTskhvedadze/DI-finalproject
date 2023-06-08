import axios from 'axios';
import { Button } from 'components/Button';
import { useQuery } from 'react-query';

type CartItemProps = {
  id: number;
  quantity: number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
};

export const CartItem = ({
  id,
  quantity,
  increaseCartQuantity,
  decreaseCartQuantity,
}: CartItemProps) => {
  const { data, error } = useQuery([id, 'cart'], async () => {
    const response = await axios.get(`https://dummyjson.com/product/${id}`);
    return response.data;
  });

  if (error) {
    return <h1>Oops! something went wrong</h1>;
  }

  return (
    <div className='flex gap-5'>
      <div className='w-[150px] h-[100px]'>
        <img
          src={data.thumbnail}
          className='w-full h-full rounded'
          alt='Product'
        />
      </div>
      <div>
        <h1>{data?.title}</h1>
        <div className='flex gap-2'>
          <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
          <h1 className='bg-amazon-yellow text-sm font-bold py-2 px-4 rounded-lg'>
            {quantity}
          </h1>
          <Button onClick={() => increaseCartQuantity(id)}>+</Button>
        </div>
      </div>
    </div>
  );
};
