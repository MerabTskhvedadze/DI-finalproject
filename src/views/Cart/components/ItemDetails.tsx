type ItemDetailsProps = {
  title: string;
  price: number;
  quantity: number;
};

export const ItemDetails = ({ title, price, quantity }: ItemDetailsProps) => (
  <>
    <h1 className='text-2xl'>
      {title.length > 10 ? `${title.slice(0, 9)}...` : title}
    </h1>
    <h1 className='text-lg'>
      Price:
      <span className='text-blue-500 italic ml-1'>${price}</span>
    </h1>
    <h1 className='text-lg'>
      Total price:
      <span className='text-red-500 italic ml-1'>${price * quantity}</span>
    </h1>
    <h1 className='text-lg'>
      Quantity:
      <span className='text-red-500 italic ml-1'>{quantity}</span>
    </h1>
  </>
);
