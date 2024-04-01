import ProjectList from "./Projects/components/ProjectList"
import { projectsData } from "./data"
import HomeBtn from "./HomeBtn"
import UseScreenSize from "./hooks/UseScreenSize"

function Projects() {
    
    const size = UseScreenSize()
    const superSmall = size >= 400

    return (
        <>
            <HomeBtn />
            <div className="flex items-center justify-center font-witch text-accent text-center py-5 h-screen">
                <h1 className={`${superSmall ? 'text-9xl' : 'text-7xl'}`}>Projects</h1>
            </div>
            <ProjectList projects={projectsData}/>
        </>
    )
}

export default Projects