import React from 'react';
// import globoCrypto from '@/images/illustrations/globe.png';
import pepe1 from '@/images/pepe1.webp';
import BlueCircleParticle from '../particles/BlueCircleParticle';
import OrangeCircleParticle from '../particles/OrangeCircleParticle';
import StarParticle from '../particles/StarParticle';
import PurpleCircleParticle from '../particles/PurpleCircleParticle';
import SecondaryButton from "../buttons/SecondaryButton"

export default function HeroSection() {
  return (
    <section className='relative bg-primary pt-[140px] bg-opacity-5 pb-24'>
      <span className="absolute bg-[#a3ffad] -left-28 -top-8 rounded-full opacity-[80%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-[#a3ffad]-to-[#a3ffad] from-primary to-secondary -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />

      <div className="container px-4 mx-auto grid md:grid-cols-2 pt-20">
        <div className='flex items-center'>
          <div className='relative'>
            {/* <StarParticle className="absolute top-0 right-0" /> */}
            <PurpleCircleParticle className="absolute bottom-0 -left-12" />

            {/* <p className='text-primary'>SIGN UP TODAY</p> */}
            <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold leading-normal'>
              Welcome to
              <span className='text-blue-gradient'> $Pepe Funds,</span> <br />

            </h2>
            <div className="mt-4 mb-8">
              <h5 className="text-white text-xl"> your fun-filled pathway into the world of digital assets.
                Built on the robust BRC20 blockchain, our meme token embodies the playful spirit of the internet culture while offering tangible value in the crypto market. Harnessing the power of blockchain,
                $Pepe Funds brings the beloved meme 'Pepe the Frog' into the crypto universe. Join us as we blend humor, community, and serious finance in an exciting new way. Let's reshape the boundaries of digital assets together with $Pepe Funds!</h5>
              {/* <p className="text-white">bank transfers or your credit/debit card.</p> */}
            </div>
            <div className="col-span-2 lg:flex gap-4 lg:mb-12">
              <SecondaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                <a href="https://bitgertswap.com/#swap/0x96Affc91E1aaf1067A30CC4d04Fe0C56181376c9">
                Buy Now 
                </a>
              </SecondaryButton>
              <SecondaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                <a href="https://brisescan.com/token/0x96Affc91E1aaf1067A30CC4d04Fe0C56181376c9">
                  Contract
                </a>
              </SecondaryButton>
              <SecondaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                <a href="https://www.dextools.io/app/en/bitgert/pair-explorer/0xadfa02ba357b8f3fa83dd63206fb5d3c999bdc26">
                Charts 
                </a>
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block pl-24">
          <BlueCircleParticle className="absolute top-0 left-11 duration-[5s]" />
          <OrangeCircleParticle className="absolute bottom-1/4 right-0" />

          <img src={pepe1} alt="PepeFund" />
        </div>
      </div>
    </section >
  );
}
