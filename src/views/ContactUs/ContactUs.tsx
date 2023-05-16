import { ModalComponent } from 'components/ModalComponent';
import { ContactUsForm } from './components/ContactUsForm';

export default function ContactUs() {
  return (
    <>
      <h2 className='mb-6 text-4xl  tracking-tight font-extrabold text-center text-gray-700'>
        Contact Us
      </h2>
      <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl'>
        Have a question or need help? Let us know! Our team is always happy to
        assist you. Fill out the form below with your email and message, and
        we'll get back to you as soon as possible
      </p>
      <ModalComponent
        message='Thank you for reaching out! Your form has been successfully submitted. We will get back to you shortly.'
        title='Form Submitted Successfully'
      />
      <ContactUsForm />
    </>
  );
}
