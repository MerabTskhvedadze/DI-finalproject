import React from 'react';

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
              className={`breadcrumb-item ${
                index === items.length - 1 ? 'active' : ''
              }`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {index === items.length - 1 ? (
                item.text
              ) : (
                <a href={item.url}>{item.text}</a>
              )}
            </li>
            {index !== items.length - 1 && (
              <li className='breadcrumb-separator'>/</li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
