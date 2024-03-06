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
      className={`bg-[#E0D5C9] h-[40px] uppercase text-[#A2815D] shadow-lg active:opacity-[0.7] active:scale-[1.03] transition-all font-bold py-2 px-4 rounded-[16px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default UIButton
