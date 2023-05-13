import { Link } from 'react-router-dom';

type ButtonProps = {
  to?: string;
  onClick?: () => void;
  color?: 'yellow' | 'blue';
  className?: string;
  children: React.ReactNode;
};

export const Button = ({
  to,
  onClick,
  color = 'yellow',
  className = '',
  children,
}: ButtonProps) => {
  const defaultClasses =
    'flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  const colorClasses =
    color === 'yellow'
      ? 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500'
      : 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';

  const classes = `${defaultClasses} ${colorClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type='button' className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
