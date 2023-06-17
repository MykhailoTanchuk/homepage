import React from 'react';
import {BsCheckAll} from 'react-icons/bs';

const Experience = () => {
    const frontEndSkills = ['HTML', 'CSS', 'JavaScript', "TypeScript", 'React.js', 'Redux', 'Tailwind CSS', "Next.JS"];
    const frontExperience = [
        'Experienced',
        'Experienced',
        'Experienced',
        'Intermediate',
        'Experienced',
        'Intermediate',
        'Experienced',
        'Basic'
    ]
    const backEndSkills = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'tRPC', "Prisma"];
    const backExperience = [
        'Experienced',
        'Experienced',
        'Basic',
        'Basic',
        'Basic',
        'Intermediate',
        'Intermediate'
    ]
    const generalSkills = ["OOP", "Functional Programming", "SOLID", "SQL", "REST API", "Git", "Vercel", "Postman", "Figma"];
    const generalExperience = [
        'Experienced',
        'Experienced',
        'Intermediate',
        'Intermediate',
        'Experienced',
        'Experienced',
        'Experienced',
        'Experienced',
        'Basic'
    ]

    return (
        <div id='skills' className="pt-6 pb-20 mx-4 sm:mx-8 md:mx-16">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

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
