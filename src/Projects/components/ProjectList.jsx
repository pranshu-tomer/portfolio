import ProjectLayout from "./ProjectLayout"

const ProjectList = ({projects}) => {

    return (
        <>
            <section className="w-full py-5">
                <div className="grid grid-cols-12 gap-8 w-full">
                    {projects.map((project) => 
                        (
                            <>
                                <ProjectLayout key={project.id} project={project}/>
                            </>
                        )
                    )}
                </div>
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