import React from "react";
import Nav from "../components/Nav";
import Footer from "./Footer";
import ProjectSummary from "../components/ProjectSummary";

function Project() {
  const projectArr = [
    {
      img: "/capture1.png",
      github: "https://github/topics/covid-vaccination",
      live: "https://www.netlify.com",
      readmore:
        " An open, connected structure allows information to flow freely among everyone at the organization. Bring it all together The fastest way to combine your favorite\
      tools and APIs to build the fastest sites, stores, and apps for the web.",
    },
    {
      img: "/capture.png",
      github: "https://github/topics/covid-vaccination",
      live: "https://www.netlify.com",
      readmore:
        "Bring it all together The fastest way to combine your An open, connected structure allows information to flow freely among everyone at the organization.        favorite\
     tools and APIs to build the fastest sites, stores, and apps for the web.",
    },
    {
      img: "/todo.jpg",
      github: "https://github/topics/covid-vaccination",
      live: "https://www.netlify.com",
      readmore:
        "Bring it all together The fastest way An open, connected structure allows information to flow freely among everyone at the organization.        to combine your favorite\
     tools and APIs to build the fastest sites, stores, and apps for the web.",
    },
  ];

  const projectlist = projectArr.map((item, index) => (
    <ProjectSummary key={index} projectdetails={item} />
  ));
  return (
    <>
      <div className='project-detail bg-slate-500 max-w-4xl mx-auto py-2 px-10 h-100 overflow-hidden'>
        <Nav />
        <h1>{projectlist}</h1>

        <Footer />
      </div>
    </>
  );
}

export default Project;
