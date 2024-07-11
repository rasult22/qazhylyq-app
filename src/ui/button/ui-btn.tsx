interface UIButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const UIButton: React.FC<UIButtonProps> = ({
  children,
  onClick,
  className
}) => {
  return (
    <button
      className={`bg-[#D4C4B3] leading-[120%] min-h-[40px] uppercase text-[#5E5E5E] shadow-lg active:opacity-[0.7] active:scale-[1.03] transition-all overflow-hidden font-bold py-2 px-4 rounded-[16px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default UIButton
