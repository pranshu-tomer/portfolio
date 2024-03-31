import clsx from "clsx"
import {Mail , Phone} from "lucide-react"

function AboutDetails() {

    const ItemLayout = ({children,className}) => {
        return (
            <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-8", className)}>
                {children}
            </div>
        )
    }

  return (
    <>
      <section className="py-10 w-full">
        <div className="grid grid-cols-12 gap-8 w-full">

            <ItemLayout className={'col-span-7 row-span-2 flex flex-col items-start'}>
            <h2 className="text-2xl text-left text-accent w-full capitalize">
                Arcitect of Enhancement
            </h2>
            <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio vel non pariatur doloribus possimus adipisci labore? Non vero nesciunt asperiores sunt pariatur ducimus eos, corrupti recusandae laborum illo tempora?
            </p>
            </ItemLayout>

            
            <ItemLayout className={'col-span-5'}>
                <p className="w-full text-left text-center">
                    <span className="text-accent text-xl">Education</span> <br /> B.Tech in CSE | National Institute Of Technology, Manipur <br /><span className="font-semibold text-accent">CGPA : 7.82</span> | 2022-2024 <br /> X (CBSE) | Jawahar Navodaya Vidyalaya , <span className="font-semibold text-accent">91.2%</span> | 2019 <br /> XII (CBSE) | Jawahar Navodaya Vidyalaya , <span className="font-semibold text-accent">85.6%</span> | 2021
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-5 flex-col !p-4'}>
                <span className="flex gap-5"><Phone strokeWidth={1.5}/> <p>9026401421</p></span>
                <span className="flex gap-5"><Mail strokeWidth={1.5}/> <p>tomerpranshu11@gmail.com</p></span>
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
                <img  className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,bootstrap,c,discord,git,github,ai,java,mongodb,mysql,nodejs,npm,py,react,sklearn,vscode,vite,instagram,linkedin,gmail" alt="Pranshu Tomer" loading="lazy" />
            </ItemLayout>

            <ItemLayout className={'col-span-7 row-span-2 !p-0'}>
                <img  className="w-full h-auto !p-0" src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranshu-tomer&layout=compact&theme=transparent&title_color=fefe5b&card_width=150px&hide_border=true&text_color=00000" alt="Pranshu Tomer" loading="lazy" />
            </ItemLayout>
 
        </div>
      </section>
    </>
  )
}

export default AboutDetails

// !p-0 no padding

// 25+ <sub className="font-semibold text-base">Clients</sub>










