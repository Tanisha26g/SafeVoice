import React from 'react'
import Features from './Features'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs';
import MyChatBot from './MyChatbot';

export default function Why() {
  return (
    <>
    <MyChatBot/>
    <div>
     <div class="container-fluid bg-pink-900 feature h-2/4 py-5 pb-lg-0 my-3">
        <div class="container py-5 pb-lg-0">
            <div class="mx-auto text-center mb-1 pb-3">
                <h1 class="display-4 text-white text-center mt-0">SafeVoice</h1>
                <h1 class="text-white text-center">Empowering every voice, protecting every soul.</h1>
            </div>
            <div class="row gap-5">
                <div class="col-lg-3">
                    <div class="text-white mb-4 mt-0">
                        <div class="d-flex align-items-center justify-content-center mb-3" >
                           <img src='https://img.icons8.com/?size=100&id=NJfYOBRslwZd&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">24x7 Emergency services</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white text-center">
                        <div class=" d-flex align-items-center justify-content-center mb-3">
                        <img src='https://img.icons8.com/?size=100&id=O46vBChcgBAI&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold">Anonymous Reporting</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white text-center ">
                        <div class=" d-flex align-items-center justify-content-center mb-3">
                        <img src='https://img.icons8.com/?size=100&id=YTKVH1zEPIDY&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold">Heatmaps for unsafe areas</h4>
                        <p class="mb-0"></p>
                    </div>
                </div>
                <div class=" col-lg-7 relative w-[500px] h-[500px] rounded-[10px] shadow-[16px_16px_18px_#0000008c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-gradient-to-l from-yellow-400 via-yellow-600 to-red-600... before:animate-spin-slow flex flex-col ml-4">
                    <div className='absolute flex justify-center align-middle top-[10px] right-[10px] bottom-[10px] left-[10px] rounded-[10px] px-4 bg-pink-100 shadow-[20px_20px_20px_bg_inset]'>

                        <div className="absolute top-[15px] left-[10px] right-[10px] bottom-0 rounded-[10px] bg-pink-100 flex justify-center items-start">
                            <img src="why.jpg" alt="Why SafeVoice" className="h-[450px] w-[650px] object-cover rounded-[10px]" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="text-white mb-5">
                        <div class=" d-flex align-items-center justify-content-center mb-3">
                            <img src='https://img.icons8.com/?size=100&id=114495&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">Seek Legal help</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white ">
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <img src='https://img.icons8.com/?size=100&id=tXg90mCMJpUq&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">Live Location Tracker</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white">
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <img src='https://img.icons8.com/?size=100&id=103409&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">Community Forums</h4>
                        <p class="mb-0"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Features/>
    <AboutUs/>
    <ContactUs/>
    </div>
    </>
  )
}
