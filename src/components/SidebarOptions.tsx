import React from 'react';

const SidebarOptions = (props :any) => {

  const   {title , Icon} = props
  
  return (
    <div className='flex items-center text-gray-300 h-10 cursor-pointer transition-colors duration-200 hover:text-white'>
      {Icon && <Icon className="pl-2 pr-2" style={{ fontSize: 35 }} />}
      {Icon ? <h4 className="text-base">{title}</h4> : <p className="mt-2 ml-5 text-sm">{title}</p>}
    </div>
  );
}

export default SidebarOptions;
