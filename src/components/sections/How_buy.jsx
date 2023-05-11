import React from 'react';
import brise from "../../../src/images/brise.png";
import bitgert from "../../../src/images/bitgert.png";
import switchb from "../../../src/images/switchb.png";

export default function How_buy() {

    return (
        <section className="container mx-auto py-32">
            <div className=" ">
                <h2 className="font-bold text-6xl mb-6 leading-normal">HOW TO BUY<br /> </h2>
                <div className="flex items-center">

                    <div className="flex flex-wrap justify-center">
                        <div className="max-w-sm bg-transparent m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white">
                            <img className="rounded-t-lg mx-auto pt-5 mt-10" src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_173,h_173,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png" alt="" />
                            <div className="p-5">
                                <a href="#" className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                        <h2 className='text-3xl text-center m-2'>Create a Wallet</h2>
                                </a>
                                <p className="mb-3 font-normal text-white dark:white">download metamask or your wallet of choice from the app store or google play store for free.
                                    Desktop users, download the google chrome extension by going to metamask.io.</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-transparent m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white">
                            <img className="rounded-t-lg mx-auto pt-5 mt-10" width={200} src={brise} alt="" />
                            <div className="p-5">
                                <a href="#" className="mb-2 text-2xl font-bold tracking-tight text-white dark:white">

                                        <h2 className='text-3xl text-center m-2'>Get Some BRISE</h2>
                                </a>
                                <p className="mb-3 font-normal text-white dark:text-white">have BRISE in your wallet to switch to $PEPE FUNDS. If you don’t have any BRISE, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-transparent m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white">
                            <img className="rounded-t-lg mx-auto pt-5 mt-10" src={bitgert} alt="" />
                            <div className="p-5">
                                <a href="#" className="mb-2 text-2xl font-bold tracking-tight text-white dark:white">
                                        <h2 className='text-3xl text-center m-2'>Go to BITGERT SWAP</h2>
                                </a>
                                <p className="mb-3 font-normal text-white dark:text-white">connect to Bitgert Swap. Go to <a href="http://bitgertswap.com">bitgertswap.com</a>  in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE FUNDS token address into Bitgert Swap, select Pepe Funds, and confirm. When Metamask prompts you for a wallet signature, sign.</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-transparent m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white">
                            <img className="rounded-t-lg mx-auto pt-5 mt-10 zoom-5x" width={400} src={switchb} alt="" />
                            <div className="p-5">
                                <a href="#" className="mb-2 text-2xl font-bold tracking-tight text-white dark:white">
                                        <h2 className='text-xl text-center m-2'>Switch BRISE for $PEPE FUNDS</h2>
                                </a>
                                <p className="mb-3 font-normal text-white dark:text-white">switch BRISE for $PEPE FUNDS.Set Spillage to 8% to 12%. You may need to increase slippage during times of market volatility.</p>
                            </div>
                        </div>
                    </div>



                </div>
                 
                    
            </div>
        </section >
    );
}
