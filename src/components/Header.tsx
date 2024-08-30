import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-8 p-4 sm:p-0">
    <div className="flex items-center bg-white text-gray-600 rounded-full px-4 py-2 mb-4 sm:mb-0 sm:flex-1 sm:max-w-md lg:max-w-lg">
      <SearchIcon />
      <input 
        type="text" 
        placeholder="Search for Artists, Songs, or Podcasts" 
        className="flex-grow bg-transparent border-none focus:outline-none ml-2"
      />
    </div>

     <div className="flex items-center">
      <Avatar src={""} alt="RS" />
      <h4 className="ml-3 text-white">userName</h4>
    </div>
    {/* <div className="flex items-center">
     <div >LOGIN</div> */}
      {/* <h4 className="ml-3 text-white">userName</h4> */}
    {/* </div> */}
  </div>
  )
}

export default Header