import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
    
    return(
        <div className="flex relative w-full h-80">
            <div className="flex w-full h-full rounded-xl">
                <img src={process.env.PUBLIC_URL + '/images/slideshow.png'} className='w-full h-full object-cover' alt="movie"/>
            </div>
            <div className="absolute w-full h-full bg-black opacity-60"></div>
            <div className="absolute flex flex-col justify-between h-full w-full py-8">
                <label className="text-5xl font-extrabold text-white pl-8">The Crown</label>
                <div className="flex flex-row justify-between items-center px-6">
                    <div className="px-4 py-2 bg-white bg-opacity-25 rounded-xl">
                        <FontAwesomeIcon icon={faAngleLeft} className='text-xl text-white' />
                    </div>
                    <div className="px-4 py-2 bg-white bg-opacity-25 rounded-xl">
                        <FontAwesomeIcon icon={faAngleRight} className='text-xl text-white' />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center px-6">
                    <button className="flex flex-row bg-white bg-opacity-25 text-white items-center px-4 py-3 rounded-xl">
                        <FontAwesomeIcon icon={faPlus} className='text-xl'/>
                        <span className="text-lg font-medium pl-2">Watchlist</span>
                    </button>
                    <button className="flex flex-row bg-teal-500 text-black items-center px-4 py-3 rounded-xl">
                        <span className="text-lg font-medium pl-2">Watch Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider;