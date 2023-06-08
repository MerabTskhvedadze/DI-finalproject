import { useContext } from 'react';
import { CartContext } from 'context/CartContext';
import { Button } from 'components/Button';

type ProductActionsProps = {
  price: string;
  stock: number;
  id: number;
};

export const ProductActions = ({ price, stock, id }: ProductActionsProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className='text-xl xl:text-2xl font-semibold text-red-500 text-right'>
        ${price}
      </div>
      <div className='text-sm xl:text-base mb-1 text-green-800 mt-3'>
        In stock: {stock}
      </div>
      <Button
        className='w-full mt-3'
        onClick={() =>
          addToCart({
            id,
            quantity: 0,
          })
        }
      >
        Add to cart
      </Button>
    </>
  );
};
