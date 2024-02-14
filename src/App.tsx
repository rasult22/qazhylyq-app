import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import { Link } from 'react-router-dom'
import ModuleBottomNav from './modules/module-bottom-nav'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ModuleBottomNav></ModuleBottomNav>
    </div>
  )
}

export default App
