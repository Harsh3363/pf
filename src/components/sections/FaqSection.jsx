import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import faq from '@/images/illustrations/faq.png';
import { Fade } from 'react-reveal';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function FaqSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={faq} alt="FAQ" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              <FaqItem open={true} title="What is EvoFinance?">
              Evo finance/Evo token is a utility token focused on evolution of payment systems. our aim is to provide passive income and financial freedom to holders.
              </FaqItem>
              <FaqItem open={false} title="Is team doxxed? what about liquidity?">
              No, we are privately doxxed to the Brise team and doxxed among us. The team   which is working on our future projects will be doxxed to the public including the social media handels At present liquidity is locked for 10 years
              </FaqItem>
              <FaqItem open={false} title="How 1000% fixed APY is sustainable?">
              The apy is sustainable because of the future projects. you can read about our upcoming projects in roadmap
              </FaqItem>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
