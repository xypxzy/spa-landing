import Hero from '../../components/Hero/Hero'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import ProcessSection from '../../components/ProcessSection/ProcessSection'
// import BenefitsSection from '../../components/BenefitsSection/BenefitsSection'

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

export default Home