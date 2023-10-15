import React from 'react';
import Image from 'next/image';

export default function Palete({ ...props }) {
  return (
    <div
      className="bg-white rounded-lg px-2 py-5 hover:cursor-pointer grid grid-cols-3 hover:bg-slate-50 gap-3"
      style={{ height: 'fit-content' }}
    >
      <Image
        src={`${props.src}`}
        alt="City Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '12vh' }}
        className="rounded-lg col-span-1"
      />

      <div className="col-span-2">
        <div className="flex justify-between items-center">
          <h1 className="text-indigo-950 font-semibold">{props.name}</h1>
          <div className="flex items-center text-xs font-light space-x-1">
            <Image src="/star.png" alt="Star Logo" width={15} height={15} />
            <p>{props.rating} / 5</p>
          </div>
        </div>
        <p
          className="text-gray-400 font-base my-2"
          style={{ fontSize: '0.8em' }}
        >
          {props.description}
        </p>
        <h1 className="text-indigo-950 font-bold">${props.price}</h1>
      </div>
    </div>
  );
}
