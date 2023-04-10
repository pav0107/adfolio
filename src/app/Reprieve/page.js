import React from 'react';
import Image from 'next/image';

function Reprieve() {
  return (
    <div className="flex flex-col items-center m-8">
      <h1 className="mb-16 text-5xl font-bold">Reprieve</h1>
      <h1 className="mb-8 text-4xl font-semibold">Poster for a comedy night</h1>
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

      <h1 className="my-8 text-4xl font-semibold">T-shirt designs</h1>

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

      <div className="flex flex-col mt-4 space-y-8">
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

      <div className="flex flex-col mt-16 space-y-8">
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

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Naming</h1>
      <Image
        src="/Reprieve/zerodBlogo.jpg"
        alt="zerodBlogo"
        width={700}
        height={700}
      />

      <div className="flex flex-col items-center max-w-2xl m-4 space-y-4">
        <p>
          zero dB was an initiative, set up by human rights charity Reprieve, to
          highlight the use of music torture. The very first I created for them
          was a name (see above).
        </p>

        <h1 className="mt-16 mb-8 text-4xl font-semibold">Documentary</h1>
        <p>
          To clearly explain the story of music torture we decided to create a
          documentary film. This was a huge project for me to organise and
          involved carrying out detailed research, structuring the narrative of
          the film and interviewing Tony Benn, Robert Del Naja (Massive Attack),
          Philippe Sands QC (Professor of Law at UCL), Dr William Hopkins
          (consultant psychiatrist at the Medical Foundation for the Care of
          Victims of Torture), Moazzam Begg (former prisoner at Guantanamo Bay),
          Ruhal Ahmed (former prisoner at Guantanamo Bay) and Christopher Arendt
          (former guard at Guantanamo Bay).
        </p>

        <p>
          Large amounts of responsibility and autonomy were given on this
          project. Due to having no prior experience of working with documentary
          film this proved to be an exhilarating, yet challenging, piece of work
          to be involved in that, on numerous occasions, required unexpected
          problems to be solved as we went along.
        </p>
      </div>

      <div className="flex flex-col space-y-16">
        <iframe
          src="https://player.vimeo.com/video/7902785?h=ed1bf27ed8&title=0&byline=0&portrait=0"
          width="800"
          height="450"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://player.vimeo.com/video/7903012?h=a29d7001df&title=0&byline=0&portrait=0"
          width="800"
          height="450"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://player.vimeo.com/video/7903026?h=538210b434&title=0&byline=0&portrait=0"
          width="800"
          height="450"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Handouts</h1>
      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p>
          A handout was needed to be given out at the 2009 Brit Awards to
          prominent members of the music industry.
        </p>
        <p>
          I figured that due to the subject (music torture) the most appropriate
          medium for this was a CD sleeve. The front carried our logo, while the
          back showed a playlist of vastly contrasting songs, every single one
          used by the US in the form of music torture. Instead of a CD inside,
          we included further information and featured prominent supporters of
          our campaign to grab attention.
        </p>

        <p>A similar handout was given to MPs.</p>
      </div>

      <div className="flex flex-col mt-16 space-y-16">
        <Image
          src="/Reprieve/handoutfront.jpg"
          alt="handoutfront"
          width={1000}
          height={1000}
        />
        <Image
          src="/Reprieve/handoutback.jpg"
          alt="handoutback"
          width={1000}
          height={1000}
        />
        <Image
          src="/Reprieve/handoutinside.jpg"
          alt="handoutinside"
          width={1000}
          height={1000}
        />
        <Image
          src="/Reprieve/handoutphotos.jpg"
          alt="handoutphotos"
          width={1000}
          height={1000}
        />
        <Image
          src="/Reprieve/handoutcopy.jpg"
          alt="handoutcopy"
          width={1000}
          height={1000}
        />
      </div>

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Mission Statement</h1>
      <p className="m-4">They also needed a mission statement:</p>

      <Image
        src="/Reprieve/missionstatement.jpg"
        alt="missionstatement"
        width={700}
        height={700}
      />

      <h1 className="mt-16 mb-8 text-4xl font-semibold">Email</h1>
      <div className="flex flex-col max-w-2xl m-4 space-y-4">
        <p>
          We quickly identified that one of the most important way to generate
          press and gather momentum was to get prominent musicians to buy into
          our cause.
        </p>
        <p>
          To do this we sent the following HTML email, detailing the issue of
          music torture, why it's important to them as musicians, how they could
          help and how easy it was to do so.
        </p>
      </div>

      <Image src="/Reprieve/email.jpg" alt="email" width={700} height={700} />
    </div>
  );
}

export default Reprieve;
