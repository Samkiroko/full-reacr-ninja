const Home = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <div className='home'>
      <h2>Home page</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home
