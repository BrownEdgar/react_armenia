import React from 'react'
import List from './Components/List/List'

export default function App() {
    return (
      <div>
          <List target = {"todos"} quantity={8} />
      </div>
    )
}
