import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

const PlayerControls = () => {

  
  return (
    <div className="flex items-center justify-between max-w-xs px-24 text-white">
      <ShuffleIcon className="text-gray-300 hover:text-white transition duration-200 ease-in-out mx-4" />
      <SkipPreviousIcon className="text-gray-300 hover:text-white transition duration-200 ease-in-out mx-4"  />
     
      <PauseCircleFilledIcon fontSize="large" className="text-gray-300 hover:text-white transition duration-200 ease-in-out mx-4"  />
        {/* <PlayCircleFilledIcon fontSize="large" className="text-gray-400 hover:text-white transition duration-200 ease-in-out"  /> */}
      <SkipNextIcon className="text-gray-300 hover:text-white transition duration-200 ease-in-out mx-4"  />
      <RepeatIcon className="text-gray-300 hover:text-white transition duration-200 ease-in-out mx-4" />
    </div>
  );
}

export default PlayerControls;
