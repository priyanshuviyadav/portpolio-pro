import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className='nav bg-slate-200 flex justify-between gap-5 my-5 py-2 px-5 font-bold rounded-lg '>
      <h1 className=' text-2xl font-bold text-slate-700 font-sans-serif'>
        Priyanshuvi Yadav
      </h1>

      <div className='nav-item flex flex-row text-lg gap-5'>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/Project'>
          <a>Project</a>
        </Link>
        <Link href='/Contact'>
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
