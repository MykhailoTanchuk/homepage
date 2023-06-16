import React from 'react';
import {AiFillHome, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import './Nav.module.css';
const Nav = () => {

    return (
        <nav className="flex flex-row rounded-3xl gap-3 fixed w-max bg-purple-400 bg-opacity-25 p-2 m-1 left-1/2 -translate-x-1/2 bottom-8">
            <a href="#header" className="bg-transparent p-2 rounded-full flex caret-blue-200 hover:bg-blue-950"> <AiFillHome size="2rem"/> </a>
            <a href="#about" className="bg-transparent p-2 rounded-full flex caret-blue-200 hover:bg-blue-950"> <SiAboutdotme size="2rem"/> </a>
            <a href="#experience" className="bg-transparent p-2 rounded-full flex caret-blue-200 hover:bg-blue-950"> <AiOutlineFundProjectionScreen size="2rem"/> </a>
            <a href="" className="bg-transparent p-2 rounded-full flex caret-blue-200 hover:bg-blue-950"></a>

        </nav>
    );
};

export default Nav;
