// Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return(
        <div className="flex pr-6">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex relative bg-gray-600 rounded-xl p-3">
                    <FontAwesomeIcon icon={faBell} className='text-xl xl:text-3xl text-white' />
                    <FontAwesomeIcon icon={faCircle} className='absolute text-[8px] xl:text-xs text-teal-500 right-3' />
                </div>
                <div className="flex flex-row grow justify-end gap-2 items-center text-sm xl:1text-xl">
                    <label className="text-white font-bold font-serif">Samantha</label>
                    <FontAwesomeIcon icon={faAngleDown} className=' text-white' />
                    <img src={process.env.PUBLIC_URL + '/images/profile.png'} className="w-10 xl:w-14 object-contain rounded-xl" alt="Profile"/>
                </div>
            </div>
        </div>
    )
};

export default Header;