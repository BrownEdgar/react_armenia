import React, { useState } from 'react'
import classNames from 'classnames'

import './App.scss'
import moment from 'moment'

const filterArray = (data, language) => {
  if (language === 'all') return data;
  return data.filter(elem => elem.language === language);
}

export default function App() {
  const [data, setdata] = useState([
    { id: 1, name: "Jhon", language: "javascript", date: moment('2024/12/9') },
    { id: 2, name: "Karen", language: "next", date: moment('2024/2/20') },
    { id: 3, name: "Eleonor", language: "react", date: moment('20230105') },
    { id: 6, name: "Vika", language: "react", date: moment('20240105') },
    { id: 4, name: "Sebastian", language: "javascript", date: moment('2024/11/18') },
    { id: 5, name: "Alen", language: "html", date: moment('2023/6/9') },
  ])

  const [sortByAsc, setsortByAsc] = useState(false)
  const [value, setValue] = useState('all')

  const handleSort = () => {
    if (sortByAsc) {
      setdata((prevData) => {
        return prevData.toSorted((a, b) => a.date > b.date ? 1 : -1)
      })
    } else {
      setdata((prevData) => {
        return prevData.toSorted((a, b) => a.date > b.date ? -1 : 1)
      })
    }
    setsortByAsc(!sortByAsc)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value)
  }

  return (
    <div className={classNames('App')}>
      <table>
        <caption>Our Users</caption>
        <thead>
          <tr>
            <th>#id</th>
            <th>name</th>
            <th className='flex'>
              <span>language</span>
              <select name="language" id="language" defaultValue='all' onChange={handleChange}>
                <option value="all">all</option>
                <option value="javascript">javascript</option>
                <option value="react">react</option>
                <option value="next">next</option>
                <option value="html">html</option>
              </select>
            </th>
            <th>
              date
              <span className='icon'>
                <i
                  className={classNames('bx bx-sort-up bx-md', {
                    'bx-rotate-180': sortByAsc
                  })}
                  onClick={handleSort}></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filterArray(data, value)
              .map(elem => {
                return (
                  <tr
                    key={elem.id}
                    className={classNames({
                      [elem.language]: true,
                    })}>
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.language}</td>
                    <td>
                      {elem.date.format('DD MM YY')}
                    </td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}
