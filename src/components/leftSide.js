// Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faAward, faCheckToSlot, faClock, faStar, faDownload, faHeart, faPlusSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

// File
import '../App.css';

const LeftSide = () => {
    return(
        <div className="flex w-[20%] lg:w-2/12 h-full pl-3 lg:pl-6 pt-6 bg-[#21242D] overflow-y-auto no-scrollbar">
            <div className="flex-row w-full">
                {/* Logo */}
                <div className="w-full flex">
                    <img src={process.env.PUBLIC_URL + "/images/Logo.png"} className='w-8 lg:w-12 object-contain' alt="logo"/>
                </div>
                {/* all left side items */}
                <div className="flex flex-col gap-10 mt-12 w-full mb-6 text-sm lg:text-base xl:text-base font-serif">
                    <div className="flex flex-col w-full gap-5">
                        <label className="font-bold text-gray-500">Menu</label>
                        <a href="/" className="flex flex-row gap-4  text-teal-500">
                            <FontAwesomeIcon icon={faHome}/>
                            <label className="font-medium hidden sm:flex">Home</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faCompass}/>
                            <label className="font-medium hidden sm:flex">Discover</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faAward}/>
                            <label className="font-medium hidden sm:flex">Award</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faCheckToSlot}/>
                            <label className="font-medium hidden sm:flex">Celebrities</label>
                        </a>
                    </div>
                    <div className="flex flex-col w-full gap-5">
                        <label className="font-bold text-gray-500">Library</label>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faClock}/>
                            <label className="font-medium hidden sm:flex">Recent</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faStar}/>
                            <label className="font-medium hidden sm:flex">Top Rated</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faDownload}/>
                            <label className="font-medium hidden sm:flex">Downloaded</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faHeart}/>
                            <label className="font-medium hidden sm:flex">Playlists</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faPlusSquare}/>
                            <label className="font-medium hidden sm:flex">Watchlist</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faCheckSquare}/>
                            <label className="font-medium hidden sm:flex">Completed</label>
                        </a>
                    </div>
                    <div className="flex flex-col w-full gap-5 mb-5">
                        <label className="font-bold text-gray-500">Library</label>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faClock}/>
                            <label className="font-medium hidden sm:flex">Recent</label>
                        </a>
                        <a href="/" className="flex flex-row gap-4 text-white">
                            <FontAwesomeIcon icon={faStar}/>
                            <label className="font-medium hidden sm:flex">Top Rated</label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide;