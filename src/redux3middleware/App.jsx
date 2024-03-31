import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import { getAllGenders, getFemaleGanders, getMaleGanders } from './features/gendersSlice'
import './App.scss'

export default function App() {
  const [isMale, setisMale] = useState(false);
  const [isFemale, setisFemale] = useState(false);
  const gender = useSelector(getAllGenders)
  const male = useSelector(getMaleGanders)
  const female = useSelector(getFemaleGanders)
 
  const getMaleFunc = () => {
    setisFemale(false)
    setisMale(true)
  }
  const getAllFunc = () => {
    setisFemale(false)
    setisMale(false)
  }
  const getFemaleFunc = () => {
    setisFemale(true)
    setisMale(false)
  }
  return (
    <div className='Gender'>
      <div className='chooseGender'>
        <button onClick={getAllFunc}>All Genders</button>
        <button onClick={getMaleFunc}>Only Male</button>
        <button onClick={getFemaleFunc}>Only Female</button>
      </div>
      <div className='showGenders'>
        <div className='headers'>
          <div><h1>Name</h1></div>
          <div><h1>Email</h1></div>
        </div>
        <div>
          {
            !isMale && !isFemale
              ?
              <div>
                {
                  gender.map(elm => {
                    return (
                      <div key={elm.id} className='datas'>
                        <div>{elm.name}</div>
                        <div>{elm.email}</div>
                      </div>
                    )
                  })
                }
              </div>
              : <div>
                {
                  isMale
                    ?
                    <div>
                      {
                        male.map(elm => {
                          return (
                            <div key={elm.id} className='datas'>
                              <div>{elm.name}</div>
                              <div>{elm.email}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                    : <div>
                      {
                        isFemale
                          ?
                          <div>
                            {
                              female.map(elm => {
                                return (
                                  <div key={elm.id} className='datas'>
                                    <div>{elm.name}</div>
                                    <div>{elm.email}</div>
                                  </div>
                                )
                              })
                            }
                          </div>
                          : null
                      }
                    </div>
                }
              </div>
          }
        </div>
      </div>

    </div>
  )
}