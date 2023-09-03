import { fonts } from '@/helpers/fonts';
import { useState } from 'react';
import Spinner from './Spinner';

export default function Contact() {
  const failMessage = 'Unable to send your message. Please try again, or email us directly on bpf.secretary@gmail.com';
  const successMessage = "Message sent. We'll get back to you soon.";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [messageCallout, setMessageCallout] = useState('');
  const [sendSuccess, setSendSuccess] = useState(true);
  const [sendInProgress, setSendInProgress] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSendInProgress(true);
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message
      })
    })
      .then((res) => {
        if (res.status !== 200) {
          setMessageCallout(failMessage);
          setSendSuccess(false);
        } else {
          setMessageCallout(successMessage);
          setSendSuccess(true);
        }
        setSendInProgress(false);
        setMessageSent(true);
      })
      .catch((err) => {
        setMessageCallout(failMessage);
        setSendInProgress(false);
        setSendSuccess(false);
        setMessageSent(true);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <div>
          <label>
            <span className='block'>Your Name:</span>
            <input
              disabled={sendInProgress}
              required
              onChange={(event) => setName(event.target.value)}
              className={`text-black last:focus:bg-white w-10/12 p-1 ${sendInProgress ? 'bg-gray-400' : 'bg-gray-200'}`}
            />
          </label>
        </div>
        <div>
          <label>
            <span className='block'>Your Email:</span>
            <input
              disabled={sendInProgress}
              required
              onChange={(event) => setEmail(event.target.value)}
              className={`text-black last:focus:bg-white w-10/12 p-1 ${sendInProgress ? 'bg-gray-400' : 'bg-gray-200'}`}
            />
          </label>
        </div>
        <div>
          <label>
            <span className='block'>Message:</span>
            <textarea
              required
              disabled={sendInProgress}
              onChange={(event) => setMessage(event.target.value)}
              className={`text-black last:focus:bg-white w-10/12 p-1 resize-none h-24 ${
                sendInProgress ? 'bg-gray-400' : 'bg-gray-200'
              }`}
            />
          </label>
        </div>
        <div className='flex items-center'>
          <button
            type='submit'
            disabled={sendInProgress}
            className={`${
              fonts.header.className
            } text-shadow inline-block rounded-md text-offwhite px-8 py-4 text-xl uppercase transition-colors ${
              sendInProgress ? 'bg-gray-500 cursor-wait' : 'bg-red-700 hover:bg-red-600 '
            }`}
          >
            Send Message
          </button>
          {sendInProgress && (
            <div className='ml-4'>
              <Spinner />
            </div>
          )}
        </div>
      </form>
      {messageSent && (
        <div className={`p-2 mt-4 rounded ${sendSuccess ? 'bg-green-400 text-black' : 'bg-red-800 text-white'}`}>
          {messageCallout}
        </div>
      )}
    </>
  );
}
