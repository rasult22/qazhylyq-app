import React, { ReactElement, useState } from 'react'
import tailwindLogo from './tailwind.svg'
import { Link } from 'react-router-dom'
import ModuleBottomNav from './modules/bottom-nav/module-bottom-nav'
import ModuleMain from './modules/main/module-main'
import ModuleMountain from './modules/mountain/module-mountain'
import UIButton from './ui/button/ui-btn'

function App(): ReactElement {
  return (
    <div>
      <div className="pb-[79px]">Main Page</div>
    </div>
  )
}

export default App
