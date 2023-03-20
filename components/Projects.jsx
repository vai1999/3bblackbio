import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import onco from '../public/Oncology.jpg'
import amr from '../public/hg.png'
import infection from '../public/id.png'
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='w-full  '>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
     
        <div className='grid gap-8 text-center md:grid-cols-3'>
          <ProjectItem
          heading={"Oncology"}
            title='Solutions for Detection, Differentiation & Quantification of Diagnostic and Prognostic Molecular Markers of Leukemia and Solid Tumors'
            backgroundImg={onco}
            projectUrl='/webdev'
            
          />
          <ProjectItem
           heading={"Infectious Diseases"}
            title='Solutions for Molecular Detection and Differentiation of Pathogens of Various Infectious Diseases'
            backgroundImg={infection}
            projectUrl='/testing'
            

          />
          <ProjectItem
          heading={'AntiMicrobial Resistance (AMR)'}
            title='Solutions for Molecular Detection and Differentiation of AntiMicrobial Resistance Genes'
            backgroundImg={amr}
            projectUrl='/appdev'
            

          />
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
