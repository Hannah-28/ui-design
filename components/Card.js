import React from 'react';
import Image from 'next/image';

export default function Card({ ...props }) {
  return (
    <div
      className="bg-white rounded-lg p-2 hover:cursor-pointer hover:bg-slate-50"
      style={{ height: 'fit-content' }}
    >
      <Image
        src={`${props.src}`}
        alt="Room Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '20vh' }}
        className="rounded-lg"
      />
      <h1 className="text-indigo-950 font-semibold mt-4">{props.name}</h1>
      <div className="w-full mt-1 mb-2 flex items-center">
        <Image
          src="/pin.png"
          alt="Location Logo"
          width={15}
          height={10}
          className="image"
        />
        <p className="ml-1 text-gray-400">{props.location}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-indigo-950 font-bold">
          ${props.price}
          <code className="text-gray-400 font-normal"> / night</code>
        </h1>
        <div className="border-gray-300 border py-1 px-1 rounded-lg">
          <Image
            src="/heart.png"
            alt="Heart Logo"
            width={15}
            height={10}
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
