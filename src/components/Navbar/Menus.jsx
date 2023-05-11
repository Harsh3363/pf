import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import { TiSocialTwitter } from 'react-icons/ti'
import { FaTelegram } from 'react-icons/fa'

export default function Menus() {
  return (
    <>
      <div className="w-full ">
        <a offset={5} duration={500} href="https://bitgertswap.com/#swap/0x96Affc91E1aaf1067A30CC4d04Fe0C56181376c9" className='hover:text-[#1E714C] py-2 block '>BuynNow</a>
      </div>

      
      <div className="w-full">
        <a  offset={10} duration={1000} href="https://twitter.com/Pepefunds" className='hover:text-[#1E714C] py-2 block'>
          <TiSocialTwitter size={30}
            onMouseOver={({ target }) => target.style.color = " #1E714C"}
            onMouseOut={({ target }) => target.style.color = "1da1f2"}
          // value={{ style: { Align: 'middle' } }}
          />

        </a>
      </div>
      <div className="w-full">
        <a  offset={10} duration={1000} href="https://t.me/pepefunds" className='hover:text-[#1E714C] py-2 block'>
          <FaTelegram size={28}
            onMouseOver={({ target }) => target.style.color = "#1E714C"}
            onMouseOut={({ target }) => target.style.color = "0088cc"}
          />
        </a>
      </div>

    </>
  );
}
