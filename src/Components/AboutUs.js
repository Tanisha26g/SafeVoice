import React from 'react'
import {  faseedling,} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div>
      <div className="container-fluid about pt-5 mt-3">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-3 mb-lg-0">
                <div className='w-full max-w-6xl p-5  mr-2 pb-10 mx-1 mb-10 gap-3 columns-2 space-y-3'>
                  <img src='farmarg.jpg' className='h-64 w-72'  width="500px" height="400px" alt=" "/>
                  <img src='farmer literate.jpg' className='h-60' alt=" "/>
                  <img src='farmerapp.jpg' alt=" "/>
                  <img src='farmer.jpg' alt=" "/>
                  <img src='Farmerr.jpg' alt=" "/>

                  </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h2 className="text-pink-600 text-uppercase text-4xl">About Us</h2>
                        <h1 className="display-5">Empowering Voices, Ensuring Safety</h1>
                    </div>
                    <p className="mb-4">At SafeVoice, we believe that every woman deserves to live without fear, in a world where her voice is heard and her safety is valued. Unfortunately, harassment and unsafe environments remain a harsh reality for many women. We are here to change that. Our platform is designed to empower women to report incidents of harassment anonymously, seek legal and emergency help, and engage in a community of support, all while preserving their privacy.
                    </p>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                           <img src='https://img.icons8.com/?size=100&id=119519&format=png&color=000000' alt=''/>
                            <h4>100% Safe</h4>
                            <p className="mb-0">Your safety is our first priority</p>
                        </div>
                        <div className="col-sm-6">
                            <img src='https://img.icons8.com/?size=100&id=113852&format=png&color=000000' alt=''/>
                            <h4>You can confide in us!</h4>
                            <p className="mb-0">It's 100% trustworthy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
