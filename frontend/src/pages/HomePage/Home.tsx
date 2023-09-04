import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import Hero from '../../components/Hero/Hero';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

const Home = () => {
  
  return (
    <div>
      <Hero />
      <AboutUsSection />
      <ProcessSection />
      <BenefitsSection />
      <ProjectSection />
    </div>
  )
}

export default Home;