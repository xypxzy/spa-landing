import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import Hero from '../../components/Hero/Hero';
import ProcessSection from '../../components/ProcessSection/ProcessSection';

const Home = () => {

  return (
    <div>
      <Hero />
      <AboutUsSection />
      <ProcessSection />
      {/* <BenefitsSection /> */}
    </div>
  )
}

export default Home;