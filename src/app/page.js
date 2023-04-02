import Image from 'next/image';
import { Inter } from 'next/font/google';
import Client from './Client';
import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex flex-wrap">
        <Client
          background="bg-red-200"
          client="Macmillan"
          img="/Macmillan/A.jpg"
        />
        <Client client="Reprieve" img="/Reprieve/reprieve.jpg" />
        <Client client="fish4" img="/fish4/fish.jpg" />
        <Client client="Nokia" img="/Nokia/nokia.png" />
        <Client client="Adam Hinton" img="/AdamHinton/india_night2.jpg" />
        <Client client="Pinchgut Opera" img="/Pinchgut/pinchgut.png" />
        <Client client="Campaign Against Arms Trade" img="/CAAT/CAAT2.png" />
        <Client client="BMS/Pfizer Alliance" img="/Healthcare/healthcare.jpg" />
        {/* <Client client="Stand-up comedy" img="/Standup/standup.jpg" />
        <Client client="Honda" img="/Honda/honda.jpg" /> */}
      </div>
    </div>
  );
}
