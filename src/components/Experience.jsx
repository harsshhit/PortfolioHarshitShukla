import { Briefcase } from "lucide-react";
import { Code, Star } from "lucide-react";
import { experienceData } from "../data/data";

function ExperienceCard({ title, company, duration, description, tags }) {
  const [startDate, endDate] = duration.split(" - ");

  return (
    <div className="group mb-12 ml-8 relative pl-12 md:pl-24">
      {/* Timeline Element */}
      <div className="absolute left-0 top-0 h-full w-8 md:w-16 flex items-center justify-center">
        <div className="h-full w-1 bg-gradient-to-t from-blue-500/30 to-blue-500 relative">
          {/* End Date Marker */}
          <div className="absolute -left-16 md:-left-20 top-0 bg-blue-500/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-blue-400 text-xs md:text-sm whitespace-nowrap">
            {endDate}
          </div>
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full -left-1.5 top-0" />

          {/* Start Date Marker */}
          <div className="absolute -left-16 md:-left-20 bottom-0 bg-blue-500/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-blue-400 text-xs md:text-sm whitespace-nowrap">
            {startDate}
          </div>
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full -left-1.5 bottom-0" />

          {/* Progress Line */}
          <div className="absolute left-0 bottom-0 w-1 bg-blue-500 h-full" />
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-900/30 to-black max-w-[64rem] border-2 border-blue-400/50 rounded-lg overflow-hidden sm:pr-8 relative sm:h-96 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="p-4 md:p-8 relative z-10">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="p-3 md:p-4 bg-blue-500/30 rounded-2xl self-start">
                <Briefcase className="text-blue-400 w-6 h-6 md:w-7 md:h-7" />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                  {title}
                </h3>
                <p className="text-blue-400 text-base md:text-lg">{company}</p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 pl-2 md:pl-4">
              {description.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-sm md:text-base flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full inline-block" />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            {tags?.length > 0 && (
              <ul className="flex flex-wrap gap-2 md:gap-3 pl-2 md:pl-4">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-blue-500/10 backdrop-blur-sm text-blue-300 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative  text-white py-12 md:py-16 lg:py-44 px-4 md:px-8 lg:px-48 flex justify-center items-center overflow-hidden"
    >
    
      <div className="container mx-auto flex flex-col items-center relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white flex items-center justify-center gap-2 md:gap-4">
            <Code className="text-white w-8 h-8 md:w-10 md:h-10" />
            Experience
            <Star className="text-yellow-400 w-8 h-8 md:w-10 md:h-10" />
          </h2>
          <p className="text-gray-300 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            My professional journey and contributions in the tech industry
          </p>
        </div>

        {/* Experience Container */}
        <div className="w-full max-w-6xl space-y-8 md:space-y-12">
          {experienceData.map((experience) => (
            <div key={experience.id}>
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
