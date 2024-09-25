import { IconError404 } from '@tabler/icons-react';
import React from 'react';
import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div className="flex flex-col items-center">
            <IconError404 size={140} />
            <p className="text-2xl sm:text-3xl">We can't find that page.</p>
            <Link to={'/'} className="text-xl text-blue-500">Take me home</Link>
        </div>
    )
}

export default NotFound;
