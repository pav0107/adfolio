import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Client({ client, img, alt }) {
  return (
    <div class="relative flex justify-center items-center w-1/3 h-80 group cursor-pointer">
      <Image
        src={img}
        alt={alt}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority
      />

      <Link href={`/${client.replace(/[/\s]/g, '')}`}>
        <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-bold z-[3] hidden group-hover:block">
          {client}
        </h1>
        <div
          class="absolute top-0 left-0 right-0 bottom-0
         bg-black transition-opacity opacity-0 group-hover:opacity-70 duration-500 ease-in-out z-[2]"
        ></div>
      </Link>
      {/* 
      <Link href={`/${client.replace(/[/\s]/g, '')}`}>
        
      </Link> */}
    </div>
  );
}

export default Client;
