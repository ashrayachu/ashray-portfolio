import React from 'react'
import Inner from './animationLayout/inner'

import { CodeXml, TabletSmartphone, TvMinimal } from "lucide-react"


function Services() {
  const services = [
    {
      title: "Full Stack Development",
      icon: (
        <TvMinimal />

      ),
      desc:"ReactJs, TailwindCSS, Materail UI, Redux, MongoDB, SQL, NodeJs, Express, Python "


    },
    {
      title: "Frontend Developmenet",
      icon: (
        < TabletSmartphone />
      ),
      desc:"ReactJs, TailwindCSS, Materail UI "


    },
    {
      title: "Backend Development",
      icon: (
        <CodeXml />

      ),
      desc:"NodeJs, MonogDB, Rest API, MySQL"


    },
  ];
  return (
    <Inner>
      <div className=' w-full p-6 md:p-12 min-h-60 flex justify-center items-center'>
        <h1 className=' font-medium text-5xl '>Services & Skills </h1>
      </div>
      <section className="min-h-screen bg-custom-gradient p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-white  text-2xl mb-2">— Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                My <span className="text-customGreen">Services</span>
              </h2>
            </div>

          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all 
                  hover:scale-105 bg-white/10 hover:bg-white/20 text-white`}

              >
                <div
                  className={`mb-4 p-10 rounded-full hover:bg-purple-100 bg-white/10`}>
                  {service.icon}

                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="mb-6 text-sm opacity-80">
                  {service.desc}
                </p>
                <button
                  className={`flex items-center gap-2 text-sm hover:text-customGreen`}
                >
                  Learn more
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Inner>

  )
}

export default Services