import * as React from "react";
import Link from 'next/link';
import { contacts } from '../helpers/contacts';
import Image from 'next/image';

export interface FooterProps {}

export default function Footer(props: FooterProps) {

  return (
    <footer>
      <div className="bg-pur text-stone-50 px-2 lg:py-0 py-4">
        <div className="py-4">
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-xl">Paul Gubbiotti</p>
            <div className="flex flex-col items-center justify-center pb-2">
              {contacts.map(contact => (
                <div key={contact.title} className="flex items-center pr-4">
                <Image src={`/${contact.icon}`} width={24} height={24} alt={contact.title} />
                  <Link target="_blank" href={contact.link} className="text-xl transition duration-1000 ease-in-out hover:scale-105 text-stone-5 text-stone-50 pl-2">{contact.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pur py-4 text-stone-50 flex flex-col items-center">
        <p>©2023 - Fait avec ❤️ à Cestas (33) par PJG</p>
      </div>
    </footer>
  );
}