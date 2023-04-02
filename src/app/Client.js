import React from 'react';
import Image from 'next/image';

function Client({ client, img }) {
  return (
    <div class="relative flex justify-center items-center w-1/2 h-80 group">
      <Image
        src={img}
        alt="Vercel Logo"
        // layout="responsive"
        // width={50}
        // height={100}
        fill={true}
        // src="/example.png"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        // fill
        className="object-cover"
        // sizes="(min-width: 60em) 24vw,
        //             (min-width: 28em) 45vw,
        //             100vw"
      />

      <h1 class="absolute text-white text-3xl font-bold z-[3] hidden group-hover:block">
        {client}
      </h1>
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-black/10 hover:bg-black/80 z-[2]"></div>
    </div>
  );
}

export default Client;
