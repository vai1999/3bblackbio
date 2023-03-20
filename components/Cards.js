import React from 'react'

function Cards() {
  return (
    <div className=''>
<div></div>
<div class=" pt-4 pb-4 grid  ml-14 justify-between  md:grid-cols-3  gap-5"
 >

    <div class="rounded-3xl overflow-hidden drop-shadow-3xl bg-white hover:scale-105 ease-in duration-300  " style={{height: "100%" ,width:"80%"}}>
      <img class="w-full"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlzIpvHTIIlwDT88IYMMsJPoy93YVWoR1Hw&usqp=CAU" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Oncology</div>
        <p class="text-gray-700 text-base">
        Solutions for Detection, Differentiation & Quantification of Diagnostic and Prognostic Molecular Markers of Leukemia and Solid Tumors        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
    </div>
    
    <div class=" overflow-hidden rounded-3xl shadow-lg bg-white hover:scale-105 ease-in duration-300" style={{height: "100%" ,width:"80%"}}>
      <img class="w-full" src="https://www.news-medical.net/images/news/ImageForNews_704632_16450045989739523.jpg" alt="River"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Infectious Diseases</div>
        <p class="text-gray-700 text-base">
        Solutions for Molecular Detection and Differentiation of Pathogens of Various Infectious Diseases        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div> */}
    </div>


    <div class=" overflow-hidden shadow-lg rounded-3xl bg-white hover:scale-105 ease-in duration-300 " style={{height: "100%" ,width:"80%"}}>
      <img class="w-full" src="https://www.healtheuropa.com/wp-content/uploads/2022/01/iStockwildpixel-1269922792-696x392.jpg" alt="Forest"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">AntiMicrobial Resistance (AMR)</div>
        <p class="text-gray-700 text-base">
        Solutions for Molecular Detection and Differentiation of AntiMicrobial Resistance Genes</p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div> */}
    </div>
  </div>
</div>

  )
}

export default Cards
