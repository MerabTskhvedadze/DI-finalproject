import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  text: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label='breadcrumb' className='my-1 ml-4'>
      <ol className='flex text-lg text-blue-600 gap-1'>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className={`${
                index === items.length - 1 ? 'italic text-blue-400' : ''
              }`}
            >
              {index === items.length - 1 ? (
                item.text
              ) : (
                <Link to={`${item.url}`}>{item.text}</Link>
              )}
            </li>
            {index !== items.length - 1 && (
              <li className='font-semibold text-gray-500'>/</li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
