import React from 'react';
import { Link } from 'react-scroll'

import { Link } from 'react-scroll'


export default function Menus() {
  return (
    <>
      <div className="w-full">
        <Link to="community" spy={true} smooth={true} offset={50} duration={500} href="/" className='hover:text-primary py-2 block'>RoadMap</Link>
      </div>
      {/* <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>RoadMap</a>
      </div> */}
      <div className="w-full">
        <Link to="community" spy={true} smooth={true} offset={50} duration={500} href="/" className='hover:text-primary py-2 block'>Documentation</Link>
      </div>
      <div className="w-full">
        <Link to="community" spy={true} smooth={true} offset={50} duration={500} href="/" className='hover:text-primary py-2 block'>Tools</Link>
      </div>
      <div className="w-full">
        <Link to="community" spy={true} smooth={true} offset={50} duration={500} href="/" className='hover:text-primary py-2 block'>App</Link>
      </div>
      <div className="w-full">
        <Link to="community" spy={true} smooth={true} offset={50} duration={500} href="/" className='hover:text-primary py-2 block'>Community</Link>
      </div>
        <div className="w-full">
          <Link to="faq" spy={true} smooth={true} offset={50} duration={1000}  href="../sections//FaqSection.jsx" className='hover:text-primary py-2 block'>DEX</Link>
        </div>
    
        <div className="w-full">
          <Link to="faq" spy={true} smooth={true} offset={50} duration={1000}  href="../sections//FaqSection.jsx" className='hover:text-primary py-2 block'>Casino</Link>
        </div>
    
        <div className="w-full">
          <Link to="faq" spy={true} smooth={true} offset={50} duration={1000}  href="../sections//FaqSection.jsx" className='hover:text-primary py-2 block'>FAQ's</Link>
        </div>
    
    </>
  );
}
