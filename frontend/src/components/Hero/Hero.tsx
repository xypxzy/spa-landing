const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 bg-hero-pattern relative lg:bg-center bg-top-right h-screen">
        <div className="container h-screen mx-auto flex px-5 md:py-24 py-40 md:flex-row flex-col justify-center md:justify-start lg:justify-center items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-20 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
            <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-4xl mb-4 font-bold w-[320px] md:w-[400px] lg:w-[500px] xl:w-[620px] text-gray-900">
              Digital technologies in all spheres of life: fast, convenient and efficient.
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero