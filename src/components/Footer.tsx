import React from 'react';
import CurrentTrack from './Footer/CurrentTrack';
import PlayerControls from './Footer/PlayerControls';
import Volume from './Footer/Volume';


const  Footer = () => {
  return (
    <div className='fixed grid grid-cols-[1.5fr_2fr_1fr] justify-center items-center bottom-0 h-[80px] w-full bg-[#282828] p-3'>
       <CurrentTrack />
       <PlayerControls />
       <Volume />
    </div>
  );
}

export default Footer;
