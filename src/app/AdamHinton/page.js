import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';

function Macmillan() {
  return (
    // <div class="relative flex justify-center items-center w-1/2 h-80 group cursor-pointer">
    <div>
      <Nav />
      hello
      {/* <Image
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
      <Link href={`/${client}`}>
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-black/10 hover:bg-black/80 z-[2]"></div>
      </Link> */}
    </div>
  );
}

export default Macmillan;
