
import Inner from './animationLayout/Inner'
import projects from '../lib/projects'




function Projects() {
  return (
    <Inner>
      <div className=' w-full p-2 md:p-12 min-h-60 flex justify-center items-center'>
        <h1 className=' font-medium text-5xl '> Projects</h1>
      </div>
      <div className="min-h-screen bg-custom-gradient p-2 md:p-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start items-center mb-10">
            <div>
              <p className="text-white  text-2xl mb-2"><span className=' text-customGreen '> - </span> Projects</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                My <span className="text-customGreen">Latest Projects</span>
              </h1>
            </div>
          </div>

          {/* Project Card */}
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm mb-10 rounded-3xl px-2 py-5 md:p-5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src={project.image}
                    alt="Podcast App Screenshots"
                    className="rounded-2xl w-full"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {project.lang.map((item, index) => (
                      <span key={index} className="bg-customGreen text-black px-4 py-2 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-bold">
                    {project.name}
                  </h2>
                  <p className="text-gray-300">
                    {project.desc}
                  </p>
                  <div className='flex gap-2'>
                    {project.live && (
                      <button className="px-5 py-2 rounded-full bg-white hover:bg-neutral-200 "
                      onClick={()=>window.open(project.live)}
                      >
                        Live
                      </button>
                    )
                    }
                    <button className="px-5 py-2 rounded-full bg-white hover:bg-neutral-200 "
                    onClick={()=>window.open(project.gitLink)}
                    >
                      GitHub
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Inner>
  )
}

export default Projects