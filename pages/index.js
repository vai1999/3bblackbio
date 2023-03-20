import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Para from '@/components/para'
import Testimonial from "@/components/Testimonial";
import data from "./data.json";
import Detail from '@/components/Detail'
import Count from '@/components/Count'
import Footer from '@/components/footer'
import Cards from '@/components/Cards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Banner/>
  
    <Cards/>
    <Para/>
    <Testimonial testimonialData={data} />
    <Detail/>
  <p className='p-4 pb-5 text-center  text-white bg-blue-600 animate-marquee whitespace-nowrap '><marquee scrollamount="10">3B BlackBio Biotech India Ltd awarded National MSME Award- 2018 by Hon&apos;ble President of India, Shri Ram Nath Kovind.</marquee></p>
    
    <Footer/>
  </>
  )
}
