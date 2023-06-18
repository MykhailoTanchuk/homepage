import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {BiMailSend} from 'react-icons/bi';
import {BsTelegram} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import emailjs from 'emailjs-com';
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {t} = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {

        emailjs.sendForm('service_yoitn3j', 'template_oznaupn', form.current, 'M4WptDbO7Xqx8hkP-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="pt-6 pb-20 mx-4 sm:mx-8 md:mx-16">
            <h2 className="text-2xl font-bold mb-6">{t(`contact_title`)}</h2>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col md:w-1/2 space-y-6">
                    <a
                        href="https://t.me/DeepKross"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-6 bg-blue-500 bg-opacity-40 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105"
                    >
                        {t(`contact_title`)} {t(`on`)} <BsTelegram className={`mx-2`} size={`2rem`}/> Telegram
                    </a>
                    <a
                        href="https://www.instagram.com/mishka.tanch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-6 bg-yellow-500 bg-opacity-60 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105"
                    >
                        {t(`contact_title`)} {t(`on`)} <AiFillInstagram className={`mx-2`} size={`2rem`}/> Instagram
                    </a>

                </div>

                <form onSubmit={handleSubmit(sendEmail)} ref={form} className="flex flex-col md:w-1/2 space-y-6">
                    <input
                        {...register("fullName", { required: "Full Name is required." })}
                        placeholder={t(`fullName`)}
                        name="fullName"
                        minLength={1}
                        className="shadow-lg shadow-cyan-500/50 border rounded-md p-3 bg-transparent"
                    />
                    {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}

                    <input
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        placeholder={t(`email`)}
                        name="email"
                        className="shadow-lg shadow-cyan-500/50 border rounded-md p-3 bg-transparent"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input
                        {...register("theme", { required: "Theme is required." })}
                        placeholder={t(`theme`)}
                        name="theme"
                        minLength={1}
                        className="shadow-lg shadow-cyan-500/50 border rounded-md p-3 bg-transparent"
                    />
                    {errors.theme && <span className="text-red-500">{errors.theme.message}</span>}

                    <textarea
                        {...register("message", { required: "Message is required.", minLength: {value: 5, message: "Message must be at least 5 characters long."}})}
                        rows="4"
                        placeholder={t(`message`)}
                        name="message"
                        className="shadow-lg shadow-cyan-500/50 border rounded-md p-3 bg-transparent"
                    />
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}

                    <button type="submit" className="p-2 flex flex-row w-max bg-yellow-500 rounded-lg text-white duration-300 hover:scale-105 hover:bg-blue-600">
                        <BiMailSend className={`mx-4`} size={`2rem`}/> <p className={`px-4`}> {t(`send`)}</p>
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;

