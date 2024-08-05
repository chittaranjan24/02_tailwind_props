
import './App.css'

import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 mb-5 text-black font-bold'>Test Tailwind</h1>
      <Card  userName = 'Chittaranjan' buttonText = 'Click Me' />
      <Card userName = 'Anjali' buttonText = 'Visit Me' />      
    </>
  )
}

export default App
