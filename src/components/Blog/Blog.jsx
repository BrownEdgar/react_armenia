import React from 'react'
import './Blog.css'
import convertDate from '../../helpers/convertDate'

export default function Blog({ blogs }) {
  return (
    <div className='Blog'>
      {
        blogs.map(elem => {
          return (
            <div className={`Blog__item ${elem.inStock ? "" : "Blog__item-inactive"}`} key={elem.id}>
              <img src={elem.image} alt={elem.title} />
              <div className="Blog__content">
                <h2>{elem.title}</h2>
                <p>{elem.desc}</p>
                <ul className='Blog__list'>
                  <li>
                    <span>
                      {
                        elem.inStock
                          ? <i class="bi bi-check2-square"></i>
                          : <i class="bi bi-x-lg"></i>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="bi bi-tag"></i>
                    </span>
                    {elem.price}
                  </li>

                  {elem.inStock ? null : (
                    <li>
                      <span>
                        <i class="bi bi-alarm"></i>
                      </span>
                      {convertDate(elem.hoursAgo)}
                    </li>
                  )}

                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
