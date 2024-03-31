import HomeBtn from '../HomeBtn'
import Form from './Form'

function Contact() {
  return (
    <>
      <HomeBtn />
      <div className='flex flex-col items-center justify-center space-y-6 w-3/8 h-screen'>
        <h1 className='text-accent font-witch font-semibold text-center text-5xl capitalize'>Summon the wizard</h1>
        <Form />
      </div>
    </>
  )
}

export default Contact



{/* <main className="flex overflow-y-scroll h-screen flex-col items-center justify-center relative bg-cover" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${bg})`, color: 'white'}}>
        <article className='relative w-full flex flex-col items-center justify-center space-y-8'>
            
          
        </article>
      </main> */}