import { useState } from 'react'
import './App.scss'


function App() {
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [inputClass, setInputClass] = useState('')
  const [match, setMatch] = useState(true)


  const changePassword = (e) => {
    const name = e.target.name
    const value = e.target.value
    name === 'password1' ? setPassword1(value) : setPassword2(value);
    setMatch(password1 === password2);
  }

    //Password check
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      alert('Passwords are the same!')
      setInputClass('green');
    } else {
      alert('Passwords are different!');
      setInputClass('red');
    }
    setMatch(true);
  }

  //Cleare input area
  const cleareInput = (e) => {
    e.preventDefault();
    setPassword1('');
    setPassword2('');
    setInputClass('normal')
  }

  return (
    <div className='App'>
      <h3>Registration Field</h3>

      <form className='App__form' onSubmit={handleSubmit}>

        <div>
          <label htmlFor="Password1">Password 1</label>
          <input
            type="password"
            name="password1"
            id="password1"
            onChange={changePassword}
            value={password1}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="Password2">Password 2</label>
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={changePassword}
            value={password2}
            className={inputClass}
          />
        </div>

        <div className='App__btns'>
          <button type='submit' disabled={match}>Submit</button>
          <button onClick={cleareInput}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default App


