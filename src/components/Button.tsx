import { Link } from 'react-router-dom';

type ButtonProps = {
  to?: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export const Button = ({
  to,
  type,
  onClick,
  className = '',
  children,
}: ButtonProps) => {
  const classes = `${className} text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
