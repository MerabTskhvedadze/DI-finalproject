import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageDropdown } from '../LanguageDropdown';
import { TUser_Roles, useAccessContext } from 'context/AccessContext';

export const BottomNav = () => {
  const { currentRole } = useAccessContext();
  const { t } = useTranslation('main');

  return (
    <nav className=' bg-amazon-light_blue text-gray-300 flex items-center justify-between py-[5px] px-[10px]'>
      <div>
        <Link to='/' className=' mx-3 text-xs md:text-base hover:text-white'>
          {t('home')}
        </Link>
        <Link
          to='/products'
          className=' mx-3 text-xs md:text-base hover:text-white'
        >
          {t('products')}
        </Link>
        <Link
          to='/contact-us'
          className=' mx-3 text-xs md:text-base hover:text-white'
        >
          {t('contact')}
        </Link>
        {(currentRole === TUser_Roles.USER ||
          currentRole === TUser_Roles.ADMIN) && (
          <Link
            to='/settings'
            className=' mx-3 text-xs md:text-base hover:text-white'
          >
            {t('settings')}
          </Link>
        )}
        {currentRole === TUser_Roles.ADMIN && (
          <Link
            to='/admin-panel'
            className=' mx-3 text-xs md:text-base hover:text-white'
          >
            {t('admin')}
          </Link>
        )}
      </div>
      <LanguageDropdown />
    </nav>
  );
};
