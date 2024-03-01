import React, { useState } from 'react'
import './App.scss'
import { nanoid } from 'nanoid';
const languages = ['htmlcss', 'javascript', 'react', 'node', 'typescript', 'java']


export default function App() {
  const [users, setusers] = useState([]);
  const [ischecked, setIsChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nickname: { value } } = e.target.elements;
    const languages = e.target.languages.value;
    const { about: { value: about } } = e.target
    const user = {
      id: nanoid(),
      nickname: value,
      languages,
      about
    }
    setusers([...users, user])

  }
  const handleChange = (e) => {
    const { checked } = e.target;
    setIsChecked(checked)
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='nickname' placeholder='nickname' required />
        <div className="languages">

          {languages.map(elem => {
            return (
              <label htmlFor={elem} key={elem}>
                <input type="radio" value={elem} name='languages' id={elem} />
                <span>{elem}</span>
              </label>
            )
          })}
        </div>

        <textarea name="about" id="about" cols="50" rows="10" maxLength={100} minLength={15}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem laboriosam nisi.
        </textarea>
        <p>
          <input
            type="checkbox"
            name='privacy policy'
            id='policy'
            checked={ischecked}
            onChange={handleChange} />
          <label htmlFor="policy">I agree</label>
        </p>
        <input type="submit" value='join' disabled={!ischecked} />
      </form>
    </div>
  )
}
