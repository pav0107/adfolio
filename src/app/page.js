import Image from 'next/image';
import { Inter } from 'next/font/google';
import Client from './Client';
import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap">
        <Client
          client="Reprieve"
          img="/Reprieve/reprieve.jpg"
          alt="Macmillan"
        />
        <Client
          client="Macmillan Cancer Support"
          img="/Macmillan/macmillan.jpg"
          alt="Macmillan"
        />
        <Client client="fish4" img="/fish4/fish.jpg" alt="fish4" />
        <Client client="Nokia" img="/Nokia/nokia.png" alt="Nokia" />
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
          client="Stand-up comedy"
          img="/Standup/standup.png"
          alt="Standup"
        />
        {/* <Client client="Honda" img="/Honda/honda.jpg" /> */}
      </div>
    </div>
  );
}
