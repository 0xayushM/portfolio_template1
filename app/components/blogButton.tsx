import Link from 'next/link'
import React from 'react'
import blogData from '../data/blogData.json'

const BlogButton = () => {
  return (
    <div className='blog_button'>
      <Link href={blogData.link} target="_blank">
        My Blogs
      </Link>
    </div>
  )
}

export default BlogButton
