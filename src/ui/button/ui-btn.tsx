interface UIButtonProps {
  children: React.ReactNode
  completed?: boolean
  onClick?: () => void
  className?: string
}

const UIButton: React.FC<UIButtonProps> = ({
  children,
  onClick,
  completed = false,
  className
}) => {
  return (
    <button
      className={`${
        completed ? 'bg-[#76B177] text-[#ffff]' : 'bg-[#D4C4B3] text-[#5E5E5E]'
      }  leading-[120%] min-h-[40px] uppercase  shadow-lg active:opacity-[0.7] active:scale-[1.03] transition-all overflow-hidden font-bold py-[8px] px-[16px] rounded-[16px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default UIButton
