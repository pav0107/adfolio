import Image from 'next/image';
import { Inter } from 'next/font/google';
import Client from './Client';
import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center m-8">
        <div className="max-w-xl">
          <h1 className="mb-4 text-2xl font-bold">A brief bio</h1>
          <ul className="list-disc">
            <li className="py-1">
              Graduate of Tony Cullingham's Watford ad course.
            </li>
            <li className="py-1">
              Placements at Mother, Wieden + Kennedy and DDB amongst others.
            </li>
            <li className="py-1">
              Featured in Creative Review’s ‘Creative Futures’ showcase.
            </li>
            <li className="py-1">
              Hired for first job by Paul Belford at This is Real Art.
            </li>
            {/* <li className="py-1">
              Previous writing includes headlines, naming initiatives, signage,
              essays, film narration, radio, mission statements, brand
              guidelines and letters.
            </li> */}
            <li className="py-1">
              Permanent and freelance roles in a diverse range of advertising
              agencies, design studios, branding companies and in-house creative
              teams.
            </li>
            <li className="py-1">
              Experience in film, radio, posters, press, digital, social, DM,
              T-shirt design, installations, merchandise, stunts and events.
            </li>
            <li className="py-1">
              Currently working at{' '}
              <a href="https://www.goodagency.co.uk/">GOOD</a>, a purpose driven
              strategy and creative agency, working across clients such as RSPB,
              Marie Curie, Crisis, Macmillan Cancer Support, RNIB and London
              Business School.
            </li>
            <li className="py-1">
              Performed stand-up comedy across the UK and in Europe to audiences
              of up to 400 people, winning the Bath Comedy Festival’s New Act of
              the Year competition and getting to the semi-final of the BBC New
              Comedy Awards.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap">
        <Client
          client="Reprieve"
          img="/Reprieve/reprieve.jpg"
          alt="Macmillan"
        />
        <Client client="fish4" img="/fish4/fish.jpg" alt="fish4" />
        <Client client="Nokia" img="/Nokia/nokia.png" alt="Nokia" />
        <Client
          client="Campaign Against Arms Trade"
          img="/CAAT/CAAT2.png"
          alt="CAAT"
        />
        <Client
          client="BMS/Pfizer Alliance"
          img="/Healthcare/healthcare.jpg"
          alt="BMS/Pfizer Alliance"
        />
        <Client
          client="Adam Hinton"
          img="/AdamHinton/india_night2.jpg"
          alt="Adam Hinton"
        />
        <Client
          client="Pinchgut Opera"
          img="/Pinchgut/pinchgut.png"
          alt="Pinchgut Opera"
        />
        <Client
          client="Macmillan Cancer Support"
          img="/Macmillan/macmillan.jpg"
          alt="Macmillan"
        />

        <Client
          client="Stand-up comedy"
          img="/Standup/standup.png"
          alt="Standup"
        />
        {/* <Client client="Honda" img="/Honda/honda.jpg" /> */}
      </div>
    </div>
  );
}
