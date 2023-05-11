import React from 'react';

import SecondaryButton from "../buttons/SecondaryButton"
import { BsCheckCircleFill } from 'react-icons/bs';

import banks from '@/images/illustrations/banks.png';
import { Fade } from 'react-reveal';

export default function Tokenomics() {
  return (
    <section className="container mx-auto py-10 ml-50 ">
<img src="https://evofinance.in/wp-content/uploads/2018/10/data-bg.png" alt="" />
<SecondaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
               BRISE Explore
              </SecondaryButton>

         <h2 class="text-3xl font-bold mb-12 text-left ml-5 mt-5 mb-5 mt-5">
         Token Distribution
          </h2>

<img src="https://evofinance.in/wp-content/uploads/2022/03/Untitled-design-6.png" alt="" />


         <h2 class="text-3xl font-bold mb-12 text-left ml-5">
         OUR FILES
          </h2>

<div class="max-w-sm p-6 bg-grey border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">Documents</h4>
    </a>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">What is Evo Finance?</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Evo Finance is a BRC-20
TOKEN offering
transparency, continuous
liquidity and an elasticized
supply to the holders with
the bestrebase formula
which creates Auto- Staking and Auto- Compounding tokens</p>
    <a href="https://evofinance.in/wp-content/uploads/2022/03/What-is-Evo-Finance.pdf" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-grey bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>

    </section>
  );
}
