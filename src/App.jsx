import './styles/App.css'
import { useState } from 'react'
import Home from './components/Home'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and sets it to the input's value
    // This has already been hooked up for you!
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
    // Already does what you need it to, just have to hook it up to your buttons with an onClick
    // If you decide to make a function for going BACK (bonus), maybe make it do the opposite of this?
  }

  const reset = () => {
    setCurrentPage(0);
    setFormValues({ name: '', age: '', email: ''});
  }

  return (
    <div className="App">
      <Home
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        handleChange={handleChange}
        reset={reset}
      />
    </div>
  )
}

export default App 
