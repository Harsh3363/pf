import React from 'react';
import pepe3 from '@/images/pepe3.webp';
import { Fade } from 'react-reveal';
export default function Roadmap() {
  return (
    <section className="px-6 ml-50  ">

      <div className="grid md:grid-cols-2">
      
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
          <h1 className="text-6xl text-center font-bold text-blue-500">Roadmap</h1>
          <div className="border-l-2 mt-10">

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

              <div className="w-5 h-5 bg-blue absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-blue absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-3xl">Phase 1 :</h1>
                <ul>

                  <h3>•	Launch</h3>
                  <h3>•	CoinGecko and CMC Listings</h3>
                  <h3>•	1000 + holders</h3>
                  <h3>•	Meme contests </h3>
                </ul>
              </div></div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

              <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-3xl">Phase 2 :</h1>
                <ul>

                  <h3>•	Staking </h3>
                  <h3>•	Cex listing </h3>
                  <h3>•	3000 + holders</h3>
                </ul>
              </div>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

              <div className="w-5 h-5 bg-green absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-green absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-3xl">Phase 3 :</h1>
                <ul>

                  <h3>•	PepeFunds Faucet </h3>
                  <h3>•	Pepe funds Merch </h3>
                  <h3>•	T1 Exchange lsiting </h3>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 flex'>
          <Fade up>
            <img src={pepe3} alt="" className='hidden md:block lg:block' />
          </Fade>
        </div>
      </div>
    </section>
  );
}
