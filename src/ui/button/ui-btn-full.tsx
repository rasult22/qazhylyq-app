interface UIButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const UIButtonFull: React.FC<UIButtonProps> = ({
  children,
  onClick,
  className
}) => {
  return (
    <button
      className={`bg-[#B19576] text-[#F9F7F4] w-full shadow-lg active:opacity-[0.7] font-bold py-[14px] px-4 rounded-[16px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default UIButtonFull
