import React from 'react';

import { Link } from 'react-scroll'


export default function Menus() {
  return (
    <>
      <div className="w-full">
        <Link to="community" spy={true} smooth={true} offset={50} duration={500} href="/" className='hover:text-primary py-2 block'>RoadMap</Link>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Documentation</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Tools</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>App</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Community</a>
      </div>
        <div className="w-full">
          <a href="../sections//FaqSection.jsx" className='hover:text-primary py-2 block'>FAQ's</a>
        </div>
    
    </>
  );
}
