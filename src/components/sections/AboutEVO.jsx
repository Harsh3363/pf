import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { Fade } from 'react-reveal';

import faq from '@/images/illustrations/faq.png';

export default function AboutEVO() {

  const formHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">What is EvoFinance <br /> </h2>
            <p className="text-gray mb-6">EVO is a BRC-20 token with an elastic supply which rewards its holders with a positive rebase formula, thus creating the Auto-Staking and Auto-Compounding token.</p>
            <p className="text-gray mb-6">
              <ul>
                <li><BsCheckCircleFill className='text-primary inline mr-2' /> Evo Finance DeFi with the Auto-staking Protocol or a new financial protocol that makes staking easier, and gives rewards in tokens to holders the stable returns in crypto.</li>
                <li><BsCheckCircleFill className='text-primary inline mr-2' /> Automatic staking and compounding features, gives Fixed APY of 1000% annually.</li>
                <li><BsCheckCircleFill className='text-primary inline mr-2' /> We provide auto staking right in your wallet when you purchase Evo token. No need to move your tokens to our website. From the minute you buy, you are staked, and set to receive rebase rewards. The easiest auto-staking in DeFi.</li>
                <li><BsCheckCircleFill className='text-primary inline mr-2' /> The Evo Auto-staking Protocol pays every 24 Hours
</li>
              </ul>
            </p>
            
          </div>
        </div>
        <div className='row-start-1 md:col-start-2'>
          <Fade up>
            <img src={faq} alt="" />
          </Fade>
        </div>
      </div>
    </section >
  );
}
