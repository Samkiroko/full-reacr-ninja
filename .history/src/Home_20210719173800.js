const Home = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
  }

  const handleClickAgain = (name) => {
    console.log('clicked again ' + name)
  }

  return (
    <div className='home'>
      <h2>Home page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain('sam')}>Click me again</button>
    </div>
  )
}

export default Home
