import React, { useState } from "react";
import {Image} from "@nextui-org/react";
const Contact = () => {

 const[WordCount,SetWordCount]=useState(0);

  const calculateWords = (inputText) => {
    // Split the text by spaces, filter out empty strings, and count the length
    const count = inputText.trim().split(/\s+/).filter((word) => word !== "").length;
    return count;
  };


  return (
    <div className=" p-5 grid grid-cols-[1fr_1.5fr] max-lg:grid-cols-1 ">
      
      <div className="  flex  justify-center items-center ">
       <img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309627.jpg" className=" w-[100%]  bg-cover rounded-lg max-lg:rounded-none" alt="" />
      </div>
      <div className=" flex items-center justify-center p-7">

      <div className="flex justify-center items-center min-h-screen text-foreground ">
      <div className=" p-8 rounded-lg  w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Let’s Get In Touch.</h2>
        <p className="text-sm mb-6">
          Or just reach out manually to{" "}
          <a href="https://wa.me/7488453170?text= I want website" target="blank" className="text-blue-600 underline">
            Whatsapp.
          </a>
          .
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium ">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name..."
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
              />
            </div>
            <div>
              <label className="text-sm font-medium ">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name..."
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium ">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-medium ">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 (000) 000-0000"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-medium ">Message</label>
            <textarea
              placeholder="Enter your main text here..."
              maxLength="300"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
              rows="4"
              onChange={(e)=>{SetWordCount(calculateWords(e.target.value))}}
              
            ></textarea>
            <span className="text-sm  block text-right">{WordCount}/300</span>
          </div>

          <button
            type="submit"
            className="w-full bg-foreground  text-background py-3 rounded-lg  transition"
            onClick={(e)=>{e.preventDefault()}}
          >
            Submit Form
          </button>
        </form>
      </div>
       </div>

      </div>
    </div>
  );
};

export default Contact;
