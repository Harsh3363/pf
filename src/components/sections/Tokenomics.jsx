import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import banks from '@/images/illustrations/banks.png';
import { Fade } from 'react-reveal';

export default function Tokenomics() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div>
          <Fade up>
            <img src={banks} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
            Tokenomics
            </h2>
            <ul className="my-6">
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Positive Rebase
                </span>
                <p className="text-gray">
                6% of the buys and 8% of the sales go directly to the Reserve
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Collateral value
                </span>
                <p className="text-gray">
                2% of the trading fees goes to backing the liquidity of the pair ensuring an ever-increasing collateral value.
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Reserve value
                </span>
                <p className="text-gray">
                6% of the buys and 8% of the sales go directly to the treasury which supports the Reserve value
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
