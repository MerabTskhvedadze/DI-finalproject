import { useCart } from 'context/CartContext';

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeCartItem } =
    useCart();

  if (cart.items.length === 0) {
    return (
      <h1 className='text-center text-3xl text-red-500 italic mt-[30%]'>
        Cart is empty!
      </h1>
    );
  }

  return (
    <div>
      {cart.items.map(({ product, quantity }) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>Quantity: {quantity}</p>
          <button onClick={() => increaseQuantity(product.id)}>+</button>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <button onClick={() => removeCartItem(product.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
