import React from 'react';
import Image from 'next/image';

function fish4() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-8 text-4xl font-bold">Press ads</h1>
      <div className="flex flex-col space-y-16">
        <Image
          src="/fish4/clothes.jpg"
          alt="clothes"
          width={700}
          height={700}
        />
        <Image src="/fish4/cars.jpg" alt="clothes" width={700} height={700} />
        <Image src="/fish4/thrash.jpg" alt="clothes" width={700} height={700} />
      </div>

      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p className="italic">
          Illustrated by Andy Smith and art-directed by Paul Belford.
        </p>

        <p className="pt-8">
          Press ads to convey that fish4 was the place to go to for advice.
        </p>
      </div>
    </div>
  );
}

export default fish4;
