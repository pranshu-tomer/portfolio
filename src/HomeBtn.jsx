import { Home } from "lucide-react";
import React from "react";

const HomeBtn = () => {

    const handleClick = () => {
        window.open('/','_self')
    }


    return (
        <button onClick={handleClick} className="text-[#e1e1e1] rounded-full fixed top-4 left-4 w-fit self-start flex items-center justify-center bg-[#1b1b1b]/20 border-[#fefe5b]/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm">
                <span className="relative w-14 h-14 p-4 group-hover:text-[#fefe5b]">
                    <Home className="w-full h-auto" strokeWidth={1.5}/>

                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
                    <span className="font-witch font-bold text-2xl absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-[#1b1b1b] text-[#e1e1e1] text-sm rounded-md shadow-lg whitespace-nowrap">
                        Home
                    </span>
                </span>
            </button>
    )
}

export default HomeBtn