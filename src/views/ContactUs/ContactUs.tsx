import { ContactForm } from './components/ContactForm';

export default function ContactUs() {
  return (
    <section className='bg-gray-900 h-[100vh]'>
      <div className='py-auto lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
