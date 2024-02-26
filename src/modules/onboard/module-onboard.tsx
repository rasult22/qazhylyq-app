import React from 'react'
import logo from './logo.png'
const ModuleOnboard: React.FC = () => {
  return (
    <div className="fixed top-0 w-full h-full bg-white flex flex-col items-center justify-center">
      <img className="w-[248px] mb-[40px]" src={logo} alt="Module Onboard" />
      <h1 className="text-[24px] leading-[28px] text-[#B19576] uppercase font-bold mb-4">
        Қажылық және <br /> ұмра дұғалары
      </h1>
    </div>
  )
}

export default ModuleOnboard
