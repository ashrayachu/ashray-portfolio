import React from 'react'
import Inner from './animationLayout/Inner'
import { GraduationCap, Briefcase, X } from "lucide-react"

function About() {
  return (
    <Inner>
      <div className=' w-full p-6 md:p-12 min-h-60 flex justify-center items-center'>
        <h1 className=' font-medium text-5xl '> About me</h1>
      </div>
      <div className='min-h-screen w-full flex flex-col justify-center'>
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          {/* Header with close button */}
          <div className="flex items-center justify-center mb-6">
            <div className="text-indigo-600 font-medium">— Education & Certification</div>

          </div>

          {/* Main title */}
          <h1 className="text-2xl md:text-5xl gap-2 font-bold mb-16 flex items-center justify-center">
            <span>My</span>
             <span className="text-indigo-600">Education & Certification</span>
          </h1>

          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Column */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-12">
                <div className="bg-indigo-600 rounded-full p-4">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold text-indigo-600">Education</h2>
              </div>

              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Master's in Computer Applications</h3>
                    <span className="bg-white px-4 py-2 rounded-full text-gray-700">2021 - 2023</span>
                  </div>
                  <div className='flex justify-between'>
                    <p className="text-gray-600 text-lg ">Shree Devi Institute of Technology, Mangalore</p>
                    <p className="text-gray-600 text-lg px-4">79%</p>
                  </div>

                </div>

                <div className="border-b border-gray-200 pb-8">
                  <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Bachelor's in Computer Applications</h3>
                    <span className="bg-white px-4 py-2 rounded-full text-gray-700">2018 - 2021</span>
                  </div>
                  <div className='flex justify-between'>
                    <p className="text-gray-600 text-lg ">SDM College of Business Management, Mangalore</p>
                    <p className="text-gray-600 text-lg px-4">69%</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Canara PU College, Mangalore</h3>
                    <span className="bg-white px-4 py-2 rounded-full text-gray-700">2016 - 2018</span>
                  </div>
                  <div className='flex justify-between'>
                    <p className="text-gray-600 text-lg ">PCMC - Physics, Chemistry, Maths, Computer Science</p>
                    <p className="text-gray-600 text-lg px-4">72%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Column */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-12">
                <div className="bg-indigo-600 rounded-full p-4">
                  <Briefcase size={32} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold text-indigo-600">Certification</h2>
              </div>

              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold"> TCS iON Career Edge - Young Professional</h3>
                    <span className="bg-white px-4 py-2 rounded-full text-gray-700">sept, 2023 - oct, 2023</span>
                  </div>
                  <p className="text-gray-600 text-lg">TCS Online Education Platform</p>
                </div>

                <div className="border-b border-gray-200 pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Web-Developer Internship</h3>
                    <span className="bg-white px-4 py-2 rounded-full text-gray-700">april, 2023 - june, 2023</span>
                  </div>
                  <p className="text-gray-600 text-lg">Accolade Tech Solutions</p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Internet Of Things Internship</h3>
                    <span className="bg-white px-4 py-2 rounded-full text-gray-700"> Nov, 2022 - Dec, 2022</span>
                  </div>
                  <p className="text-gray-600 text-lg">IQMetrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Inner>
  )
}

export default About