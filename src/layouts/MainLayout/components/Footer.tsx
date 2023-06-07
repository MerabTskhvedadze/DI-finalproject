export const Footer = () => {
  const footerLinks = [
    {
      heading: 'Get to Know Us',
      links: [
        { text: 'Careers', href: '#' },
        { text: 'About Amazon', href: '#' },
        { text: 'Investor Relations', href: '#' },
      ],
    },
    {
      heading: 'Make Money with Us',
      links: [
        { text: 'Sell products on Amazon', href: '#' },
        { text: 'Sell apps on Amazon', href: '#' },
        { text: 'Become an Affiliate', href: '#' },
      ],
    },
    {
      heading: 'Amazon Payment Products',
      links: [
        { text: 'Amazon Business Card', href: '#' },
        { text: 'Shop with Points', href: '#' },
        { text: 'Reload Your Balance', href: '#' },
      ],
    },
  ];

  return (
    <footer className='bg-amazon py-12 mt-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-3 gap-8'>
          {footerLinks.map((linkGroup) => (
            <div key={linkGroup.heading} className='mb-8'>
              <h3 className='text-lg text-gray-500 font-medium mb-4'>
                {linkGroup.heading}
              </h3>
              <ul>
                {linkGroup.links.map((link) => (
                  <li key={link.text} className='mb-2'>
                    <a
                      href={link.href}
                      className='text-gray-400 hover:text-white'
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='text-center mt-8 text-gray-600'>
          &copy; 2023 Amazon clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
