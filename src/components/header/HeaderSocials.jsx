import React from 'react';
import {CiLinkedin} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';
const HeaderSocials = () => {
    return (
        <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/mike-tanchuk-1b478824a/" target="__blank" className="p-2">
                <CiLinkedin size="2em"/></a>
            <a href="https://github.com/DeepKross" target="__blank" className="p-2">
                <BsGithub size="2em"/></a>
        </div>
    );
};

export default HeaderSocials;
