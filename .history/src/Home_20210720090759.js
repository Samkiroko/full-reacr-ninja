import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(' http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch form the database')
        }
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
        setLoading(false)
        setError(null)
      })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <div className='loading'>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home
