import React, { ReactElement, useState } from 'react'
import tailwindLogo from './tailwind.svg'
import { Link } from 'react-router-dom'
import ModuleBottomNav from './modules/bottom-nav/module-bottom-nav'
import ModuleLangSelect from './modules/lang-select/module-lang-select'
import UIButton from './ui/button/ui-btn'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="space-y-2 flex flex-wrap space-x-2">
        <ModuleLangSelect />
        <UIButton>Таупқа бастау дұғасы</UIButton>
        <UIButton>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
              stroke="#A2815D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </UIButton>
        <UIButton>Таупқа бастау дұғасы</UIButton>
        <UIButton>Таупқа бастау дұғасы</UIButton>
      </div>
      <ModuleBottomNav></ModuleBottomNav>
    </div>
  )
}

export default App
