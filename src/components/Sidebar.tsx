import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOptions from './SidebarOptions';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Sidebar = () => {
  const playlists = [
    { name: 'Chill Hits', id: '1' },
    { name: 'Top Hits', id: '2' },
    { name: 'Daily Mix', id: '3' },
  ];

  return (
    <div className='container h-screen  bg-black p-2  text-white'>
      <img
        className='h-[70px] p-2'
        src=""
        alt="Logo"
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
      
      {/* <SidebarOption Icon={LibraryMusicIcon} title="Your Library" /> */}
      <br />
      <strong className='ml-2 p-1 text-xs'>PLAYLISTS</strong>
      <hr className='border-t-[0.1px] border-gray-900' />

      {playlists.map(({ name, id }) => (
        <div key={id} >
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
