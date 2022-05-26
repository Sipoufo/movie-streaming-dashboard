// Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Files
import '../../../App.css';
import GenreItems from "./genreItems";

const IndexGenre = () => {
    return(
        <div id="continueCarousel" class="flex flex-col" data-carousel="static">
            <div className="flex flex-row w-full justify-between items-end pr-4 text-xs xl:text-sm">
                <div className="flex flex-row gap-4 items-center">
                    <label className="font-extrabold text-white text-base xl:text-lg">Genre</label>
                    <FontAwesomeIcon icon={faAngleLeft} className='text-gray-400 cursor-pointer group focus:outline-none' data-carousel-prev/>
                    <FontAwesomeIcon icon={faAngleRight} className='text-gray-400 cursor-pointer group focus:outline-none' data-carousel-next/>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <label className="font-semibold text-gray-400">see more</label>
                    <FontAwesomeIcon icon={faAngleRight} className='text-white'/>
                </div>
            </div>
            <div className="flex flex-col mt-8 w-full gap-4">
                <div className="flex gap-4 snap-x overflow-x-auto no-scrollbar w-full">
                    {/* Continue items */}
                    <GenreItems />
                    <GenreItems />
                    <GenreItems />
                </div>
                <div className="flex gap-4 snap-x overflow-x-auto no-scrollbar w-full">
                    {/* Continue items */}
                    <GenreItems />
                    <GenreItems />
                    <GenreItems />
                </div>
            </div>
        </div>
    )
};

export default IndexGenre;