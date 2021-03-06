import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, error, loading } = useFetch(' http://localhost:8000/blogs' + id)

  return (
    <div className='blog-details'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  )
}

export default BlogDetails
