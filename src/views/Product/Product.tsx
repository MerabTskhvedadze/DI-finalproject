import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { animateScroll } from 'react-scroll/modules';
import { public_axios } from 'utils/public_axios';

import { useCart } from 'context/CartContext';
import { Breadcrumb } from 'components/Breadcrumb';
import { Button } from 'components/Button';
import { ErrorModal } from 'components/ErrorModal';
import { ProductPreview, ProductDetails, Suggestions } from './components';

export default function Product() {
  const { t } = useTranslation('product');
  const { addToCart } = useCart();
  const { id } = useParams();

  const { data, isError } = useQuery([id, 'product'], async () => {
    const response = await public_axios.get(`/product/${id}`);
    return response.data;
  });

  const addToCartHandler = () => {
    addToCart(data, 1);
  };

  const breadcrumbItems = [
    { text: t('home'), url: '/' },
    { text: t('products'), url: '/products' },
    { text: `${data?.title}` },
  ];

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuart',
    });
  }, [id]);

  if (isError) {
    return <ErrorModal />;
  }
  return (
    <div className='min-h-screen'>
      <Breadcrumb items={breadcrumbItems} />
      <div className='grid grid-cols-8 gap-2 p-10 sm:p-4'>
        <div className='col-span-8 lg:col-span-3 rounded bg-white py-4 w-full'>
          <ProductPreview images={data?.images ?? []} />
        </div>
        <div className='flex flex-col justify-between col-span-8 lg:col-span-5 p-10 sm:p-4 bg-white rounded'>
          <ProductDetails
            title={data?.title}
            brand={data?.brand}
            description={data?.description}
            rating={Math.floor(Math.random() * 5) + 1}
            price={data?.price}
          />
          <Button className='w-1/5 mx-auto' onClick={addToCartHandler}>
            {t('addToCart')}
          </Button>
        </div>
      </div>
      <div>
        <h1 className='text-2xl mx-3 my-2 font-medium'>{t('related')}</h1>
        <Suggestions brand={data?.brand} />
      </div>
    </div>
  );
}
