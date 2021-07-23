import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className='home'>
      {loading && <div className='loading'>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home
