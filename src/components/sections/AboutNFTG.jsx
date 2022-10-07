import React from 'react';
import { Fade } from 'react-reveal';

import buyIcon from '@/images/illustrations/buy.png';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Select from '@/components/Select';
import faq from '@/images/illustrations/faq.png';

export default function AboutNFTG() {

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
                <li>• Evo Finance DeFi with the Auto-staking Protocol or a new financial protocol that makes staking easier, and gives rewards in tokens to holders the stable returns in crypto.</li>
                <li>• Automatic staking and compounding features, gives Fixed APY of 1000% annually.</li>
                <li>• We provide auto staking right in your wallet when you purchase Evo token. No need to move your tokens to our website. From the minute you buy, you are staked, and set to receive rebase rewards. The easiest auto-staking in DeFi.</li>
                <li>• The Evo Auto-staking Protocol pays every 24 Hours
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
