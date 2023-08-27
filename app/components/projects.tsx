import React from 'react'
import projectsData from '../data/projectsData.json'
import Link from 'next/link'
import { FaGithub, FaYoutube, FaLink } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='section'>
      <h1 className='heading text-lg '>
        {projectsData.heading}
      </h1>
      <div className='project_container'>
            {projectsData.data.map(project => (
                <div className='project_card' key={project.id}>
                    <h1 className='project_name pb-2'>
                        {project.name}
                    </h1>
                    <hr className='pt-2'/>
                    <div className='description_box'>
                        <div>
                        <p className='project_description p-5 flex items-center'>
                            {project.description}
                        </p>

                        </div>
                        <div className='links'>
                            <div>
                            {project.videoUrl && (
                                <Link className='link' href={project.videoUrl}><FaYoutube/></Link>
                            )}
                            </div>
                            <div>
                            {project.deployedUrl && (
                                <Link className='link' href={project.deployedUrl}><FaLink/></Link>
                            )}
                            </div>
                            <div>
                            {project.githubUrl && (
                                <Link className='link' href={project.githubUrl}><FaGithub/></Link>
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
