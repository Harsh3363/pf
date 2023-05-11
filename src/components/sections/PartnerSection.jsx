import React from 'react';
import { Fade } from 'react-reveal';
import { TiSocialTwitter } from 'react-icons/ti'
import { FaTelegram } from 'react-icons/fa'


export default function PartnerSection() {
  return (
    <section className="px-6 pt-10">
      <div className='rounded-3xl bg-gradient-to-b from-[#dafadd] to-[#e6fce8] '>

        <div className="container mx-auto">
          <div className="text-center mb-4">
            {/* <p className='text-silver text-xs'>OUR FRIENDS</p> */}
            <h2 class="text-3xl font-bold text-left">
              <u class="text-green"> CONTACT</u>
            </h2>
            {/* <p className='text-gray'>We're partners with countless major organisations around the globe</p> */}
          </div>
          <div className="mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 " style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="">
                <Fade up delay={600}>
                  <TiSocialTwitter size={100}
                    onMouseOver={({ target }) => target.style.color = " #1da1f2"}
                    onMouseOut={({ target }) => target.style.color = "black"}
                    style={{ marginRight: 26 }}
                  />
                </Fade>
              </a>
              <a href="">

                <Fade up delay={600}>
                  <FaTelegram size={90}
                    onMouseOver={({ target }) => target.style.color = "#0088cc"}
                    onMouseOut={({ target }) => target.style.color = "black"}
                    style={{ marginLeft: 26 }}
                  />
                </Fade>
              </a>
            </div>
            <div className="mt-4 mb-8 text-center">
              <h5 className="text-black text-xl"> $pepe coin has no association with Matt Furie or his creation Pepe the Frog. <br />
               This token is simply paying homage to a meme we all love and recognize.
              </h5> <br />
              <h5 className="text-black text-xl pb-5">
              $PEPE is a meme coin with no intrinsic value or expectation of financial return. <br />
               There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
              </h5>
              {/* <p className="text-white">bank transfers or your credit/debit card.</p> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
