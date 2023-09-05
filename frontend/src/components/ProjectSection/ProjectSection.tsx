import React, { useEffect, useState } from 'react'
import { DEFAULT_URL } from '../../consts/const';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface ProjectProps {
  id: number,
  name: string,
  description: string,
  customer: string,
  image: string
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<ProjectProps[]>(`${DEFAULT_URL}/content/projects/`, {
          headers: {
            'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`,
          },
        }); 
        setProjects(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    fetchProjects();
  }, [currentLang]);

  console.log(projects);
  


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto overflow-hidden">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{t('Our Projects')}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t('project_description')}
          </p>
        </div>
        <div className="flex flex-wrap ">
          {
            projects.map((project, id) => (
              <div className="lg:w-1/3 sm:w-1/2 p-4" key={id}>
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-[250px] object-contain object-center" src={project.image} />
                  <div className="px-8 py-10 relative z-5 w-full h-[250px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{project.customer}</h2>
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