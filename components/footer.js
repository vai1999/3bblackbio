import Image from 'next/image'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdAddIcCall } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className='grid md:justify-between justify-center md:m-auto md:space-x-36 md:flex '  >
          


          <div className='inline-block m-6 align-baseline '>
                <h1 className=' text-2xl font-normal border-indigo-500'>Contact us</h1>
                <span className=' inline-block w-40 h-1 bg-blue-900 rounded-full'></span>
                
                <p className=' m-1'>3B BlackBio Biotech India Ltd<br />
                    7-C, Industrial Area, Govindpura,<br />
                    Bhopal 462023</p>
                <div className='flex  m-1'>
                <MdAddIcCall className='m-1 '/><a href="tel:0755 - 4076518" className=''> 0755 - 4076518</a>,<br />
                    <a href="tel:0755 - 4077847">0755 - 4077847</a>
                </div>
                <div className=' m-2 '>
                    <p>Corporate Enquiry:</p><div className='flex'>
                    <MdAddIcCall className='m-1 '/> <a href="tel:9691680693">
                           9691680693</a>,
                        <a href="tel:9810562700">9810562700</a></div>
                </div>
                <p className='flex  m-2'><GrMail className='m-1'/><a href="mailto:info@3bblackbio.com">info@3bblackbio.com</a></p>
            </div>
            <div className='m-6'>
                <h1 className=' text-2xl font-normal '>Approved By</h1>
                <span className='inline-block w-40 h-1 bg-blue-900 rounded-full'></span>            
                <div className='grid justify-between grid-cols-2 group '>

                    <Image src="https://3bblackbio.com/wp-content/uploads/2021/08/iso-logo-3bblackbio.png" width={100} height={100} alt="" className='mr-5' />
                    <Image src="https://3bblackbio.com/wp-content/uploads/2021/08/cdso.jpg" width={100} height={100} alt="" />
                    <Image src="https://3bblackbio.com/wp-content/uploads/2021/08/fda.png" width={100} height={100} alt="" />
                    <Image src="https://3bblackbio.com/wp-content/uploads/2021/08/cdso.jpg" width={100} height={100} alt="" />
                </div>


            </div>
            <div className='m-6'>
                 <div class="h-24 w-44 relative cursor-pointer mb-5">
    <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
    <div class="absolute inset-0 transform hover:scale-105 ease-in duration-300">
      <div class="h-full w-full bg-white rounded-lg shadow-purple-50"><Image src={'/truprc-logo.png'} width={600} height={600} alt={'/'} className='p-3' /></div>
    </div>
  </div>
                

                <div className='text-xl'>
                    <p> Disclaimer . Policy . Site Map</p>
                     </div>
                     <div className='flex '>
                     <Image src={'https://3bblackbio.com/wp-content/uploads/2021/08/facebook.png'} width={70} height={70} alt={'/'} className='p-5' />
                     <Image src={'https://3bblackbio.com/wp-content/uploads/2021/08/twitter.png'} width={70} height={70} alt={'/'} className='p-5' />
                     <Image src={'https://3bblackbio.com/wp-content/uploads/2021/08/linkdin.png'} width={70} height={70} alt={'/'} className='p-5' />
                     <Image src={' https://3bblackbio.com/wp-content/uploads/2021/08/instagram.png'} width={70} height={70} alt={'/'} className='p-5' />
           
                     </div>
                     
            </div>
        </div>
    )
}

export default Footer
