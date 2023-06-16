import React from 'react';
import avatar from '../../assets/avatar.jpg';
const Avatar = () => {

    return (
        <img className="w-22rem h-22rem rounded-full border-4 border-gray-200 shadow-xl p-12"
             src={avatar}
             alt="avatar"
        />
    );
};

export default Avatar;
