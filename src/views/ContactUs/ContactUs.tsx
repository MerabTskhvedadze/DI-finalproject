import { useTranslation } from 'react-i18next';
import { ContactUsForm } from './components/ContactUsForm';

export default function ContactUs() {
  const { t } = useTranslation('contact');

  return (
    <div className='max-w-[600px] mx-auto border border-gray-300 p-5 rounded-lg'>
      <h2 className='mb-6 text-4xl  tracking-tight font-extrabold text-center text-gray-700'>
        {t('contact')}
      </h2>
      <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl'>
        {t('message')}
      </p>
      <ContactUsForm />
    </div>
  );
}
