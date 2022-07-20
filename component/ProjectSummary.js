import React from "react";
import Image from "next/image";

function ProjectSummary({ projectdetails }) {
  return (
    <>
      <div className='h-100 mx-auto border-2 my-10 gap-5 py-10 px-10 bg-slate-200 rounded-lg'>
        <div className=' flex flex-row gap-10'>
          <div className='flex flex-row justify-between px-5 py-5 my-5 mx-10  w-1/2'>
            <Image
              src={projectdetails.img}
              alt='img1'
              width={500}
              height={400}
            />
          </div>
          <div className='w-1/2  '>
            <h1 className='font-bold text-xl '>Discription</h1>
            <p className=' text-xl  my-5 '>{projectdetails.readmore}</p>
            {/* <a
              className='border-2 bg-red-800   text-white py-3 px-3  rounded-lg'
              href={projectdetails.github}
            >
              Github
            </a>
            <a
              className='bg-green-800 text-white py-3 px-3 rounded-lg border-2'
              href={projectdetails.live}
            >
              Live View
            </a>
            <a
              className='bg-blue-800 text-white py-3 px-3 rounded-lg border-2'
              href={projectdetails.readmore}
            >
              Read more
            </a>  */}
          </div>
        </div>
        <div className=' btn flex flex-row justify-end gap-5'>
          <a
            className='  px-5 py-5   rounded-lg text-white'
            href={projectdetails.github}
          >
            Github
          </a>
          <a
            className='   text-white py-5 px-5  rounded-lg'
            href={projectdetails.live}
          >
            Live View
          </a>
          <a
            className='  text-white py-5 px-5 rounded-lg '
            href={projectdetails.readmore}
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectSummary;
