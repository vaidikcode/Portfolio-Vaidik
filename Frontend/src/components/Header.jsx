const Header = () => {
    return (
      <header className="bg-white text-green-500 p-4 flex justify-between text-lg items-center">
        <h1 className="text-2xl font-bold">PORTFOLIO</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className=" hover:text-black">About</a></li>
            <li><a href="#skills" className=" hover:text-black">Skills</a></li>
            <li><a href="#portfolio" className=" hover:text-black">Portfolio</a></li>
            <li><a href="#testimonials"className=" hover:text-black">Testimonials</a></li>
          </ul>
        </nav>
        <a href="#contact" className="bg-white text-green-500 px-4 hover:text-black py-2 rounded-md">
          Contact
        </a>
      </header>
    );
  };
  
  export default Header;
  