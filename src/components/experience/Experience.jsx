import React from 'react';
import {BsCheckAll} from 'react-icons/bs';
import { useTranslation} from "react-i18next";

const Experience = () => {
    const {t} = useTranslation();

    const frontEndSkills = ['HTML5', 'CSS3', "SCSS", 'JavaScript', "TypeScript", 'React.js', 'Redux', 'Tailwind CSS',
        "Next.JS", "Zustand", "React Query"];
    const frontExperience = [
        t(`experienced`),
        t(`experienced`),
        t(`experienced`),
        t(`experienced`),
        t(`intermediate`),
        t(`experienced`),
        t(`intermediate`),
        t(`experienced`),
        t(`intermediate`),
        t(`intermediate`),
        t(`intermediate`),
    ]
    const backEndSkills = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'tRPC', "Prisma", "Mongoose", "OPENAI API", "Swagger", "Nest.js"];
    const backExperience = [
        t(`experienced`),
        t(`experienced`),
        t(`basic`),
        t(`basic`),
        t(`basic`),
        t(`intermediate`),
        t(`intermediate`),
        t(`intermediate`),
        t(`experienced`),
        t(`intermediate`),
        t(`basic`),
    ]
    const generalSkills = ["OOP", "Data Structures", "Functional Programming", "SOLID", "SQL", "REST API", "Git", "Vercel", "Postman", "Figma", "AWS S3"];
    const generalExperience = [
        t(`experienced`),
        t(`experienced`),
        t(`intermediate`),
        t(`intermediate`),
        t(`experienced`),
        t(`experienced`),
        t(`experienced`),
        t(`experienced`),
        t(`intermediate`),
        t(`basic`),
        t(`experienced`),
    ]

    return (
        <div id='skills' className="pt-6 pb-20 mx-4 sm:mx-8 md:mx-16">
            <h2 className="text-2xl font-bold mb-6">{t(`skills_title`)}</h2>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col lg:w-1/2 bg-blue-700 bg-opacity-20 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Front-End</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {frontEndSkills.map((skill, index) => (
                            <div key={index}>
                                <p  className="text-yellow-400"><BsCheckAll/>{skill}</p>
                                <p className="text-xs text-gray-400">{frontExperience[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 bg-blue-700 bg-opacity-20 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Back-End</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {backEndSkills.map((skill, index) => (
                            <div key={index}>
                                <p  className="text-emerald-400"><BsCheckAll/>{skill}</p>
                                <p className="text-xs text-gray-400">{backExperience[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 bg-blue-700 bg-opacity-20 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">General IT skills</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {generalSkills.map((skill, index) => (
                            <div key={index}>
                                <p  className="text-fuchsia-500"><BsCheckAll/>{skill}</p>
                                <p className="text-xs text-gray-400">{generalExperience[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;
