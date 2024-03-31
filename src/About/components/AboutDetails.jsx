import UseScreenSize from './../../hooks/UseScreenSize'
import ItemLayout from './ItemLayout';


function AboutDetails() {

    const size = UseScreenSize();
    const isSmall = size >= 850

    const highlight = 'text-accent text-semibold'

    return (
    <>
      <section className="py-10 w-full">
        <div className="w-full flex flex-col gap-10">

            <ItemLayout className={'flex flex-col items-start'}>
            <p className="font-light">
                &#8226; As a Full Stack Developer in <span className={highlight}>MERN</span>, I've worked with frontend technologies like <span className={highlight}>HTML, CSS, and JavaScript</span>. I also have good knowledge of <span className={highlight}>React.js and Tailwind CSS</span>. On the backend, I'm familiar with <span className={highlight}>Node.js, Express.js, EJS, and Rest APIs</span>. I've also learned database management, mainly <span className={highlight}>MongoDB</span>, and a bit of <span className={highlight}>MySQL</span>.
                <br />&#8226; I possess a solid understanding of <span className={highlight}>Data Structures and Algorithms in JAVA</span>, and some knowledge of the C language. With a <span className={highlight}>coding score of 700+ and a top 20 Institute rank</span> on GeeksForGeeks.
                <br />&#8226; I've completed a course on <span className={highlight}>Artificial Intelligence</span>, where I learned <span className={highlight}>Python</span> and its libraries like <span className={highlight}>Pandas, NumPy, and Matplotlib</span>. I've also worked on some machine learning models like <span className={highlight}>linear regression and K-nearest neighbor</span>.
                <br />&#8226; My team was also selected as a <span className={highlight}>finalist in the Smart India Hackathon 2023</span>.
                <br />&#8226; Currently, I am pursuing B.Tech in Computer Science at the <span className={highlight}>National Institute of Technology, Manipur</span>. I completed my secondary education from the well-known school <span className={highlight}>Jawahar Navodaya Vidyalaya</span>.
                <br />&#8226; I enjoy playing online games, with Free Fire currently being my favorite. However, it's worth mentioning that I'm not particularly skilled at it.
            </p>
            </ItemLayout>

            <div className={`flex justify-evenly ${isSmall ? '' : 'flex-col gap-10'}`}>
                <ItemLayout className={`!flex-col !px-2`}>
                    <h1 className="text-accent font-witch text-5xl">Education</h1>
                    <p className="w-full text-left text-center">
                        B.Tech in CSE | National Institute Of Technology, Manipur <br /><span className="font-semibold text-accent">CGPA : 7.82</span> | 2022-2024 <br /> X (CBSE) | Jawahar Navodaya Vidyalaya <br /> <span className="font-semibold text-accent">91.2%</span> | 2019 <br /> XII (CBSE) | Jawahar Navodaya Vidyalaya <br /> <span className="font-semibold text-accent">85.6%</span> | 2021
                    </p>
                </ItemLayout>

                <ItemLayout className={`!p-0`}>
                    <img  className="w-full h-auto !p-0" src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranshu-tomer&layout=compact&theme=transparent&title_color=fefe5b&card_width=150px&hide_border=true&text_color=" alt="Pranshu Tomer" loading="lazy" />
                </ItemLayout>
            </div>

            <ItemLayout className={'h-auto w-full !p-5'}>
                <img  className="w-full" src="https://skillicons.dev/icons?i=js,html,css,bootstrap,c,discord,git,github,ai,java,mongodb,mysql,nodejs,npm,py,react,sklearn,vscode,vite,instagram,linkedin,gmail" alt="Pranshu Tomer" loading="lazy" />
            </ItemLayout>
 
        </div>
      </section>
    </>
  )
}

export default AboutDetails

// !p-0 no padding

// 25+ <sub className="font-semibold text-base">Clients</sub>










