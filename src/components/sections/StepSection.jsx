import React from 'react';

// import signupImage from '@/images/illustrations/signup.png';
// import walletImage from '@/images/illustrations/wallet.png';
// import okayImage from '@/images/illustrations/okay.png';
import article1 from '@/images/articles/article1.png';
import article2 from '@/images/articles/article2.png';
import article3 from '@/images/articles/article3.png';
// import arrow from '@/images/arrow.svg';
import { Fade } from 'react-reveal';

export default function StepSection() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
          Articles About Evo Finance
          </h2>
          <div className="md:flex justify-center gap-20">
            <Fade up>
              <a href="https://www.marketwatch.com/press-release/evo-finance-has-successfully-launched-on-bitforex-offering-easy-access-to-evo-tokens-2022-04-29?mod=search_headline">
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={article1} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  {/* <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" /> */}
                </div>
                {/* <h3 className="text-2xl font-bold mb-4">Fast & Scalable</h3>
                <p className="text-gray max-w-sm">
                100,000 Transactions per second & 15s block
                </p> */}
              </div>
              </a>
            </Fade>
            <Fade up delay={500}>
              <a href="https://www.digitaljournal.com/pr/evo-finance-has-successfully-launched-on-bitforex-offering-easy-access-to-evo-tokens">
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={article2} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  {/* <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" /> */}
                </div>
                {/* <h3 className="text-2xl font-bold mb-4">Decentralized</h3>
                <p className="text-gray max-w-sm">
                Fully decentralized blockchain with high-speed transactions
                </p> */}
              </div>
              </a>
            </Fade>
            <Fade up delay={1000}>
              <a href="https://www.bitcoininsider.org/article/163238/evo-finance-has-successfully-launched-bitforex-offering-easy-access-evo-tokens">
              <div className="text-center relative px-4">
                <img src={article3} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                {/* <h3 className="text-2xl font-bold mb-4">Zero Gas Fee</h3>
                <p className="text-gray max-w-sm">
                Zero cost gas fee for all the transactions on our blockchain
                </p> */}
              </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
