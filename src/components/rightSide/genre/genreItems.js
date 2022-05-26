import React from "react";

const GenreItems =() => {
    return(
        <div className="relative flex-shrink-0 rounded-xl bg-[#16181E] w-48 h-28 overflow-hidden">
            <img src={process.env.PUBLIC_URL + '/images/picture7.png'} className='absolute top-0 left-0 w-full h-full object-cover' alt="rate"/>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute flex p-4 w-full h-full justify-center items-center">
                <label className="text-xl text-white font-extrabold">Drama</label>
            </div>
        </div>
    )
};

export default GenreItems;