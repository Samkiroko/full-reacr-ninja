import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('samuel')
  const [age, setAge] = useState(29)

  const handleClick = () => {
    setName('Kiroko')
  }

  return (
    <div className='home'>
      <h2>Home page</h2>
      <p>
        {name} is {age}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home
