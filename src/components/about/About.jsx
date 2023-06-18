import React, {Component} from 'react';
import about_photo from '../../assets/about_photo.jpg';
import {useTranslation} from "react-i18next";

const About = () => {

        const {t} = useTranslation();
        return (
            <div id='about' className="pt-6 pb-20 mx-4 sm:mx-8 md:mx-16">
                <h2 className="text-2xl font-bold mb-6">{t(`about_title`)}</h2>

                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0 sm:pr-8 bg-blue-600 bg-opacity-25 rounded-3xl">
                        <img className="w-full h-auto rounded-lg shadow-lg hover:rotate-6 transition" src={about_photo} alt="Me myself and I"/>
                    </div>

                    <div className="w-full sm:w-2/3 text-justify text-white-800 pl-2">
                        <p className="mb-4">{t(`about_text1`)}</p>
                        <p className="mb-4">{t(`about_text2`)}</p>
                        <p className="mb-4">{t(`about_text3`)}</p>
                        <p className="mb-4">{t(`about_text4`)}</p>
                        <p className="mb-4">{t(`about_text5`)}</p>

                    </div>

                </div>
                <h2 className="text-2xl font-bold mt-12 mb-6">{t(`education_title`)}</h2>
                <h3 className="text-xl font-semibold mb-2">{t(`education_text1`)}</h3>
                <p className="text-white-700 mb-2">{t(`education_date`)}</p>
                <p className="text-white-800 mb-4">{t(`education_text2`)}</p>
            </div>

        );
}

export default About;