import { useCart } from 'context/CartContext';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'components/Breadcrumb';

import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { CartButtons } from './components/CartButtons';
import { Image } from 'components/Image';
import { Empty } from 'antd';

export default function Cart() {
  const { t } = useTranslation('cart');
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeCartItem,
  } = useCart();

  const breadcrumbItems = [{ text: t('home'), url: '/' }, { text: t('cart') }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='px-5 lg:px-32 pt-5'>
        <div className='flex flex-col w-full py-5 px-10 bg-gray-200 rounded-lg divide-y divide-gray-300'>
          <div className='mb-5 font-medium text-gray-700 flex justify-between items-center'>
            <h1>
              {t('total')}: <span className='text-blue-500'>${totalPrice}</span>
            </h1>
            <CartButtons />
          </div>
          {cart.items.length === 0 ? (
            <div className='h-screen flex items-center justify-center'>
              <Empty description={t('empty')} />
            </div>
          ) : (
            cart.items.map(({ product, quantity }) => (
              <div key={product.id} className='flex justify-between py-2 '>
                <div className='flex items-start gap-2'>
                  <Image src={product.images[0]} width='100px' />
                  <div>
                    <h1 className='font-medium'>{product.title}</h1>
                    <h2 className='font-medium text-gray-500'>
                      {t('by')}: {product.brand}
                    </h2>
                    <p className='font-medium italic text-blue-500'>
                      ${product.price}
                    </p>
                  </div>
                </div>
                <div className='ml-5'>
                  <div className='flex items-start justify-end select-none divide-x divide-gray-300'>
                    <PlusCircleIcon
                      className='px-1 h-[25px] cursor-pointer  text-blue-400 hover:text-blue-500'
                      onClick={() => increaseQuantity(product.id)}
                    />
                    <MinusCircleIcon
                      onClick={() => decreaseQuantity(product.id)}
                      className='h-[25px] px-1 cursor-pointer text-blue-400 hover:text-blue-500'
                    />
                    <TrashIcon
                      onClick={() => removeCartItem(product.id)}
                      className='h-[25px] px-1 cursor-pointer text-blue-400 hover:text-blue-500'
                    />
                  </div>
                  <div className='mt-2 text-right font-medium'>
                    <p>
                      {t('quantity')}:
                      <span className='ml-2 text-blue-500 text-xl'>
                        {quantity}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
