import React, { useEffect, useState } from 'react'
import { DEFAULT_URL } from '../../consts/const';
import axios from 'axios';

interface ProjectProps {
  id: number,
  name: string,
  description: string,
  customer: string
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<ProjectProps[]>(`${DEFAULT_URL}/content/projects/`); 
        setProjects(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    fetchProjects();
  }, []);


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            projects.map((project, id) => (
              <div className="lg:w-1/3 sm:w-1/2 p-4 h-[250px]" key={id}>
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{project.customer}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.name}</h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProjectSection