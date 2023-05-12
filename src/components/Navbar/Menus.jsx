import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import { TiSocialTwitter } from 'react-icons/ti'
import { FaTelegram } from 'react-icons/fa'

export default function Menus() {

  function scrollTo(delimiter, height) {
    const vh = window.innerHeight * 0.01;
    const offset = delimiter*height* vh; 
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }


  return (
    <>
    <div className="w-full">
        <a
          
          href="/" className='hover:text-[#1E714C] py-2 block'>
          Home
        </a>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={500} duration={1000} href="../sections//FaqSection.jsx" 
        className='hover:text-[#1E714C] py-2 block'
        onClick={() => {scrollTo(1,120)}}>About</Link>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={10} duration={1000} href="../sections//FaqSection.jsx"
         className='hover:text-[#1E714C] py-2 block'
         onClick={() => {scrollTo(2,120)}}
         >HowToBuy</Link>
      </div>
         
      <div className="w-full">
        <Link to="faq" spy={true} offset={10} duration={1000} href="../sections//FaqSection.jsx"
         className='hover:text-[#1E714C] py-2 block'
         onClick={() => {scrollTo(4,110)}}
         >Roadmap</Link>
      </div>
      <div className="w-full">
        <Link to="Tokenomics" spy={true} smooth={true} offset={15} duration={500} href="../sections//Tokenomics.jsx"
         className='hover:text-[#1E714C] py-2 block'
         onClick={() => {scrollTo(5,120)}}
         >
          Tokenomics
        </Link>
      </div>

      
   

      <div className="w-full">
        <a offset={10} duration={1000} href="https://twitter.com/Pepefunds" className='hover:text-[#1E714C] py-2 block'>
          <TiSocialTwitter size={30}
            onMouseOver={({ target }) => target.style.color = " #1E714C"}
            onMouseOut={({ target }) => target.style.color = "1da1f2"}
          // value={{ style: { Align: 'middle' } }}
          />

        </a>
      </div>
      <div className="w-full">
        <a offset={10} duration={1000} href="https://t.me/pepefunds" className='hover:text-[#1E714C] py-2 block'>
          <FaTelegram size={28}
            onMouseOver={({ target }) => target.style.color = "#1E714C"}
            onMouseOut={({ target }) => target.style.color = "0088cc"}
          />
        </a>
      </div>


    </>
  );
}