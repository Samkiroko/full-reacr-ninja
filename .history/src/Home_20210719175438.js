const Home = () => {
  let name = 'samuel'

  const handleClick = (e) => {
    e.preventDefault()
    name = 'james'
    console.log('clicked')
  }

  return (
    <div className='home'>
      <h2>Home page</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home
