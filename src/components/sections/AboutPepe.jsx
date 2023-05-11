import React from 'react';
import { Fade } from 'react-reveal';

import pepe2 from '@/images/pepe2.webp';

export default function AboutPepe() {

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
            <h2 className="font-bold text-6xl mb-6 leading-normal">ABOUT<br /> </h2>
            <p className="text-white mb-6 text-xl">$Pepe, the most iconic meme in the world,
             is tired of witnessing everyone indulge in the never-ending frenzy of derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.
             The Inu coins have had their time in the spotlight, and now $Pepe funds is ready to reclaim his position as the king of memes.
              With a stealthy launch, devoid of any presale.$Pepe funds emerges as a cryptocurrency designed for the people, destined to endure.
             Powered by the sheer force of memetic influence, $Pepe funds aims to guide you on a remarkable journey.</p>
            <p className="text-white mb-6">
              
            </p>

          </div>
        </div>
        <div className='row-start-1 md:col-start-2'>
          <Fade up>
            <img src={pepe2} alt="" />
          </Fade>
        </div>
      </div>
    </section >
  );
}
