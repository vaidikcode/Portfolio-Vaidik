const Portfolio = () => {
    return (
      <section id="portfolio" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600">My Creative Works</h2>
          <p className="text-gray-600 mt-4">Check out some of my latest projects.</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {/* Add your portfolio items here */}
            <div className="bg-gray-200 h-40 rounded"></div>
            <div className="bg-gray-200 h-40 rounded"></div>
            <div className="bg-gray-200 h-40 rounded"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  