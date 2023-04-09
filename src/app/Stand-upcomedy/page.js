import React from 'react';
import Image from 'next/image';

function Standup() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-16 text-5xl font-bold">Standup Comedy</h1>

      <iframe
        src="https://player.vimeo.com/video/314071085?h=d13976dcde&title=0&byline=0&portrait=0"
        width="800"
        height="450"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="flex flex-col max-w-2xl mt-8 space-y-4">
        <p>
          I've been performing stand-up since 2011 at clubs across the UK and
          Europe.
        </p>
        <p>
          In 2016 I won the Bath Comedy Festival New Act of the Year Competition
          with a set that received this review:
        </p>
        <p className="italic">
          '... This year’s winner, though, is Pav, who gives an intellectually
          thoughtful, though never patronising or preachy take on racism,
          genocide, social attitudes, and history generally, with a beautifully
          measured and timed delivery, every wry gag hitting its mark with a
          devastating accuracy that has the audience roaring. Comedy with brains
          and brawn. It’s a fitting end to a great festival.'
        </p>
        <p>
          I also got through to the semi-final of the 2017 BBC New Comedy
          Awards. The set I did in the heats to reach this can be seen above.
        </p>
      </div>
    </div>
  );
}

export default Standup;
