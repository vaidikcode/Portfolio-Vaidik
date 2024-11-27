import React from "react";
import { useState } from "react";
import axios from "axios";


const Contact = () => {

  const [data,setData] = useState({
    name : '',
    email : '',
    message : '',
  });


  const handleSubmit = async(e) =>{
    e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8080/getMessage" , data);
    setData({
      name:'',
      email : '',
      message : ''
    })

  } catch (error) {
    setStatus("An error occurred. Please try again.");
  }



}



    return (
      <section id="contact" className="py-12 bg-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600">Let’s Discuss Your Project</h2>
          <form className="mt-6 space-y-4"  onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              value={data.name}
              onChange={(e)=>setData({name : e.target.value})}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
              value={data.email}
              onChange={(e)=>setData({email : e.target.value})}
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded"
              value={data.message}
              onChange={(e)=>setData({message : e.target.value})}
            ></textarea>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded " type='submit' >
              Submit Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  