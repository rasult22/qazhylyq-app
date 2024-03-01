import React from 'react'
import CircleOne from './circles/one'
import CircleTwo from './circles/two'
import CircleThree from './circles/three'
const ModuleMain: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-white ">
      <div className="h-[100vh]">
        <CircleOne />
        <CircleTwo />
        <CircleThree />
      </div>
    </div>
  )
}

export default ModuleMain
