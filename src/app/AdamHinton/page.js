import React from 'react';
import Image from 'next/image';

function AdamHinton() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-16 text-5xl font-bold">Adam Hinton</h1>

      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p>
          This is a website for photographer Adam Hinton's document of Dharavi.
        </p>
        <p>
          After interviewing Adam about this project it was clear that what was
          required was much closer to journalism than advertising. The resulting
          piece, running to roughly 1000 words, is a polemic highlighting greed
          and the people hurt by it.
        </p>
      </div>

      <div className="flex flex-col w-full mt-4 space-y-16">
        <Image
          src="/AdamHinton/Dharavipic.png"
          alt="dharavipic"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi0.png"
          alt="dharavi0"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi1intro.png"
          alt="dharavi1intro"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi2.png"
          alt="dharavi2"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi3.png"
          alt="dharavi3"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi4.png"
          alt="dharavi4"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi5.png"
          alt="dharavi5"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi6.png"
          alt="dharavi6"
          width={1000}
          height={1000}
        />
        <Image
          src="/AdamHinton/Dharavi7alt.png"
          alt="dharavi7"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default AdamHinton;
