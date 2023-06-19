import { useTranslation } from 'react-i18next';
import { UserDetails } from './components/UserDetails';
import { ChangeDetails } from './components/ChangeDetails';
import { useState } from 'react';

export default function Settings() {
  const { t } = useTranslation('settings');
  const [currentStep, setCurrentStep] = useState<
    'userDetails' | 'changeDetails'
  >('userDetails');

  return (
    <div className='max-w-[400px] mx-auto'>
      <div className='flex gap-5 mb-3'>
        <h1
          onClick={() => setCurrentStep('userDetails')}
          className='text-blue-500 hover:text-blue-700 cursor-pointer'
        >
          {t('details')}
        </h1>
        <h1
          onClick={() => setCurrentStep('changeDetails')}
          className='text-blue-500 hover:text-blue-700 cursor-pointer'
        >
          {t('changeDetails')}
        </h1>
      </div>
      {currentStep === 'userDetails' ? <UserDetails /> : <ChangeDetails />}
    </div>
  );
}
