const Hero = () => {
    return (
      <section className="text-center py-16 bg-green-100 h-80" >
         <span className="absolute right-10  ">
        <img src="Vaidik_processed.jpg" alt="My img" className="inline-block pl-8 h-64" />
        </span>
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-4xl font-bold text-green-600">
            I have <span className="text-black">Creative Design</span> Experience
          </h2>
          <p className="text-gray-600 mt-4">
            I'm XYZ, a creative Product Designer with 2 years of experience in solving design problems.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#contact" className="bg-green-500 text-white px-6 py-3 rounded-md">
              Contact Me
            </a>
            <a href="#portfolio" className="text-green-500 px-6 py-3 border border-green-500 rounded-md">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  