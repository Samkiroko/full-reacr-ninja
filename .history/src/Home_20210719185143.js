import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blog, setBlog] = useState([
    { title: 'My new website', body: 'This is my new website', author: 'John', id: 1 },
    { title: 'My old website', body: 'This is my old website', author: 'John2', id: 2 },
    { title: 'My blog', body: 'This is my blog', author: 'John3', id: 3 },
    { title: 'My website', body: 'This is my website', author: 'John4', id: 4 },
  ])

  const handleDelete = (id) => {
    const newBlog = blog.filter((blog) => blog.id !== id)
    setBlog(newBlog)
  }

  return (
    <div className='home'>
      <BlogList blogs={blog} title='All Blog!' />
      <BlogList blogs={blog.filter((blog) => blog.author === 'John2')} title='All evens!' />
    </div>
  )
}

export default Home
