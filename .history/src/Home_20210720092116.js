import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const { data: blogs, loading, error } = useState(' http://localhost:8000/blogs')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <div className='loading'>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home
