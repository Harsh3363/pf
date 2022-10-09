import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import SecondaryButton from '@/components/buttons/SecondaryButton';
import Community from '@/images/illustrations/community.png';
import { Fade } from 'react-reveal';

export default function CommunityPage() {
  return (
    <section id="community" className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4 md:px-4">
          <Fade up>
            <img src={Community} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Introducing the <span className="text-blue-gradient">EvoFinance</span> <br /> Community
            </h2>
            <p className='text-gray'>Vitae turpis massa sed elementum tempus egestas sed. L eu consequatac felis donec et odio. Donecmassa sapien faucibus et molestie.</p>

            <ul className="my-6">
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Join our community
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                250k+ members across globe
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Explore the EvoFinance World
              </li>
            </ul>

            <SecondaryButton>
             <a href="https://tttttt.me/evofinances">Telegram</a>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
