import React from 'react';
import { Link } from 'react-scroll'
import { TiSocialTwitter } from 'react-icons/ti'
import { FaTelegram } from 'react-icons/fa'
import PrimaryButton from '@/components/buttons/PrimaryButton';

export default function Menus() {
  return (
    <>
      <div className="w-full ">
        <Link to="community" spy={true} smooth={true} offset={5} duration={500} href="https://bitgertswap.com/#swap/0x96Affc91E1aaf1067A30CC4d04Fe0C56181376c9" className='hover:text-[#1E714C] py-2 block '>BuynNow</Link>
      </div>

      <div className="w-full">
        <Link to="community" spy={true} offset={500} duration={500} href="/" className='hover:text-[#1E714C] py-2 block'>Price</Link>
      </div>
      <div className="w-full">
        <Link to="community" spy={true} offset={50} duration={500} href="../sections//CommunityPage.jsx" className='hover:text-[#1E714C] py-2 block'>Tokenomics</Link>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={500} duration={1000} href="../sections//StepSection.jsx" className='hover:text-[#1E714C] py-2 block'>Home</Link>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={500} duration={1000} href="../sections//FaqSection.jsx" className='hover:text-[#1E714C] py-2 block'>About</Link>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={10} duration={1000} href="../sections//FaqSection.jsx" className='hover:text-[#1E714C] py-2 block'>Roadmap</Link>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={10} duration={1000} href="https://twitter.com/Pepefunds" className='hover:text-[#1E714C] py-2 block'>
          <TiSocialTwitter size={30}
            onMouseOver={({ target }) => target.style.color = " #1E714C"}
            onMouseOut={({ target }) => target.style.color = "1da1f2"}
          // value={{ style: { Align: 'middle' } }}
          />

        </Link>
      </div>
      <div className="w-full">
        <Link to="faq" spy={true} offset={10} duration={1000} href="https://t.me/pepefunds" className='hover:text-[#1E714C] py-2 block'>
          <FaTelegram size={28}
            onMouseOver={({ target }) => target.style.color = "#1E714C"}
            onMouseOut={({ target }) => target.style.color = "0088cc"}
          />
        </Link>
      </div>

    </>
  );
}
