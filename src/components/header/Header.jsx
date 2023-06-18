import {motion} from "framer-motion";
import CV from '../../assets/CV.pdf';
import HeaderSocials from "./HeaderSocials";
import Avatar from "./Avatar";
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t} = useTranslation();

    return (
        <div id='header' className="flex flex-row">
            <div className="container flex flex-col items-center justify-center pt-24">
                <h5> {t('greeting')} </h5>
                <h1> {t(`name`)}</h1>
                <h4>{t('title')}</h4>

                <div className="p-4">
                    <a href={CV} download className="btn m-4">{t(`download`)}</a>
                    <a href="#contact" className="btn m-4">{t('contact')}</a>
                </div>

                <HeaderSocials/>
            </div>
            <motion.div
                className="box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Avatar/>
            </motion.div>
        </div>

    )
}

export default Header;