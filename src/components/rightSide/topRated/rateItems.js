import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const RateItem =() => {
    return(
        <div className="relative flex-shrink-0 rounded-xl bg-[#16181E] w-48 h-28 overflow-hidden">
            <img src={process.env.PUBLIC_URL + '/images/picture6.png'} className='absolute top-0 left-0 w-full h-full object-cover' alt="rate"/>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute flex flex-col p-3 w-full">
                <label className="text-sm xl:text-sm text-white font-extrabold">Supernatural</label>
                <div className="mt-3 flex flex-row justify-between">
                    <label className="text-xs text-gray-400 font-bold">320 Ep</label>
                    <label className="text-xs text-gray-400 font-bold">Horror, Fantasy</label>
                </div>
                <div className="mt-2 flex flex-row justify-between">
                    <button className="w-3/12 py-2 flex justify-center items-center bg-gray-600 rounded-lg"><FontAwesomeIcon icon={faPlus} className='text-xs text-white font-extrabold' /></button>
                    <button className="w-8/12 py-2 flex justify-center items-center bg-teal-500 rounded-lg font-bold text-sm">Watch</button>
                </div>
            </div>
        </div>
    )
};

export default RateItem;