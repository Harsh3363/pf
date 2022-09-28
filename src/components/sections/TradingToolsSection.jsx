import React from 'react';

import tradingTools from '@/images/illustrations/tradingtools.png';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { Fade } from 'react-reveal';

export default function TradingToolsSection() {
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
                <h3 className='font-bold text-xl mb-4'>NEFT Game</h3>
                <p className='text-gray'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="mb-6">
                <h3 className='font-bold text-xl mb-4'>NEFT Calculator</h3>
                <p className='text-gray'>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.</p>
              </div>
              <div className="mb-6">
                <h3 className='font-bold text-xl mb-4'>NEFT Swap</h3>
                <p className='text-gray'>Vitae turpis massa sed elementum tempus egestas sed. Leo urna molestie at elementum eu facilisis sed. Condimentum mattis pellentesque id nibh</p>
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
