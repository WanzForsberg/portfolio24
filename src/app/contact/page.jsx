'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="flex flex-col lg:flex-row h-full pb-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center justify-center text-center lg:text-left h-1/2 lg:h-full lg:w-1/2">
          <div className="lg:hidden">
            {' '}
            {/* Only visible on mobile */}
            <h2 className="text-4xl text-white">Work With Me!</h2>
            <p className="text-xl text-blue-600 mt-4">
              Let&apos;s create something great together. Please reach out to
              discuss your project.
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-col">
            {' '}
            {/* Only visible on desktop, stacked vertically */}
            <span className="text-white text-6xl">Work With Me!</span>
            <span className="text-blue-600 text-6xl">Work With Me!</span>
            <span className="text-white text-6xl">Work With Me!</span>
            <span className="text-blue-600 text-6xl">Work With Me!</span>
            <span className="text-white text-6xl">Work With Me!</span>
            <span className="text-blue-600 text-6xl">Work With Me!</span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col gap-8 justify-center bg-slate-800 text-white underline-white rounded-xl text-xl p-4 sm:p-8 md:p-12 lg:p-24 h-1/2 lg:h-full lg:w-1/2">
          <span>Dear Jacob,</span>
          <textarea
            rows={3}
            className="w-full bg-transparent border-2 border-blue-600 outline-none resize-none"
            name="user_message"
          />
          <span>Regards:</span>
          <input
            name="user_email"
            type="text"
            className="w-full bg-transparent border-b-2 border-blue-600 outline-none"
          />
          <button className="w-full lg:w-auto bg-blue-600 rounded font-semibold text-white p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
