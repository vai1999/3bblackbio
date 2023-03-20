import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl,heading}) => {
  return (
    <div className='relative grid  items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#1e79e2] to-[#26b2dd]'>
    <h1 className='text-lg text-white bg-blue-600'>{heading}</h1>
    <Image className=' group-hover:opacity-10' src={backgroundImg}  alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
        <p className='pt-4 text-white '>{title}</p>
        <p className='pt-2 pb-4 text-center text-white'>{tech}</p>
     
    </div>
 </div>
  )
}

export default ProjectItem