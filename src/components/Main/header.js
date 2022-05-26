import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({showRightSide, setShowRightSide}) => {
    const changeStateRightSide = (e) => {
        e.preventDefault();
        setShowRightSide(!showRightSide);
    }

    return(
        <div className="flex w-full">
            <div className="flex flex-row w-full justify-between items-center">
                <ul className="flex flex-row w-10/12 sm:w-5/12 justify-between text-sm lg:text-xl text-white font-semibold">
                    <li><a href="/">Movies</a></li>
                    <li><a href="/" className="text-teal-500 underline underline-offset-[12px] decoration-2 text-extrabold">TV Shows</a></li>
                    <li><a href="/">Amie</a></li>
                </ul>
                <div className="hidden sm:flex flex-row px-4 py-2 bg-[#21242D] justify-between items-center w-5/12 rounded-xl border border-[#242731]">
                    <div className="flex flex-row w-10/12 justify-between items-center">
                        <FontAwesomeIcon icon={faSearch} className='text-sm lg:text-xl text-gray-400' />
                        <input type='text' className="bg-[#21242D] text-sm lg:text-xl text-gray-400 w-10/12 border border-[#21242D]" placeholder="Search"/>
                    </div>
                    <FontAwesomeIcon icon={faFilter} className='text-sm lg:text-xl text-gray-400' />
                </div>
                <FontAwesomeIcon icon={faBars} className='text-white text-xl lg:hidden' onClick={changeStateRightSide} />
            </div>
        </div>
    )
}

export default Header;