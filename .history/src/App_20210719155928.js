import './App.css'

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const link = 'https://github.com/david-gpu/blog'

  return (
    <div className='App'>
      <div className='content'>
        <h1>{title}</h1>
        <p>linked {likes} times</p>
        <p>{Math.random() * 20}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  )
}

export default App
