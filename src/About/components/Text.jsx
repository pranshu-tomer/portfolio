import UseScreenSize from './../../hooks/UseScreenSize'
import clsx from 'clsx';

function Text() {

  const size = UseScreenSize();
  const isSmall = size >= 450

  return (
    <>
    <div className='font-witch flex flex-col justify-center items-center text-center h-screen' style={{color: 'white'}}>
        <h1 className={clsx("text-accent", isSmall ? 'text-9xl' : 'text-6xl')}>Pranshu</h1>
        <p className={isSmall ? 'text-4xl' : 'text-2xl'}>Meet the wizard behind this Portfolio</p>
    </div>
    </>
  )
}

export default Text

// absolute