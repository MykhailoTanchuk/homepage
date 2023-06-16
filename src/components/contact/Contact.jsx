import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        // Here you can handle the form data
    }

    return (
        <div className="pt-6 pb-20 mx-4 sm:mx-8 md:mx-16">
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col md:w-1/2 space-y-6">
                    <a
                        href="https://t.me/DeepKross"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-6 bg-blue-500 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105"
                    >
                        Contact Me on Telegram
                    </a>
                    <a
                        href="mailto:email@example.com"
                        className="flex items-center justify-center p-6 bg-red-500 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105"
                    >
                        Contact Me on Email
                    </a>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-1/2 space-y-6">
                    <input
                        {...register("fullName", { required: true })}
                        placeholder="Full Name"
                        className="p-2 border rounded-lg"
                    />
                    {errors.fullName && <span className="text-red-500">Full Name is required</span>}

                    <input
                        {...register("theme", { required: true })}
                        placeholder="Theme"
                        className="p-2 border rounded-lg"
                    />
                    {errors.theme && <span className="text-red-500">Theme is required</span>}

                    <textarea
                        {...register("message", { required: true })}
                        placeholder="Message"
                        className="p-2 border rounded-lg"
                    />
                    {errors.message && <span className="text-red-500">Message is required</span>}

                    <button type="submit" className="p-2 bg-green-500 rounded-lg text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

