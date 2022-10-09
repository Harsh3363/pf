import React from 'react';

import tradingTools from '@/images/illustrations/tradingtools.png';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { Fade } from 'react-reveal';

export default function Roadmap() {
  return (
    <section className="px-6">
      
            <div className="row-start-1 mb-8">
              <Fade up>
                <img src={tradingTools} alt="" />
              </Fade>
            </div>
         
    </section>
  );
}
