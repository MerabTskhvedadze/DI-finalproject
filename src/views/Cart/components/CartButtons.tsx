import { TAuthorizationStage, useAuth } from 'context/AuthContext';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { message } from 'antd';

export const CartButtons = () => {
  const { t } = useTranslation('cart');
  const { status } = useAuth();

  if (status === TAuthorizationStage.UNAUTHORIZED) {
    return (
      <Button onClick={() => message.warning(t('payment'))}>
        {t('checkout')}
      </Button>
    );
  }
  return <Button to='/checkout'>{t('checkout')}</Button>;
};
