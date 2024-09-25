import React from 'react';

const Footer = () => {

    const curretYear = new Date().getFullYear()

    return(
        <footer className='w-full flex justify-center'>
            <div className='pt-10 pb-5 text-sm text-secondary-text'>© Kudina Maksim {curretYear === 2024 ? curretYear : `2024-${curretYear}`}</div>
        </footer>
    )
}

export default Footer;