import React from 'react';
import { Fade } from 'react-reveal';

import buyIcon from '@/images/illustrations/buy.png';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Select from '@/components/Select';
import faq from '@/images/illustrations/faq.png';

export default function BuyAndTradeSection2() {

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
            <h2 className="font-bold text-4xl mb-6 leading-normal">What is NEFTG <br /> </h2>
            <p className="text-gray mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua. Ut enim ad
 minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in vo
luptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
 anim id est laborum.<br /> 25 Crypto Coin. We accept BTC crypto-currency</p>

            
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
