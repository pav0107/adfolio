import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Client({ client, img, alt }) {
  return (
    <div class="relative flex justify-center items-center w-1/2 h-80 group cursor-pointer">
      <Image
        src={img}
        alt={alt}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority
      />

      <h1 class="absolute text-white text-3xl font-bold z-[3] hidden group-hover:block">
        {client}
      </h1>
      <Link href={`/${client.replace(/[/\s]/g, '')}`}>
        <div
          class="absolute top-0 left-0 right-0 bottom-0
         bg-black transition-opacity opacity-0 hover:opacity-70 duration-500 ease-in-out z-[2]"
        ></div>
      </Link>
    </div>
  );
}

export default Client;
