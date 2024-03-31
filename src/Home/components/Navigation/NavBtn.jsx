import { Github, TicketCheck, Home, Instagram, Linkedin, NotebookText, Palette, Phone, Twitter, User } from "lucide-react"
import React from "react"

const NavBtn = ({x,y,label,link,icon,newTab}) => {

    const getIcon = (icon) => {
        switch(icon) {
            case "home":
                return <Home className='w-full h-auto' strokeWidth={1.5} />
            case "about":
                return <User className='w-full h-auto' strokeWidth={1.5} />
            case "projects":
                return <Palette className='w-full h-auto' strokeWidth={1.5} />
            case "contact":
                return <Phone className='w-full h-auto' strokeWidth={1.5} />
            case "github":
                return <Github className='w-full h-auto' strokeWidth={1.5} />
            case "linkedin":
                return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
            case "instagram":
                return <Instagram className='w-full h-auto' strokeWidth={1.5} />
            case "resume":
                return <NotebookText className='w-full h-auto' strokeWidth={1.5} />
            case "certificate":
                return <TicketCheck className='w-full h-auto' strokeWidth={1.5} />
            default:
                return <Home className='w-full h-auto' strokeWidth={1.5} />
        }
    }

    const handleClick = (link,newTab) => {
        window.open(link, newTab ? '_blank' : '_self');
    }

    return (
        <div className="absolute cursor-pointer z-50"
        style={{transform: `translate(${x},${y})`, color: 'white'}}>
            <button onClick={() => handleClick(link,newTab)} className="text-[#e1e1e1] rounded-full flex items-center justify-center bg-background/20 border-accent-sm backdrop-blur-[8px] shadow-glass-inset hover:shadow-glass-sm">
                <span className="relative w-14 h-14 p-4 group-hover:pause animate-spin-slow-reverse group-hover:text-[#fefe5b]">
                    {getIcon(icon)}

                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
                    <span className="font-witch font-bold text-2xl absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-[#1b1b1b] text-[#e1e1e1] text-sm rounded-md shadow-lg whitespace-nowrap">
                        {label}
                    </span>
                </span>
            </button>
        </div>
    )
}

export default NavBtn

// className="rounded-full flex items-center justify-center" aria-label={label} name={label}

// href={link} target={newTab ? '_blank' : '_self'}

