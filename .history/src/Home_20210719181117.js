import { useState } from 'react'

const Home = () => {
  const [blog, setBlog] = useState([
    { title: 'My new website', body: 'This is my new website', author: 'John', id: 1 },
    { title: 'My old website', body: 'This is my old website', author: 'John2', id: 2 },
    { title: 'My blog', body: 'This is my blog', author: 'John3', id: 3 },
    { title: 'My website', body: 'This is my website', author: 'John4', id: 4 },
  ])
  return <div className='home'></div>
}

export default Home