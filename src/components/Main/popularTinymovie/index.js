import React from "react";
import PopularMovieItem from "./popularMovieItem";
const IndexPopularTinyMovie = () => {
    return(
        <div className="flex w-full">
            <div className="flex flex-col w-full">
                <label className="ext-lg xl:text-xl text-white font-extrabold">Popular on TinyMoviez</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full mt-8 gap-6">
                    <PopularMovieItem />
                    <PopularMovieItem />
                    <PopularMovieItem />
                </div>
            </div>
        </div>
    )
}

export default IndexPopularTinyMovie;