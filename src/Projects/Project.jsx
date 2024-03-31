import ProjectList from "./components/ProjectList"
import { projectsData } from "../data"
import HomeBtn from "../HomeBtn"

function Projects() {
    
    return (
        <>
            <HomeBtn />
            <div className="flex items-center justify-center font-witch text-accent text-9xl text-center py-5 h-screen">
                <h1>Projects</h1>
            </div>
            <ProjectList projects={projectsData}/>
        </>
    )
}

export default Projects