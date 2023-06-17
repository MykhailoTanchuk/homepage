import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-black bg-opacity-50 py-6 px-4 shadow-lg mt-10 transition-colors duration-500">
            <h2 className="text-2xl text-white font-bold mb-2">Mike Tanchuk</h2>
            <p className="text-white mb-4">Full Stack Developer</p>

            <div className="flex justify-start space-x-4 mb-4">
                <a
                    href="https://t.me/DeepKross"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transform transition-transform duration-500 hover:scale-105"
                >
                    <FaTelegramPlane />
                </a>
                <a
                    href="https://www.instagram.com/mishka.tanch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transform transition-transform duration-500 hover:scale-105"
                >
                    <FaInstagram />
                </a>
            </div>

            <p className="text-white">I look forward to hearing from you. Please feel free to reach out with any questions.</p>
        </div>
    );
};

export default Footer;
