import { useState } from 'react'

const Home = () => {
  const [blog, setBlog] = useState([{ title: 'My new website', body: 'This is my new website', author: 'John', id: 1 }])
  return <div className='home'></div>
}

export default Home
