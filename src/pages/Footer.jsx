import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUp, Instagram } from "lucide-react";

const ContactSection = () => {

  const form = useRef();
  const [sending , setSending] = useState(false);
  const [sent , setSent] = useState(false);
  const [error , setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError('');

    emailjs.sendForm('service_71exods' , 'template_xr9iytk' , form.current , 'fuaugX3OXrd1pnv6V')
    .then( () => {
      setSent(true);
      setSending(false);
      form.current.reset();
    } , (err) => {
      setError('Failed to send message. Please try again later.');
      setSending(false);
    })
  }
  
  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-20" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          Let's 
          <span className="mx-2 bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 inline-block text-transparent bg-clip-text font-bold"> Connect </span>
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Open to new projects and collaborations—reach out anytime!
          
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="text-rose-400" size={18} />
              jyotiradityahota@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-rose-400" size={18} />
              +91 8847890944
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-rose-400" size={18} />
              Hyderabad, India
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-md font-medium mb-2">Follow Me</h4>
            <div className="flex gap-4 text-rose-400">
              <a href="https://github.com/Jyotiraditya-17" target="_blank" rel="noreferrer">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/jyotiraditya-hota-2012a9266/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/iam_ronak_1817/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full p-2 rounded bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="YourName@example.com"
                className="w-full p-2 rounded bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              className="w-full p-2 rounded bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Hello, I'd like to discuss on a project..."
              className="w-full p-2 rounded bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
              required
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 text-white py-2 rounded flex items-center justify-center gap-2 transition"
            >
              {sending ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
            {sent && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-gray-800 pt-10" id="footer">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm">
          {/* Name & Tagline */}
          <div>
            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400">
              Jyotiraditya Hota
            </h2>
            <p className="text-gray-400">
              Transforming ideas into seamless web experiences
            </p>
          </div>

          {/* Socials and Back to Top */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4 ">
              <a href="https://github.com/Jyotiraditya-17" target="_blank" rel="noreferrer" className="hover:text-rose-300">
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/jyotiraditya-hota-2012a9266/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-300"
              >
                <Linkedin />
              </a>
            </div>
            <a
              href="#"
              className="hover:text-rose-300 flex items-center gap-1 hover:underline"
            >
              Move to Top <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="my-6 border-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Jyotiraditya Hota. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-rose-400">Home</a>
            <a href="#skills" className="hover:text-rose-400">Skills</a>
            <a href="#projects" className="hover:text-rose-400">Projects</a>
            <a href="#contact" className="hover:text-rose-400">Contact</a>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default ContactSection;
