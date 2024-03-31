import { Outlet } from "react-router-dom"
import bg from '/background/content-background.png'
import Sound from "../Sound"

function ContentLayout() {
    return (
        <>

        <main className="bg-fixed w-full flex  flex-col bg-cover px-6" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${bg})`, color: 'white'}}>
            <Outlet />
            <Sound />
        </main>

        </>
    )
}

export default ContentLayout


// items-center justify-center relative