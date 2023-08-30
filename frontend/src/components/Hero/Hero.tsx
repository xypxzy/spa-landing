import heroBgPath from '../../assets/home-page-bg.svg';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 md:bg-hero-pattern md:bg-cover bg-none">
        <div className="container h-screen mx-auto flex px-5 md:py-24 py-40 md:flex-row flex-col justify-center items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-20 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-6xl text-3xl mb-4 font-bold md:w-[620px] text-gray-900">
              Digital technologies in all spheres of life: fast, convenient and efficient.
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero