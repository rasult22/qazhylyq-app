import React, { ReactElement, useState } from 'react'
import tailwindLogo from './tailwind.svg'
import { Link } from 'react-router-dom'
import ModuleBottomNav from './modules/bottom-nav/module-bottom-nav'
import ModuleMain from './modules/main/module-main'
import ModuleMountain from './modules/mountain/module-mountain'
import UIButton from './ui/button/ui-btn'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="space-y-2 flex flex-wrap space-x-2">
        <ModuleMountain />
      </div>
      <ModuleBottomNav></ModuleBottomNav>
    </div>
  )
}

export default App
