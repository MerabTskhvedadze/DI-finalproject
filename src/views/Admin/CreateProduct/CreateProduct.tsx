import axios from 'axios';
import { TLocalStorage } from 'types/localstorage';

export default function CreateProduct() {
  const createProduct = async () => {
    try {
      const url = 'http://localhost:8080/product';
      const token = localStorage.getItem(TLocalStorage.ACCESSTOKEN);

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const payload = {
        title: 'New Title',
        description: 'New Description',
        images: ['https://example.com/test.png'],
        brand: 'New Brand',
        category: 'New Category',
        price: '123.45',
        amount: '1',
      };

      const response = await axios.post(url, payload, { headers });
      console.log('Product created:', response.data);
    } catch (error: any) {
      console.error('Error creating product:', error?.response.data);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log('posted');
          createProduct();
        }}
      >
        post data
      </button>
    </div>
  );
}
