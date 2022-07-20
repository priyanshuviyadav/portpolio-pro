import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className='bg-slate-200 border-4  flex justify-between gap-5 py-2 px-5 font-bold rounded-lg'>
        <h1 className='text-xl font-bold text-italic'>
          Get to touch social follow
        </h1>
        <div className='flex flex-row gap-5'>
          <a href='https://www.facebook.com/bindreena'>
            <Image src='/facebook-app.png' alt=' fb' width={40} height={40} />
          </a>
          <a href='https://www.linkedin.com/in/priyanshuvi-yadav'>
            <Image
              src='/linkedin-square-color.png'
              alt='linkedin Logo'
              width={40}
              height={40}
            />
          </a>
          <a href='https://github.com/priyanshuviyadav'>
            <Image src='/github.png' alt='git Logo' width={40} height={40} />
          </a>
          <a href='https://www.instagram.com/pr_iya881'>
            <Image
              src='/instagram.png'
              alt='insta Logo'
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
