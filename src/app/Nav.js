import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <div className="flex items-baseline justify-between m-4 font-semibold">
      <h1 className="text-4xl">Pav Rao</h1>
      <div className="flex space-x-4 text-2xl">
        <Link href="about">About</Link>
        <Link href="contact">Contact</Link>
      </div>
    </div>
  );
}

export default Nav;
