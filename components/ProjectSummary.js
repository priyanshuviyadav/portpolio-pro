import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectSummary({ projectdetails }) {
  return (
    <>
      <div className='h-100 mx-auto max-w-4xl border-2 my-10  py-10 px-10 bg-slate-200 rounded-lg'>
        <div className=' flex  gap-5 '>
          <div className='flex  justify-between px-5 py-5 my-5 mx-10  w-1/2'>
            <Image
              src={projectdetails.img}
              alt='img1'
              width={500}
              height={250}
            />
          </div>
          <div className=' w-1/2  '>
            <h1 className='font-bold text-xl '>Discription</h1>
            <p className=' text-xl  my-5 '>{projectdetails.readmore}</p>
          </div>
        </div>
        <div className='flex   justify-end gap-5'>
          <a
            className='  bg-red-800 px-5 py-5    rounded-lg text-white'
            href={projectdetails.github}
          >
            Github
          </a>
          <a
            className='  bg-blue-900  text-white py-5 px-5  rounded-lg'
            href={projectdetails.live}
          >
            Live View
          </a>

          <a
            className='  bg-green-800 text-white py-5 px-5 rounded-lg '
            href={projectdetails.readmore}
          >
            Read more....
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectSummary;
