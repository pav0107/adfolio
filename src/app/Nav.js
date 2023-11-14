import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <div className="flex items-baseline justify-between m-8 font-semibold">
      <Link href="/">
        <h1 className="text-4xl">Pav Rao</h1>
      </Link>
      {/* <div className="text-2xl">
        <Link href="about">About</Link>
      </div> */}
    </div>
  );
}

export default Nav;
