import { projectsData } from "./data"
import HomeBtn from "./HomeBtn"
import UseScreenSize from "./hooks/UseScreenSize"

function Certicate() {
    
    const size = UseScreenSize()
    const isSmall = size >= 600

    return (
        <>
            <HomeBtn />
            <div className="flex items-center justify-center font-witch text-accent text-center py-5 h-screen">
                <h1 className={`${isSmall ? 'text-9xl' : 'text-7xl'}`}>Certicates</h1>
            </div>
            <div className={`${isSmall ? 'grid grid-cols-12 space-y-8' : 'flex flex-col'} gap-8`}>
                <div className="rounded-xl p-5 col-span-4 custom-bg">
                    <a href="./certificates/SIH2023.jpg" target="_blank"><img src="./certificates/SIH2023.jpg" alt="" /></a>
                </div>
                <div className="rounded-xl p-5 col-span-4 custom-bg">
                    <a href="./certificates/delta.jpg" target="_blank"><img src="./certificates/delta.jpg" alt="" /></a>
                </div>
                <div className="rounded-xl p-5 col-span-4 custom-bg">
                    <a href="./certificates/rinex.jpg" target="_blank"><img src="./certificates/rinex.jpg" alt="" /></a>
                </div>
                <div className="rounded-xl p-5 col-span-4 custom-bg">
                    <a href="./certificates/internship.jpg" target="_blank"><img src="./certificates/internship.jpg" alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default Certicate