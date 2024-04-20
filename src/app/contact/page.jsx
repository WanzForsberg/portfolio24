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
      transition={{ duration: 1 }}
    >
      <div className="h-full pb-5 flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-6xl">
          <span className="text-white">Work With Me!</span>
          <span className="text-violet-700">Work With Me!</span>
          <span className="text-white">Work With Me!</span>
          <span className="text-violet-700">Work With Me!</span>
          <span className="text-white">Work With Me!</span>
          <span className="text-violet-700">Work With Me!</span>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-slate-800 text-white underline-white rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Jacob,</span>
          <textarea
            rows={6}
            className="bg-transparent border-2 border-violet-700 outline-none resize-none"
            name="user_message"
          />
          <span>Regards:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-violet-700 outline-none"
          />
          <button className="bg-violet-700 rounded font-semibold text-white p-4">
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
