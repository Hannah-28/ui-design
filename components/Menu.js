import React from 'react';
import Image from 'next/image';

export default function Menu({ ...props }) {
  return (
    <div className="text-indigo-900 hover:cursor-pointer w-full space-x-4 flex items-center justify-center lg:justify-start">
      <div className="grid grid-cols-2 items-center">
        <div
          className={`w-1 h-1 rounded-full bg-indigo-900 ${props.display}`}
        ></div>
        <Image
          src={`${props.src}`}
          alt={`${props.alt}`}
          width={20}
          height={20}
          className="image"
        />
      </div>
      <p className="hidden lg:flex">{props.title}</p>
    </div>
  );
}
