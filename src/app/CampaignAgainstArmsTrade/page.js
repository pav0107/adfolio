import React from 'react';
import Image from 'next/image';

function CAAT() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-8 text-4xl font-bold">Stunt</h1>

      <iframe
        width="800"
        height="450"
        src="//www.youtube.com/embed/e_1FtEY-gp0?rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p>
          I approached Campaign Against Arms Trade (CAAT) early in 2013, with
          art-director Pablo Videla, to see if we could help on any projects.
        </p>
        <p>
          They asked if we could come up with a stunt for their Global Day of
          Action on Military Spending on 15th April. We provided them with a
          selection of ideas, one of which they developed into the above.
        </p>
        <p>
          The stunt took place outside the Houses of Parliament and featured
          protestors from CAAT, CND, Disarm DSEi and Pax Christi.
        </p>
      </div>
    </div>
  );
}

export default CAAT;
