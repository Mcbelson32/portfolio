import React from "react";

const Contact = () => {
  return (
    <section
      className="container h-auto xl:h-screen w-full py-20 2xl:py-32 dark:text-light"
      id="contact"
    >
      <h2 className="text-center text-3xl font-bold">
        Contact <span className="text-purple">Me</span>
      </h2>
      <p className="text-[13px] font-medium opacity-60">Get In Touch</p>
      <div class="form-card1 mt-8 px-0 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="col-span-1">lorem</div>
        <div class="form-card2 col-span-1 lg:px-5">
          <form class="form" method="POST" className="w-full">
            <div class="form-field">
              <label htmlFor="name">Name</label>
              <input
                required=""
                placeholder="John"
                class="input-field"
                type="text"
                name="name"
              />
            </div>

            <div class="form-field">
              <label htmlFor="name">Email</label>
              <input
                required=""
                placeholder="abc@example.com"
                class="input-field"
                type="email"
                name="email"
              />
            </div>

            <div class="form-field">
              <label htmlFor="name">Subject</label>
              <input
                required=""
                placeholder="something"
                class="input-field"
                type="text"
                name="subject"
              />
            </div>

            <div class="form-field">
              <label htmlFor="name">Message</label>
              <textarea
                required=""
                placeholder="Message"
                cols="30"
                rows="5"
                class="input-field"
                name="message"
              ></textarea>
            </div>

            <button class="w-full btn bg-purple text-white border-0 dark:border-white hover:bg-secondary dark:hover:border-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
