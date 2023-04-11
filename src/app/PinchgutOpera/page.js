import React from 'react';
import Image from 'next/image';

function Pinchgut() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-16 text-5xl font-bold">Pinchgut Opera </h1>

      <iframe
        src="https://player.vimeo.com/video/21011072?h=3f2a7deb7f&title=0&byline=0&portrait=0"
        width="1000"
        height="750"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="flex flex-col max-w-2xl mt-8 space-y-4">
        <p>
          This is a website to promote the production of L'Ormindo, by Pinchgut
          Opera.
        </p>
        <p>
          Working closely with Pirata, an interactive and immersive environment
          was created that allows users to explore the various love triangles
          within the opera.
        </p>
      </div>
    </div>
  );
}

export default Pinchgut;
