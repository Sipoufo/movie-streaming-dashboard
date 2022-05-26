import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";


const PopularMovieItem = () => {
    return(
        <div className="w-full h-72 relative rounded-xl overflow-hidden">
            <div className="absolute w-full h-full">
                <img src={process.env.PUBLIC_URL + '/images/picture1.png'} className='w-full h-full object-cover object-center' alt="movie"/>
            </div>
            <div className="absolute bg-black opacity-50 w-full h-full"></div>
            <div className="absolute w-full h-full flex flex-col justify-between p-6">
                <div className="gap-2 flex flex-col w-full">
                    <label className="text-lg text-white font-extrabold">Loki</label>
                    <div className="flex flex-row gap-2">
                        <FontAwesomeIcon icon={faStar} className='text-lg text-teal-500' />
                        <FontAwesomeIcon icon={faStar} className='text-lg text-teal-500' />
                        <FontAwesomeIcon icon={faStar} className='text-lg text-teal-500' />
                        <FontAwesomeIcon icon={faStar} className='text-lg text-teal-500' />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row text-base text-gray-400 justify-between">
                        <label>6 Ep</label>
                        <label>Superhero</label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="w-3/12 py-3 flex justify-center items-center bg-gray-600 rounded-lg"><FontAwesomeIcon icon={faPlus} className='text-lg text-white font-extrabold' /></button>
                        <button className="w-8/12 py-3 flex justify-center items-center bg-teal-500 rounded-lg font-extrabold">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularMovieItem;