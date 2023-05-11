import React from 'react';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets';
import { Fade } from 'react-reveal';
import pepe7 from '@/images/pepe7.png';

export default function Tokenomics() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div>
          <Fade up>
            <img src={pepe7} alt="" width={1000}/>
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-6xl mb-6 leading-normal">
              TOKENOMICS
            </h2>
            <h5 className="text-white text-4xl mb-6 leading-normal">
              token supply :-  500000000 $pepe
            </h5>
            <ul className="my-6">
              <li className='mb-6'>
                <span className='text-xl text-white'>
                  tax :
                  3 % on buy and 3% on sell,It’s that simple.
                </span>
              </li>
              <li className='mb-6'>
                <span className='text-xl text-white'>
                  1 % goes to liquidity the other 1% goes to staking and  1 % goes to marketing
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      {/* <Tweet tweetId="841418541026877441" /> */}
      <div className=" justify-center items-center h-screen pt-20">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Pepefunds'
          }}
          options={{
            height: '800'
          }}
        />
      </div>
    </section>
  );
}
