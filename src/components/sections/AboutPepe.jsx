import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
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
            <p className="text-white mb-6 text-xl">Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.

              Pepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way..</p>
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
