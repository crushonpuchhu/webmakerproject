import React from "react";
import { TiPointOfInterest } from "react-icons/ti";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import handleScrollToTop from "../../asset/scrolltop";

const Footer = () => {
  const homeclick = useNavigate();
  const servicesclick = useNavigate();
  const contactclick = useNavigate();

  

  return (
    <footer className=" bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <TiPointOfInterest className="text-5xl" />
            <div>
              <h3 className="text-3xl font-extrabold">WebMaker</h3>
              <p className="text-sm mt-2">
                Building modern and innovative websites tailored to your needs.
              </p>
              <p className="text-sm mt-2">
                &copy; {new Date().getFullYear()} WebMaker. All rights reserved.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 cursor-pointer">
              <li>
                <p
                  onClick={() => {
                    homeclick("/home");
                    handleScrollToTop();
                  }}
                  className="hover:underline transition"
                >
                  About Us
                </p>
              </li>
              <li>
                <p onClick={()=>{
                  servicesclick('/services');
                  handleScrollToTop();
                  }} className="hover:underline transition">Services</p>
              </li>
              <li>
                <p onClick={()=>{contactclick('/contact');handleScrollToTop();}} className="hover:underline transition">Contact</p>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
