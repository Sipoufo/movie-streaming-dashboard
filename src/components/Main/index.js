import React from "react";
import Header from "./header";
import IndexPopularTinyMovie from "./popularTinymovie";

// File
import '../../App.css';
import Slider from "./slider";

const IndexMain = () => {
    return(
        <div className="flex flex-col grow h-full pt-6 p-12 gap-16 overflow-y-auto no-scrollbar">
            {/* Menu items and search bar */}
            <Header />
            {/* Slider */}
            <Slider />
            {/* Popular movie */}
            <IndexPopularTinyMovie />
        </div>
    )
}

export default IndexMain;