import React from "react";
import Header from "./header";
import IndexPopularTinyMovie from "./popularTinymovie";

// File
import '../../App.css';
import Slider from "./slider";

const IndexMain = ({showRightSide, setShowRightSide}) => {
    const changeStateRightSide = (e) => {
        e.preventDefault();
        setShowRightSide(!showRightSide);
    }
    return(
        <div className='relative flex grow'>
            <div className={`${showRightSide? '' : 'hidden'} flex z-30 absolute w-full h-full bg-black bg-opacity-80`} onClick={changeStateRightSide}></div>
            <div className="flex z-10 flex-col absolute w-full h-full pt-6 p-12 gap-16 overflow-y-auto no-scrollbar">
                {/* Menu items and search bar */}
                <Header showRightSide={showRightSide} setShowRightSide={setShowRightSide} />
                {/* Slider */}
                <Slider />
                {/* Popular movie */}
                <IndexPopularTinyMovie />
            </div>
        </div>
    )
}

export default IndexMain;