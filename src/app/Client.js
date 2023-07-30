import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Client({ client, img, alt }) {
  return (
    <div className="relative flex items-center justify-center w-full cursor-pointer sm:w-1/3 h-80 group">
      <Image
        src={img}
        alt={alt}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority
      />

      <Link href={`/${client.replace(/[/\s]/g, '')}`}>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-bold z-[3] sm:hidden sm:group-hover:block">
          {client}
        </h1>
        <div
          className="absolute top-0 left-0 right-0 bottom-0
         bg-black opacity-70 sm:bg-black sm:transition-opacity sm:opacity-0 sm:group-hover:opacity-70 sm:duration-500 sm:ease-in-out z-[2]"
        ></div>
      </Link>
      {/* 
      <Link href={`/${client.replace(/[/\s]/g, '')}`}>
        
      </Link> */}
    </div>
  );
}

export default Client;
