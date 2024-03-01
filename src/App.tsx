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
      <div className="pb-[79px]">
        <ModuleMountain />
      </div>
      <div className="fixed bottom-0">
        <ModuleBottomNav></ModuleBottomNav>
      </div>
    </div>
  )
}

export default App
