"use client";
import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experienceList: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "Jan 2023 – Present",
    description: "Lead the UI/UX team, optimize performance, and mentor junior devs."
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions",
    duration: "Jun 2020 – Dec 2022",
    description: "Contributed to various client projects using React, Next.js, and Tailwind."
  },
  {
    title: "Junior Developer",
    company: "Startup XYZ",
    duration: "Sep 2018 – May 2020",
    description: "Built landing pages, handled bug fixes, and assisted with QA."
  },
];

export default function Experiences() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        Experience
      </h1>
      
      <div className="relative border-l border-gray-300 dark:border-gray-600 ml-4">
        {experienceList.map((exp, idx) => (
          <div
            key={idx}
            // group -> let's children respond to hover
            className="
              group
              relative
              mb-10
              ml-8
              p-4
              rounded-md
              transition-all
              duration-300
              hover:shadow-lg
              hover:-translate-y-1
              hover:bg-gray-50
              dark:hover:bg-gray-800
            "
          >
            {/* The timeline marker */}
            <span
              className="
                absolute
                -left-4
                top-4
                h-4
                w-4
                rounded-full
                bg-blue-500
                ring-2
                ring-white
                dark:ring-gray-800
                transition-transform
                duration-300
                group-hover:scale-110
              "
            ></span>
            
            {/* Experience Title & Company */}
            <h2 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {exp.title} @ <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                {exp.company}
              </span>
            </h2>

            {/* Duration */}
            <p className="text-sm text-gray-500 mb-2 italic">
              {exp.duration}
            </p>

            {/* Description */}
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
