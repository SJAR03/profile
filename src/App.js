import './App.css'
import Avatar from './components/Avatar.jsx'
import Intro from './components/Intro.jsx'
import Skills from './components/Skills.jsx'

function App () {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <Skills />
      </div>
    </div>
  )
}

export default App
