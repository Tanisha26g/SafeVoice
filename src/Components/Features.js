import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <div>
      <div className='banner mt-0 flex-start '>
        <video autoPlay muted loop>
          <source src='video.mp4' className="mt-0" type="video/mp4"/>
        </video>
        <h1 className='font-extrabold mt-0'>Features We provide</h1>
      </div>
    <div>
  
    <div className='features'>
     
    <div className='containers mt-36 mb-0'>
        <div className='card'>
        <div className='iconss justify-center '>
          <img src='https://img.icons8.com/?size=100&id=12928&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
          <h2 class="font-bold text-black text-3xl"> Access Legal Support</h2>
          <p>Our platform connects you with experienced legal authorities who can provide advice or represent you. Whether you need to understand your legal rights, or get immediate support, we are here to help.
          </p>
          <a href="http://localhost:5173/"><button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button></a>
        </div>
        </div>

        <div className='card'>
        <div className='iconss'>
          <img src='https://img.icons8.com/?size=100&id=118624&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2 class="font-bold text-black text-3xl">Admin Dashboard</h2>
        <p>It typically provides advanced functionalities such as data management, user profile management, event occurence records, and chart representation of data.</p>
        <a href='http://localhost:3002'><button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button></a>

        </div>
        </div>

        <div className='card'>
        <div className='iconss'>
          <img src='https://img.icons8.com/?size=100&id=64060&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2 class="font-bold text-black text-3xl">Get Immediate Emergency Help</h2>
        <p>We provide an instant connection with our chatbot which is available 24x7 whether you have legal queries or want an opinion you can refer to it.</p>
        <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>
        </div>
    </div>

    <div className='card'>
        <div className='iconss align-top mt-0 justify-start'>
          <img src='https://img.icons8.com/?size=100&id=s5dhu5eQAuXu&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2 class="font-bold text-black text-3xl">Real-Time location</h2>
        <p>The users real time location will be tracked and if needed it can also be shared to the nearest authorities and saved contacts
</p>
<a href='http://localhost:5174/'><button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button></a>
        </div>
        </div>

        <div className='card'>
        <div className='iconss align-top mt-0 justify-start'>
          <img src='https://img.icons8.com/?size=100&id=zL8506yyXHjr&format=png&color=000000' className='ml-7'/>
        </div>
        <div className='content'>
        <h2 class="font-bold text-black text-3xl"> HeatMaps for traking incident rates</h2>
        <p>Heat maps will be shown which will show the areas where most incidents are reported as hotspots. So the women can know which ones are the unsafe areas. 
</p>
        <a href='http://localhost:3002/admindashboard/heatmap'><button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button></a>
        </div>
        </div>


        <div className='card'>
        <div className='iconss align-top mt-0 justify-start'>
        <img src='https://img.icons8.com/?size=100&id=mats4gDEf08m&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2 class="font-bold text-black text-3xl">Community Forums</h2>
        <p>It will allow users to engage in community discussions , like someone's shared thought and also comment on it. Live chat feature will also be available there if users want to discuss it.</p>
        <a href='http://localhost:3003/'><button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button></a>
        </div>
        </div>
        </div>

    </div>
    </div>
    

    </div>
  )
}
