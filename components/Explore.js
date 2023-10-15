import React from 'react';
import Image from 'next/image';

export default function Explore({ ...props }) {
  return (
    <div
      className="bg-white rounded-lg px-2 py-5 hover:cursor-pointer grid grid-cols-3 hover:bg-slate-50 gap-3"
      style={{ height: 'fit-content' }}
    >
      <Image
        src={`${props.src}`}
        alt="France Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '12vh' }}
        className="rounded-lg col-span-1"
      />

      <div className="col-span-2">
        <h1 className="text-indigo-950 font-semibold hover:underline">
          {props.name}
        </h1>

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
          <h1 className="text-indigo-950 font-bold">${props.price}</h1>
        </div>
      </div>
    </div>
  );
}
