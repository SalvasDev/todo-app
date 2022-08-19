import React, { useEffect }from 'react'

const Error = ({mensaje}) => {

    useEffect(() => {
        const timeout =  setTimeout(() => {
        }, 2000);
        return () => clearTimeout(timeout);
    }, [])
    
    return <p>{mensaje}</p>

}

export default Error
