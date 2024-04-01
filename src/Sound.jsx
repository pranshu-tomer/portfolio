
import { Volume2 , VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Sound() {

    const audioRef = useRef(null)

    const [isPlaying,setIsPlaying] = useState(false)

    const handleFirstUser = () => {
        const consent = localStorage.getItem('musicConsent')
        if(consent === 'true' && !isPlaying){
            audioRef.current.play()
            setIsPlaying(true)
        }

        ['click','keydown','touchstart'].forEach((event) => {
            document.removeEventListener(event,handleFirstUser)
        })
    }

    useEffect(() => {
        const consent = localStorage.getItem('musicConsent')
        if(consent){
            setIsPlaying(consent === 'true')
            if(consent === 'true'){
                ['click','keydown','touchstart'].forEach((event) => {
                    document.addEventListener(event,handleFirstUser)
                })
            }
        }
    })

    const toggle = () => {
        const newPlaying = !isPlaying
        setIsPlaying(!isPlaying)
        newPlaying ? audioRef.current.play() : audioRef.current.pause()
        localStorage.setItem('musicConsent',String(newPlaying))
    }

    return (
        <>
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
            <audio ref={audioRef} loop src="./audio/music.mp3" type='audio/mpeg'></audio>
        </div>
        <button onClick={toggle} className="text-[#e1e1e1] rounded-full fixed top-4 right-4 w-10 h-10 xs:w-14 xs:h-14 flex items-center justify-center custom-bg cursor-pointer p-2 xs:p-3">
            {
                isPlaying ? 
                <Volume2 className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5}/>
                :
                <VolumeX className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5}/>
            }
        </button>
    </>
        
    )
}
