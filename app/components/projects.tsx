import React from 'react'
import projectsData from '../data/projectsData.json'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='section'>
      <h1 className='heading text-lg '>
        {projectsData.heading}
      </h1>
      <div className='project_container'>
            {projectsData.data.map(project => (
                <div className='project_card'>
                    <h1 className='project_name pb-2'>
                        {project.name}
                    </h1>
                    <hr className='pt-2'/>
                    <div className='description_box'>
                        <p className='project_description p-5 flex items-center'>
                            {project.description}
                        </p>
                        <div className='links'>
                            <div>
                            {project.githubUrl && (
                                <Link className='link' href={project.githubUrl}>Github</Link>
                            )}
                            </div>
                            <div>
                            {project.videoUrl && (
                                <Link className='link' href={project.videoUrl}>Video</Link>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Projects
