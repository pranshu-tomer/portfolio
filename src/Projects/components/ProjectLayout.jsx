import React from "react";
import UseScreenSize from './../../hooks/UseScreenSize'
import {motion} from 'framer-motion'

const ProjectLayout = ({project}) => {

    const handleClick = (link) => {
        window.open(link , '_blank')
    }

    const item = {
        hidden: {opacity : 0,y:100},
        show : {opacity : 1,y:0}
    }

    const size = UseScreenSize()
    const isSmall = size >= 800
    const superSmall = size >= 400
 
    return (
        <>
        <motion.div variants={item} className={`${isSmall ? 'col-span-6' : ''} custom-bg p-8 w-full rounded-xl flex flex-col items-center justify-center space-y-4`}>
            <h2 className="font-witch text-accent text-5xl" >{project.name}</h2>
            <p className="font-light">{project.description}</p>
            <div className={`flex ${superSmall ? 'gap-10' : 'flex-col gap-4'} items-center justify-center w-full`}>
                {project.demolink ? <button onClick={() => handleClick(project.demolink)} className="custom-bg rounded-xl px-10 py-4">Live Demo</button> : ''}
                <button onClick={() => handleClick(project.repolink)} className="custom-bg rounded-xl px-10 py-4">GitHub Repository</button>
            </div>
        </motion.div>
        </>
    )
}

export default ProjectLayout


{/* <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted"/>
            <p>
                {new Date(date).toDateString()}
            </p> */}


       



// <div className="col-span-7 row-span-2 flex cursor-pointer items-center justify-between w-full relative rounded-lg p-6 custom-bg" style={{color: 'white'}}>
//             <div className="flex items-center justify-center space-x-2">
//                 
//             </div>
//         </div>