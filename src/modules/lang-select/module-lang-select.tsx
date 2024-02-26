import React from 'react'
import UIButtonFull from '../../ui/button/ui-btn-full'

const ModuleLangSelect: React.FC = () => {
  const langs = ['Қазақша', 'Русский', 'Төтөше']
  return (
    <div className="fixed top-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-[24px] px-[18px]">
      {langs.map((l) => {
        return <UIButtonFull key={l}>{l}</UIButtonFull>
      })}
    </div>
  )
}

export default ModuleLangSelect
