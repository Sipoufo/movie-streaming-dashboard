import React from "react";

const ContinueItem =() => {
    return(
        <div className="flex-shrink-0 rounded-xl bg-[#16181E] p-2">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <img src={process.env.PUBLIC_URL + '/images/picture5.png'} className='w-10 xl:w-16 rounded-xl object-cover' alt="WandaVision"/>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm xl:text-sm text-white font-extrabold">WandaVision</label>
                        <label className="text-xs xl:text-sm text-gray-600 font-bold">1 Episode left</label>
                        <div class="w-24 xl:w-28 bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-teal-500 h-1 rounded-full w-11/12"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2 text-xs">
                    <button className="px-1 xl:px-2 py-2 bg-gray-600 text-white rounded-md font-bold">Drop</button>
                    <button className="bg-teal-500 px-4 py-2 grow rounded-md font-bold">Watch</button>
                </div>
            </div>

        </div>
    )
};

export default ContinueItem;