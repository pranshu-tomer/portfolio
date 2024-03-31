import clsx from 'clsx';
import UseScreenSize from '../../../hooks/UseScreenSize'
function Welcome() {

    const size = UseScreenSize();

    const isLarge = size >= 1024
    const isMedium = size >= 768
    const isSmall = size >= 365
    return (
        <div className="flex flex-col justify-center items-center font-witch h-full w-full" style={{color: 'white'}}>
            <h1 className={clsx("font-bold text-accent", isLarge ? 'text-9xl' : isMedium ? 'text-7xl' : isSmall ? 'text-6xl' : 'text-5xl')}>Welcome</h1>
            <p className={clsx("font-semibold ", isLarge ? 'text-5xl' : isMedium ? 'text-4xl' : isSmall ? 'text-3xl' : 'text-2xl')}>to my World</p>
        </div>
    )
}

export default Welcome