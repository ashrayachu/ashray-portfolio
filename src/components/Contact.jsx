import React from 'react'
import Inner from './animationLayout/inner'

import { Mail, MapPin, Phone } from "lucide-react" 



function Contact() {
  return (
    <Inner>
      <div className=' w-full p-6 md:p-12 min-h-60 flex justify-center items-center'>
        <h1 className=' font-medium text-5xl '>Contact</h1>
      </div>
      <div className=" bg-custom-gradient p-6 md:p-12">
        <div className="max-w-7xl text-white mx-auto grid md:grid-cols-2  gap-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="  text-2xl "><span className=' text-customGreen '> - </span>Contact Us</h2>
              <h1 className=" text-4xl md:text-5xl font-bold">
                Let's{" "}
                <span className="text-customGreen">
                  Connect & Collaborate
                </span>
              </h1>
              <p className="text-gray-300">
                Contact me using the number or use the form to send a message. I will get back to you ASAP.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+91 7349712089</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <span>ashraycp07@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>Mangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          <form action="https://formsubmit.co/ashraycp07@gmail.com" method="POST" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="formInput "
                placeholder="First Name *"
                required
              />
              <input
                className="formInput"
                placeholder="Last Name *"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="formInput"
                type="email"
                placeholder="Email *"
                required
              />
              <input
                className="formInput"
                type="tel"
                placeholder="Phone Number *"
                required
              />
            </div>
            <input
              className="formInput flex w-full"
              placeholder="Subject *"
              required
            />
            <textarea
              className="formInput flex w-full min-h-[200px]"
              placeholder="Message *"
              required
            />
            <div className="flex justify-start">
              <button className="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Inner>
  )
}

export default Contact