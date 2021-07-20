import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      {' '}
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Home />
        </div>
      </div>
    </Router>
  )
}

export default App
