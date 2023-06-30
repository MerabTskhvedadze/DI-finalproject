import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type AuthProps = {
  authorized: boolean;
  logout: () => void;
};

export const Auth = ({ logout, authorized }: AuthProps) => {
  const { t } = useTranslation('main');

  return (
    <div className='mx-2 flex flex-col font-bold text-amazon-yellow'>
      {authorized ? (
        <span className=' cursor-pointer' onClick={logout}>
          {t('logout')}
        </span>
      ) : (
        <>
          <Link to={'/login'}>{t('login')}</Link>
          <Link to={'/register'}>{t('register')}</Link>
        </>
      )}
    </div>
  );
};
