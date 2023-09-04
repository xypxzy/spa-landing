import { useEffect, useState } from 'react';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import Hero from '../../components/Hero/Hero';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import axios from 'axios';
import { DEFAULT_URL } from '../../consts/const';
import { useTranslation } from 'react-i18next';

/* "id": 1,
        "pre_title": "//01.О нас",
        "pre_title_image": "http://localhost:8002/media/pre_about_us.png",
        "title": "About us",
        "description": "My Ticket LLC was founded on February 14, 2017 to provide services to the local market. The company has successfully implemented projects for users throughout the country.",
        "tags": [
            {
                "id": 1,
                "title": "Guaranteed Results",
                "description": "The result will definitely be. We promise.",
                "image": "/media/guarantee.png"
            },
            {
                "id": 2,
                "title": "Team of Industry Experts",
                "description": "The result will definitely be. We promise.",
                "image": "/media/team.png"
            }
        ],
        "image": "http://localhost:8002/media/content/some_image.png"
 */
export interface TagsProps {
  id: number,
  title: string,
  description: string,
  image: string,
}

export interface DataProps {
  id: number,
  pre_title: string,
  pre_title_image: string,
  title: string,
  description: string,
  tags: TagsProps[],
  image: string
}

const Home = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataProps[]>(`${DEFAULT_URL}/content/content/`, {
          headers: {
            'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`,
          },
        }); 
        setData(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    fetchData();
  }, [currentLang]);

  return (
    <div>
      <Hero />
      <AboutUsSection data={data[0]}/>
      <ProcessSection />
      <BenefitsSection />
      <ProjectSection />
    </div>
  )
}

export default Home;
