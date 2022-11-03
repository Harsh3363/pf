import React from 'react';

import partners from '@/images/partners/partner.png'
import { Fade } from 'react-reveal';
import owl_game from '@/images/partners/owl_games.jpeg'
import centcex from '@/images/partners/centcex.png'
import twinmaps from '@/images/partners/twinmaps.png'

export default function PartnerSection() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">Trusted Partners Worldwide</h2>
            <p className='text-gray'>We're partners with countless major organisations around the globe</p>
          </div>
          <div className="mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             
              <Fade up delay={600}>
                <img src={partners} className="basis-1/2" alt=""  />
              </Fade> 
              <Fade up delay={600}>
                <img src={owl_game} className="basis-1/2" alt=""  />
              </Fade> 
              <Fade up delay={600}>
                <img src={centcex} className="basis-1/2" alt=""  />
              </Fade> 
              <Fade up delay={600}>
                <img src={twinmaps} className="basis-1/2" alt=""  />
              </Fade> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
