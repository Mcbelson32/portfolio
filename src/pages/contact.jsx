import {useState, useEffect} from "react";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

import emailjs from '@emailjs/browser';

// pubkey = uMVIiCR5x7Ux5pgn0
// service = service_y2bzdql
// temp = template_eps1636

const Contact = ({width}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleForm = (e) => {
    e.preventDefault()

    const tempParams = {
      from_name: name,
      from_email: email,
      to_name: "Mc",
      subject: subject,
      message: message
    }

    emailjs.send("service_y2bzdql", "template_eps1636", tempParams, "uMVIiCR5x7Ux5pgn0")
      .then(response => {
        console.log("Email sent successfully")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      }).catch((err) => {
        console.error("Error Sending Email", err)
        alert("Error Sending Email")
      })
  }
  return (
    <section
      className="container max-md:pr-0 max-md:pl-0 h-auto xl:h-screen w-full py-20 2xl:py-32 mb-8 dark:text-light"
      id="contact"
    >
      <h2 data-aos="fade-up" className="text-center text-3xl font-bold">
        Contact <span className="text-purple">Me</span>
      </h2>
      <p data-aos="fade-up" className="text-[13px] font-medium opacity-60">Get In Touch</p>
      <div className="form-card1 mt-8 px-0 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div data-aos={width > 1024 ? "fade-right" : "fade-up"} className="flex flex-col gap-4 items-center justify-start">
          <h2 className="text-lg font-semibold w-full text-center my-4">Talk to me</h2>
          <div className="card aspect-video w-72  bg-[#d5ccdd] text-center font-bold py-4 px-3 flex flex-col justify-start gap-1 items-center dark:border-2 dark:border-primary dark:bg-secondary-dark">
              <BiMailSend className="text-3xl mb-3"/>
              <h3 className="text-sm">Email</h3>
              <p className="text-xs opacity-75 font-semibold">mcwelson92@gmail.com</p>
              <a href="mailto:mcwelson92@gmail.com" target="blank" className="text-xs opacity-75 font-semibold mt-4 w-full flex text-center justify-center items-center">Write me <TiArrowRight /></a>
          </div>
          <div className="card aspect-video w-72 bg-[#d5ccdd] text-center font-bold p-4 flex flex-col justify-start gap-1 items-center dark:border-2 dark:border-primary dark:bg-secondary-dark">
          <FaWhatsapp className="text-3xl mb-3"/>
              <h3 className="text-sm">Whatsapp</h3>
              <p className="text-xs opacity-75 font-semibold">+251-904-537-541</p>
              <a href="https://wa.me/251904537541" target="blank" className="text-xs opacity-75 font-semibold mt-4 w-full flex text-center justify-center items-center">Write me <TiArrowRight /></a>
          </div>
          <div className="card aspect-video w-72  bg-[#d5ccdd] text-center font-bold p-4 flex flex-col justify-start gap-1 items-center dark:border-2 dark:border-primary dark:bg-secondary-dark">
          <FiLinkedin className="text-3xl mb-3"/>
              <h3 className="text-sm">LinkedIn</h3>
              <p className="text-xs opacity-75 font-semibold">Makbel Hailu</p>
              <a href="https://www.linkedin.com/in/makbel-hailu-bab1571a2" target="blank" className="text-xs opacity-75 font-semibold mt-4 w-full flex text-center justify-center items-center">Write me <TiArrowRight /></a>
          </div>
        </div>
        <div data-aos={width > 1024 ? "fade-left" : "fade-up"} className="form-card2 lg:px-5">
          <h2 className="text-lg font-semibold w-full text-center my-4">Write me your project</h2>
          <form className="form w-full" method="POST" onSubmit={handleForm}>
            <div className="form-field ">
              <label htmlFor="name" className="w-full max-w-[500px] mx-auto text-start pl-1 font-medium cursor-pointer">Name</label>
              <input
                required={true}
                placeholder="John"
                className="input-field"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="w-full max-w-[500px] mx-auto text-start pl-1 font-medium cursor-pointer">Email</label>
              <input
                required={true}
                placeholder="abc@example.com"
                className="input-field"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="subject" className="w-full max-w-[500px] mx-auto text-start pl-1 font-medium cursor-pointer">Subject</label>
              <input
                required={true}
                placeholder="something"
                className="input-field"
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="w-full max-w-[500px] mx-auto text-start pl-1 font-medium cursor-pointer">Message</label>
              <textarea
                required={true}
                placeholder="Message"
                cols="30"
                rows="5"
                className="input-field"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="w-full max-w-[500px] btn bg-purple text-white border-0 dark:border-white hover:bg-secondary dark:hover:border-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
