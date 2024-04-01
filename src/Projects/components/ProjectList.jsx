
import ProjectLayout from "./ProjectLayout"
import UseScreenSize from './../../hooks/UseScreenSize'
import {motion} from 'framer-motion'

const ProjectList = ({projects}) => {

    const size = UseScreenSize()
    const isSmall = size >= 800

    const container = {
        hidden : {opacity:0},
        show : {
            opacity : 1,
            transition : {
                staggerChildren : 0.3,
                delayChildren : 1.5
            }
        }
    }

    return (
        <>
            <section className="w-full py-5">
                <motion.div 
                
                variants={container}
                initial='hidden'
                animate='show'
                
                className={`${isSmall ? 'grid grid-cols-12' : 'flex flex-col'} gap-8 w-full`}>
                    {projects.map((project) => 
                        (
                            <>
                                <ProjectLayout key={project.id} project={project}/>
                            </>
                        )
                    )}
                </motion.div>
            </section>
        </>
    )
}

export default ProjectList


{/* <>
        <div className="mt-10 w-full max-w-4xl px-16 space-y-8 flex-col items-center">
            {projects.map((project,index) => {
                return <ProjectLayout key={index} {...project} />
            })}
        </div>
        <Repo />
        </> */}
