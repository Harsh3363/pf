import React from 'react';

import tradingTools from '@/images/illustrations/tradingtools.png';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { Fade } from 'react-reveal';

export default function FutureProjects() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className='lg:row-start-1 max-w-lg'>
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                Our Future <span className="text-blue-gradient">Projects</span>
              </h2>
              <div className="mb-6">
                <h3 className='font-bold text-xl mb-4'>Evo Game</h3>
                <p className='text-gray'>Evo game is our future project that allows Evo token holders to generate even more rewards. Simple, Powerful and Proven.</p>
                <br />
                <p className='text-gray'>Your Evo Tokens Give You Access to Game.
                    Easy to Enter Easy to Play
                    Multiple Big Winners Each Week
                    No One Loses Their Initial Deposit
                    Even if you don’t win, keep all of your money!</p>
                    <br />
                  <p className='text-gray'>The instructions and rules will be announced once the Game is live, click on Learn more to get latest updates.</p>
                  <br />
                  {/* <ul>
                    <p className='text-gray'>NFT’S:-</p>
                    <p className='text-gray'>We are going to launch our own premium collection of NFT’s with best perks possible. The NFT’S are provided free to Pre-sale holders. The perks will be announced at later stages</p>
                    <br /> */}
                    {/* <p className='text-gray'>Metaverse:-</p>
                    <p className='text-gray'> We are going to enter the Metaverse with a massive projects. The team involved in Metaverse projects will be doxxed to public. The details will be provide to Holders according to roadmap</p>
                    <br />
                    <p className='text-gray'>Payment methods :-</p>
                    <p className='text-gray'>We are going to launch both debit card and credit card. All the details and team related to payments will be doxxed to public.</p>
                    <br />
                    <p className='text-gray'>Investment company :-</p>
                    <p className='text-gray'>We are going to launch investment company. All the details and team related to company will be doxxed to public. The investments will be done based on approval from holders</p> */}
                  {/* </ul> */}
              </div>
              <SecondaryButton>
              Learn more
              </SecondaryButton>
              {/* <a href="#">
                <button className='py-4 px-10 text-primary underline'>
                  Learn more
                </button>
              </a> */}
            </div>
            <div className="row-start-1 mb-8">
              <Fade up>
                <img src={tradingTools} alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
