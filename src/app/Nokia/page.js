import React from 'react';
import Image from 'next/image';

function Nokia() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-8 text-4xl font-bold">In-store videos</h1>

      <iframe
        src="https://player.vimeo.com/video/7902608?h=d85b0c85e8&title=0&byline=0&portrait=0"
        width="800"
        height="450"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p className="max-w-2xl pt-8">
        I came up with the idea for this video to be played in Nokia stores to
        highlight how music is an integral part of their package. The visual
        style was based on ascii art.
      </p>
    </div>
  );
}

export default Nokia;
