import { useTranslation } from 'react-i18next';
import { AiFillHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineContactMail } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';

const NavBar = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <nav className="flex items-center justify-between rounded-3xl z-50 gap-3 fixed w-max bg-purple-400 bg-opacity-25 p-2 m-1 left-1/2 -translate-x-1/2 bottom-8">
            <div className="flex gap-3">
                <a href="#header" className="bg-transparent p-1 rounded-full flex caret-blue-200 hover:bg-blue-950"> <AiFillHome size="1rem"/> </a>
                <a href="#about" className="bg-transparent p-1 rounded-full flex caret-blue-200 hover:bg-blue-950"> <SiAboutdotme size="1rem"/> </a>
                <a href="#skills" className="bg-transparent p-1 rounded-full flex caret-blue-200 hover:bg-blue-950"> <AiOutlineFundProjectionScreen size="1rem"/> </a>
                <a href="#portfolio" className="bg-transparent p-1 rounded-full flex caret-blue-200 hover:bg-blue-950"> <CgWebsite size={`1rem`}/></a>
                <a href="#contact" className="bg-transparent p-1 rounded-full flex caret-blue-200 hover:bg-blue-950"> <MdOutlineContactMail size={`1rem`}/></a>
                <a href="#certificates" className="bg-transparent p-1 rounded-full flex caret-blue-200 hover:bg-blue-950"> <TbCertificate size={`1rem`}/></a>
            </div>
            <div className="relative">
                <select
                    className="rounded-lg bg-transparent text-sm text-blue-500 hover:shadow-md"
                    onChange={(event) => changeLanguage(event.target.value)}
                >
                    <option value="en">EN</option>
                    <option value="ua">Укр</option>
                    {/* Add as many languages as you want */}
                </select>
            </div>
        </nav>
    );
};

export default NavBar;
