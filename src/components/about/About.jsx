import React, {Component} from 'react';
import about_photo from '../../assets/about_photo.jpg';

class About extends Component {
    render() {
        return (
            <div id='about' className="pt-6 pb-20 mx-4 sm:mx-8 md:mx-16">
                <h2 className="text-2xl font-bold mb-6">About Me</h2>

                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0 sm:pr-8 bg-blue-600 bg-opacity-25 rounded-3xl">
                        <img className="w-full h-auto rounded-lg shadow-lg hover:rotate-6 transition" src={about_photo} alt="Me myself and I"/>
                    </div>

                    <div className="w-full sm:w-2/3 text-justify text-white-800 pl-2">
                        <p className="mb-4">Enthusiastic and dedicated student with B2 (Upper-Intermediate) English level. Keen on technologies and entrepreneurship.</p>
                        <p className="mb-4">Learning new things, communicating with people, solving problems and coding is what truly drives me. Feeling great desire to gain more knowledge and skills in IT sphere.</p>
                        <p className="mb-4">I am seeking a challenging role in a dynamic and innovative organization that allows me to learn and grow my technical skills while contributing to the development of high-quality software products.</p>
                        <p className="mb-4">I have 5 years of non-commercial experience in coding and still I want to learn and develop my skills. You can see some Pet Projects on my GitHub account.</p>
                        <h2 className="text-2xl font-bold mt-12 mb-6">Education</h2>
                        <h3 className="text-xl font-semibold mb-2">Bachelor, National Taras Shevchenko University of Kyiv, Kyiv</h3>
                        <p className="text-white-700 mb-2">September 2021 — June 2025</p>
                        <p className="text-white-800 mb-4">Enrolled into Faculty of Computer Science and Cybernetics Taras Shevchenko National University of Kyiv. Relevant coursework in Web Development, Software Engineering, and Database Systems.</p>

                    </div>
                </div>

            </div>

        );
    }
}

export default About;