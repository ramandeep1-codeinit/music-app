import React, { useEffect } from 'react';

const CurrentTrack = () => {
  return (
    <div className="flex items-center text-white w-[300px]">
      <div className='mr-5'>
        <img src={""} alt="" className="img-fluid h-[60px] w-[60px] object-contain" />
      </div>
      <div>
        <h4 className="mb-1">currentPlayingName</h4>
        <p className="text-xs text-gray-400">currentPlayingArtists</p>
      </div>
    </div>
  );
}

export default CurrentTrack;
