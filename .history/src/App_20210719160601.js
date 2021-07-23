import './App.css'
import Navbar from './Navbar'

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const link = 'https://github.com/david-gpu/blog'

  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default App
