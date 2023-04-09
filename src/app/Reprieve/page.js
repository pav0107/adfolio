import React from 'react';
import Image from 'next/image';

function Reprieve() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-8 text-4xl font-bold">Poster for a comedy night</h1>
      <Image
        src="/Reprieve/byegeorge.jpg"
        alt="byegeorge"
        width={700}
        height={700}
      />

      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p className="italic">Art-directed by Paul Belford</p>

        <p className="pt-8">
          Reprieve is a charity that uses the law to enforce the human rights of
          prisoners, from death row to Guantánamo Bay.
        </p>
        <p className="pb-8">
          The brief for the poster above was to advertise a night of comedy
          marking the end of George Bush's presidency: one that's been
          catastrophic for the world, but great for comedians. The obvious thing
          to do was to make a joke about George Bush, but that had been done to
          death. Instead, I thought it would be more interesting and effective
          to show how comparatively difficult the world of Obama would be for
          comics.
        </p>
      </div>

      <h1 className="my-8 text-4xl font-bold">T-shirt designs</h1>

      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p>
          I designed the following T-shirts to raise money for Reprieve through
          sales on their website.
        </p>
        <p>
          Redacted text was commonly encountered by Reprieve's lawyers when
          dealing with the people they represented in Guantanamo Bay so I
          thought the visual comparison between that and the stripes of the US
          flag would work well. I also wanted the redacted text to be
          appropriate too, rather than just random words, so I used Article 1 of
          the Universal Declaration of Human Rights:
        </p>

        <p>
          All human beings are born free and equal in dignity and rights. They
          are endowed with reason and conscience and should act towards one
          another in a spirit of brotherhood.
        </p>
      </div>

      <div className="flex flex-col mt-4 space-y-2">
        <Image
          src="/Reprieve/redacted.jpg"
          alt="redacted"
          width={1000}
          height={1000}
        />
        <Image
          src="/Reprieve/redactedclose.jpg"
          alt="redactedclose"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col mt-16 space-y-2">
        <Image
          src="/Reprieve/tsandcs.jpg"
          alt="tsandcsclose"
          width={1000}
          height={1000}
        />

        <Image
          src="/Reprieve/tsandcsclose.jpg"
          alt="tsandcsclose"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default Reprieve;
