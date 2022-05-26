// Module
import React from "react";

// Files
import Header from "./header";
import IndexContinue from "./continue";
import IndexTopRated from "./topRated";
import IndexGenre from "./genre";
import '../../App.css';

const IndexRightSide = ({showRightSide}) => {
    return(
        <div className={`${showRightSide ? 'absolute border-r-2 border-gray-400' : 'hidden' } z-40 lg:relative lg:flex flex-col w-[35%] lg:w-[24%] xl:w-[22%] h-full pl-6 pt-6 bg-[#21242D] gap-10 overflow-y-auto no-scrollbar pb-4`}>
            {/* Header */}
            <Header />
            {/* Continue */}
            <IndexContinue />
            {/* Top rated */}
            <IndexTopRated />
            {/* Genre */}
            <IndexGenre />
        </div>
    )
}

export default IndexRightSide;