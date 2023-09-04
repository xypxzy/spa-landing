import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import Hero from '../../components/Hero/Hero';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import { DEFAULT_URL } from '../../consts/const';
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
      <ProcessSection data={data[1]}/>
      <ProjectSection />
    </div>
  )
}

export default Home;
