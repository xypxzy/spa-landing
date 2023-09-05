import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_URL } from '../../consts/const';
import { motion } from 'framer-motion';

interface ProjectProps {
  id: number,
  name: string,
  description: string,
  customer: string,
  image: string
}

const processAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}


const headerAnimation = {
hidden: {
  y: -50, // Начальное смещение хедера вверх
  opacity: 0, // Начальная непрозрачность
  scale: 0.8, // Начальный масштаб (можно настроить)
},
visible: (custom: number) => ({
  y: 0, // Конечное смещение хедера (хедер останется на месте)
  opacity: 1, // Конечная непрозрачность (хедер будет полностью видимым)
  scale: 1, // Конечный масштаб (обычно 1 для естественного размера)
  transition: {
    type: 'spring', // Использовать пружинный тип анимации для плавности
    damping: 10, // Коэффициент затухания (уменьшьте или увеличьте по желанию)
    stiffness: 80, // Жесткость пружины (уменьшьте или увеличьте по желанию)
    delay: custom * 0.2, // Задержка анимации
  },
}),
}

const textAnimation = {
  hidden: {
    y: 50, // Начальное смещение по вертикали
    opacity: 0, // Начальная непрозрачность
  }, 
  visible: (custom: number) => ({
    y: 0, // Конечное смещение по вертикали (текст останется на месте)
    opacity: 1, // Конечная непрозрачность (текст будет полностью видимым)
    transition: {
      type: 'spring', // Использовать пружинный тип анимации для плавности
      damping: 8, // Коэффициент затухания (уменьшьте или увеличьте по желанию)
      stiffness: 60, // Жесткость пружины (уменьшьте или увеличьте по желанию)
      delay: custom * 0.2, // Задержка анимации
    },
  }),
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

  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{amount: 0.5, once: true}} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto overflow-hidden">
        <div className="flex flex-col text-center w-full mb-20">
          <motion.h1 variants={headerAnimation} custom={1} className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{t('Our Projects')}</motion.h1>
          <motion.p variants={textAnimation} custom={1} className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t('project_description')}
          </motion.p>
        </div>
        <motion.div variants={processAnimation} custom={2} className="flex flex-wrap ">
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
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProjectSection