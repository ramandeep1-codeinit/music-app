import React, { useEffect } from 'react';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from "../assets/ab67616d00001e02e62ca3548e739bd85eebbbc9.jpeg"
import CardsDisplay from './CardsDisplay';
import Header from './Header';

const Body = () => {
  return (
    <div className='p-6 w-full h-screen overflow-y-auto flex-0.8 text-white bg-gradient-to-b from-transparent to-black bg-gray-700'>
    <Header /> 
    <div className="container flex items-end p-2">
      <img src={image} alt="CoverImage" className="h-1/5vw m-0 5 box-shadow-lg"/>
      <div className="flex-1 ml-4">
        <strong className="block">Track</strong>
        <h2 className='text-7xl mb-2'>name </h2>
        <p className='text-sm mb-2'> description</p>
        <div className='flex space-x-5 mb-4'>
            <div className=' bg-gray-400 rounded-[50px] p-1.5'><PlayArrowIcon /></div>
            <div className=' hover:bg-gray-400 rounded-[50px] p-1.5'><FavoriteBorderIcon /></div>
            <div className='hover:bg-gray-400 rounded-[50px] p-1.5'><MoreVertIcon /></div>
        </div>
      </div>
    </div>
    {/* <div className='container mx-auto'> */}
      {/* <div className="grid grid-cols-12 gap-4 text-gray-300 py-4">
        <div className="col-span-1">#</div>
        <div className="col-span-6">TITLE</div>
        <div className="col-span-4">ALBUM</div>
        <div className="col-span-1 flex justify-end">
          <AccessTimeTwoToneIcon />
        </div>
      </div> */}
      {/* <div>
        {selectedPlaylist?.tracks.map(({
          id, name, artists, image, duration, album, context_uri, track_number,
        }, index) => (
          <div
            key={id}
            className='grid grid-cols-12 gap-4 py-2 cursor-pointer hover:bg-opacity-70'
            onClick={() => playTrack(id, name, artists, image, context_uri, track_number)}
          >
            <div className="col-span-1">{index + 1}</div>
            <div className="col-span-6 flex items-center">
              <img src={image} alt="track" className="h-10 w-10 mr-4" />
              <div>
                <div className="text-white">{name}</div>
                <div>{artists.join(', ')}</div>
              </div>
            </div>
            <div className="col-span-4">{album}</div>
            <div className="col-span-1 flex justify-end">{msToMinutesAndSeconds(duration)}</div>
          </div>
        ))}
      </div> */}
    {/* </div> */}

    <CardsDisplay />
    <CardsDisplay />
  </div>
  );
};

export default Body;
