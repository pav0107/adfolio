import React from 'react';
import Image from 'next/image';

function Macmillan() {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="mb-16 text-5xl font-bold">Macmillan</h1>
      <h1 className="mb-8 text-4xl font-semibold">
        Macmillan Evidence Research Showcase
      </h1>
      <iframe
        src="https://player.vimeo.com/video/187833297?h=87254e3d5c&title=0&byline=0&portrait=0"
        width="800"
        height="450"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p className="max-w-2xl m-4">
        Macmillan's 2016 Evidence Showcase highlights the breadth of research
        Macmillan provides. The creative task was to create installations that
        bring the research to life.
      </p>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">
        Internal staff posters
      </h1>
      <Image
        src="/Macmillan/confidential.jpg"
        alt="confidential"
        width={500}
        height={500}
      />
      <p className="max-w-2xl m-4">
        This was a poster to get staff to be even more vigilant with the
        confidential information they handle.
      </p>

      <div className="mt-16 border">
        <Image src="/Macmillan/cake.jpg" alt="cake" width={700} height={700} />
      </div>
      <p className="max-w-2xl m-4">
        An internal poster for Dying Matters' Awareness Week to advertise a talk
        for staff about the discounted will writing service on offer. The poster
        was based on the insight that, as it was during lunchtime, people may be
        more interested in getting some food.
      </p>

      <div className="mt-16 border">
        <Image
          src="/Macmillan/jobs.jpg"
          alt="confidential"
          width={700}
          height={700}
        />
      </div>
      <p className="max-w-2xl m-4">
        The brief for the internal poster, above, was to tackle the
        misconception by some Macmillan staff that when we talked about
        'Macmillan professionals' we were just talking about nurses.
      </p>

      <div className="flex flex-col mt-16 space-y-8">
        <Image src="/Macmillan/poem.jpg" alt="poem" width={700} height={700} />

        <Image
          src="/Macmillan/poemcloseup.png"
          alt="poemcloseup"
          width={700}
          height={700}
        />
      </div>
      <p className="max-w-2xl mt-4 mb-16">
        Internal poster to raise awareness about the new consent statement,
        which has a larger font size and aims to make it clearer to supporters
        what information they will or won't be contacted about.
      </p>

      <Image
        src="/Macmillan/douglas.jpg"
        alt="douglas"
        width={700}
        height={700}
      />

      <p className="max-w-2xl m-4">
        We were asked to design a poster to raise awareness of data protection,
        security and reputational risk. We thought that using the founder,
        Douglas Macmillan, would be an eye-catching way of doing this.
      </p>

      <div className="mt-16 border">
        <Image
          src="/Macmillan/shine.jpg"
          alt="shine"
          width={700}
          height={700}
        />
      </div>
      <p className="max-w-2xl m-4">
        This internal poster was designed to let staff know about the learning
        and development opportunities available within the charity. Our solution
        to the brief was to use the well-known face of our CEO, Linda Thomas,
        and her position as someone to aspire to.
      </p>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Press ad</h1>
      <Image src="/Macmillan/baby.jpg" alt="baby" width={700} height={700} />

      <p className="max-w-2xl m-4">
        Press ad in The Guardian to get people interested in gifts in wills.
      </p>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Digital ads</h1>
      <Image src="/Macmillan/sun.jpg" alt="sun" width={700} height={700} />

      <p className="max-w-2xl m-4">
        This was used on the Macmillan website to encourage men working outside
        to find out more about their risk of getting skin cancer. A digital
        'find out more' button was added on.
      </p>

      <div className="border">
        <Image
          src="/Macmillan/centres.jpg"
          alt="centres"
          width={700}
          height={700}
        />
      </div>
      <p className="max-w-2xl m-4">
        This was an appeal on the homepage to get people to donate so that we
        could provide more Macmillan Centres.
      </p>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">E-cards</h1>
      <iframe
        src="https://player.vimeo.com/video/147717581?h=33c517fcce&title=0&byline=0&portrait=0"
        width="800"
        height="800"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p>
          I was involved in the creation of two 'empathy eCards' that are
          available at ecards.macmillan.org.uk
        </p>
        <p>
          This video ran on Instagram to promote them and uses one of the eCards
          I wrote as its basis.
        </p>
      </div>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Merchandise</h1>
      <div className="border">
        <Image src="/Macmillan/tote.jpg" alt="tote" width={700} height={700} />
      </div>
      <p className="max-w-2xl mt-4 mb-8">
        Tote bag, available via be.macmillan.org.uk
      </p>

      <div className="border">
        <Image
          src="/Macmillan/travel.jpg"
          alt="travel"
          width={300}
          height={300}
        />
      </div>
      <p className="max-w-2xl mt-4 mb-8">
        Travel card holder, available via be.macmillan.org.uk
      </p>

      <div className="border">
        <Image
          src="/Macmillan/coaster.jpg"
          alt="coaster"
          width={300}
          height={300}
        />
      </div>
      <p className="max-w-2xl m-4">
        Coaster, available via be.macmillan.org.uk
      </p>
    </div>
  );
}

export default Macmillan;
