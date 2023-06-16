import {motion} from "framer-motion";
import CV from '../../assets/CV.pdf';
import HeaderSocials from "./HeaderSocials";
import Avatar from "./Avatar";
const Header = () => {
    return (
        <div className="flex flex-row">
            <div className="container flex flex-col items-center justify-center pt-24">
                <h5>My name is</h5>
                <h1>Mike Tanchuk</h1>
                <h4>I am a Full-Stack Developer</h4>

                <div className="p-4">
                    <a href={CV} download className="btn m-4">Download CV</a>
                    <a href="" className="btn">Contact Me</a>
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