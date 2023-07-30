import React from 'react';
import Image from 'next/image';

function Healthcare() {
  return (
    <div className="flex flex-col items-center justify-center w-full m-8">
      <h1 className="mb-16 text-5xl font-bold">BMS/Pfizer Alliance</h1>

      <iframe
        src="https://player.vimeo.com/video/75317280?h=753bcd15a4&title=0&byline=0&portrait=0"
        width="1000"
        height="563"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="flex flex-col max-w-2xl mt-8 space-y-4">
        <p>
          The above piece was for a pharmaceutical client who had a stand at
          2013's ESC (European Society of Cardiology) Congress, regarded as the
          world’s premier conference specialising in the science, management and
          prevention of cardiovascular disease.
        </p>
        <p>
          The brief was to have posters along a walkway to advertise the stand.
          The problem with this was that getting people's attention when they're
          busily trying to get around was going to be tricky.
        </p>
        <p>
          I thought a better idea was to use live illustration. This led to four
          artists creating a 60m-long illustration, live over the course of the
          four-day event.
        </p>
      </div>
    </div>
  );
}

export default Healthcare;
