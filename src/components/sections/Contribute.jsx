import React from 'react';
import { Fade } from 'react-reveal';

import contributor from '@/images/illustrations/contributor.png';
import mission from '@/images/illustrations/mission.png';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Select from '@/components/Select';

export default function Contribute() {

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
            <h2 className="font-bold text-4xl mb-6 leading-normal">Our vision<br /></h2>
            <p className="text-gray mb-6">To educate the people to control their money. So that can help empower them to create a better life for themselves and their families. </p>   
            <h2 className="font-bold text-4xl mb-6 leading-normal">Our mission<br /></h2>
            <p className="text-gray mb-6">As digital currencies have been around for over a decade, we are still at an early stage of a monetary revolution, redistributing wealth and giving everyone a chance to gain financial freedom. </p>   
          </div>
        </div>
        <div className='row-start-1 md:col-start-2'>
          <Fade up>
            <img src={mission} alt="" />
          </Fade>
        </div>
      </div>
    </section >
  );
}
