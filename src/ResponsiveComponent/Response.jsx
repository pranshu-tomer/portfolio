'use client'
import UseScreenSize from '../hooks/UseScreenSize'

function Response({children}) {

    const size = UseScreenSize()
    return (
        <>
            {children({size})}
        </>
    )
}

export default Response