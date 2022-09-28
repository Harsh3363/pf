import React from 'react';

import signupImage from '@/images/illustrations/signup.png';
import walletImage from '@/images/illustrations/wallet.png';
import okayImage from '@/images/illustrations/okay.png';
import arrow from '@/images/arrow.svg';
import { Fade } from 'react-reveal';

export default function StepSection() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
          A blockchain you need, with the honesty you need
          </h2>
          <div className="md:flex justify-center gap-20">
            <Fade up>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={signupImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fast & Scalable</h3>
                <p className="text-gray max-w-sm">
                100,000 Transactions per second & 15s block
                </p>
              </div>
            </Fade>
            <Fade up delay={500}>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={walletImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Decentralized</h3>
                <p className="text-gray max-w-sm">
                Fully decentralized blockchain with high-speed transactions
                </p>
              </div>
            </Fade>
            <Fade up delay={1000}>
              <div className="text-center relative px-4">
                <img src={okayImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <h3 className="text-2xl font-bold mb-4">Zero Gas Fee</h3>
                <p className="text-gray max-w-sm">
                Zero cost gas fee for all the transactions on our blockchain
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
