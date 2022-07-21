import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div className='container bg-slate-500 max-w-4xl mx-auto text-black-800 py-2 px-10 h-90 overflow-hidden'>
        <Nav />
        <div className='home-container mx-auto border-4 my-10 flex justify-between gap-5 py-2 px-5 font-bold rounded-lg '>
          <div className='flex flex-col justify-center items-center object-cover rounded-full w-1/2'>
            <Image src='/user.png' alt='Vercel Logo' width={200} height={200} />

            <a
              className='text-slate-100 font-bold'
              href='https://docs.google.com/document/d/145YHKG-ibGGZqUhd_Ag1iFZ2Of1Bg0P6/edit?usp=sharing&ouid=103271272873176322810&rtpof=true&sd=true'
            >
              View Resume
            </a>
          </div>
          <div className='about w-1/2 py-5'>
            <p>
              I'm Priyanshuvi Yadav from Nagpur-MH. I have completed my B.E
              computer science and engineering in NIT college Nagpur.I did my
              schooling in RNIC and I got 74 % after completing my graduation, I
              joined in phenix technology pvt ltd. and in company my role is
              work as a trainee software developer.I learned the process of
              building how to design the software websites from raw material to
              final satisfied the customer. My short-term goal is to get a job
              in a reputed Company. My long-term goal is to achieve a good
              position in a good company. My hobbies are listening to music,
              sports and travelling to new places and communicating with new
              people. It's all about me. Thank You
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
