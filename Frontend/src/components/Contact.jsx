const Contact = () => {
    return (
      <section id="contact" className="py-12 bg-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600">Let’s Discuss Your Project</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded"
            ></textarea>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded">
              Submit Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  