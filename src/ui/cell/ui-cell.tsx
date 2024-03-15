interface UICellProps {
  children: React.ReactNode
  isLink?: boolean
  level?: number
  onClick?: () => void
  className?: string
}

const UICell: React.FC<UICellProps> = ({
  children,
  onClick,
  className,
  level = 99,
  isLink = false
}) => {
  return (
    <button
      style={{
        backgroundColor: `rgb(141,103,61,0.${level})`
      }}
      className={`flex items-center uppercase text-[#F9F7F4] w-full text-left shadow-lg active:opacity-[0.9] transition-all active:scale-[1.01] font-bold py-[14px] px-5 rounded-[16px] ${className}`}
      onClick={onClick}
    >
      {children}
      {isLink ? (
        <svg
          className="ml-auto"
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.32738 7.85716e-05C1.49815 -0.000502201 1.66688 0.0371765 1.82117 0.110345C1.97546 0.183514 2.11139 0.290314 2.21897 0.422897L7.73997 7.27939C7.90809 7.48387 8 7.74035 8 8.00504C8 8.26973 7.90809 8.52621 7.73997 8.73068L2.02465 15.5872C1.83063 15.8205 1.55182 15.9673 1.24957 15.9952C0.947312 16.023 0.646365 15.9297 0.412933 15.7357C0.1795 15.5418 0.0327035 15.263 0.00483617 14.9609C-0.0230311 14.6587 0.0703126 14.3578 0.264334 14.1245L5.37383 7.99932L0.435796 1.87419C0.296018 1.70645 0.207228 1.50219 0.179933 1.28559C0.152637 1.06898 0.187977 0.849087 0.281772 0.651931C0.375567 0.454775 0.523891 0.288606 0.709193 0.173086C0.894495 0.0575651 1.10902 -0.00247253 1.32738 7.85716e-05Z"
            fill="white"
          />
        </svg>
      ) : (
        ''
      )}
    </button>
  )
}

export default UICell
