const Skills = () => {
    return (
      <section id="skills" className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600">Why Hire Me For Your Next Project?</h2>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold text-green-500">Visual Design</h4>
              <p className="text-gray-600">Modern and unique design solutions.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold text-green-500">UX Research</h4>
              <p className="text-gray-600">Creating user-centric digital products.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold text-green-500">Design Prototypes</h4>
              <p className="text-gray-600">High-fidelity Figma prototypes.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  