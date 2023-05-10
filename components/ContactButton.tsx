import React from 'react';
import Image from 'next/image';

interface ContactButtonProps {
  href: string;
  text: string;
  logo: string;
}

function ContactButton({ href, text, logo }: ContactButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className="transition duration-1000 ease-in-out hover:scale-105 text-white bg-pur  hover:border-pur border focus:ring-4 focus:outline-none focus:ring-pur/50 font-medium rounded-full px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
      >
        <Image src={`/${logo}`} alt={`${text} logo`} className="w-6 h-6 mr-2"  width={50} height={50}/>
        {text}
      </button>
    </a>
  );
}

export default ContactButton;