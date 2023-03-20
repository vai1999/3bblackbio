import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
function Banner() {
  return (
    <div className="relative ">
        <div className="absolute bottom-0 z-20 w-full bg-gradient-to-t from-gray-100 to-transparent"/>
        <Carousel 
         autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        >
     
     <div id='home' className='w-full h-full bg-fixed bg-center bg-cover custom-img ' >
      
      <div className='max-w-[1240px] w-full h-full  mx-auto flex  items-center ' >
        <div className='justify-between text-left'>

          <h1 className='space-x-3 text-gray-700 md:text-4xl'>
            <span className='font-extrabold text-blue-800 font-Trocchi pl-4'> MSME</span> <span className='font-serif font-extrabold text-black'>Award - 2018</span>
          </h1>
          <div className="text-left">

          <p className=' text-center font-serif indent-4  md:font-black mt-5  sm:max-w-[70%] '>
          3B BlackBio Biotech India Ltd. <br />
          A subsidiary of Kilpest India Limited <br />
          is awarded National<br /> MSME Award- 2018 
          by Hon&apos;ble President of India, Shri Ram Nath Kovind. <br />
          </p>
          </div>
          <div className="pt-3 pl-28 pb-5 ">
          <button className="p-3 mt-5 font-serif text-white bg-blue-800 h-25 w-36 rounded-3xl hover:bg-blue-700 ">Read More</button>
         </div>
        </div>
       

      
        
{/* <div className='items-center flex-grow hidden h-10 rounded-md sm:flex '>

        <Image  src={'/hero.svg'} width={700} height={700} alt='/' />
</div> */}
        
      </div>
      </div>

     

          <div>
          <img loading="lazy" src="https://3bblackbio.com/wp-content/uploads/2021/11/Social-Media-announcement-WEBSITE.png" data-src="https://3bblackbio.com/wp-content/uploads/2021/11/Social-Media-announcement-WEBSITE.png" alt="" />
          </div>

          <div>
          <img loading="lazy" src="https://3bblackbio.com/wp-content/uploads/2021/09/resized-Forbes-200-2-.png" alt="" />
          </div>
        </Carousel> 
    </div>

  )
}

export default Banner
