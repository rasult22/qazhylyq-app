const ArrowUpLong: React.FC<{ completed?: boolean; className: string }> = ({
  completed = false,
  className
}) => {
  return (
    <>
      <svg
        className={className}
        width="8"
        height="196"
        viewBox="0 0 8 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 195C3.5 195.276 3.72386 195.5 4 195.5C4.27614 195.5 4.5 195.276 4.5 195L3.5 195ZM4.35354 0.646454C4.15828 0.451187 3.8417 0.451187 3.64644 0.646454L0.464458 3.82843C0.269196 4.0237 0.269196 4.34027 0.464458 4.53554C0.65972 4.73079 0.976302 4.73079 1.17156 4.53554L3.99999 1.70711L6.82842 4.53554C7.02368 4.73079 7.34026 4.73079 7.53553 4.53554C7.73079 4.34027 7.73079 4.0237 7.53553 3.82843L4.35354 0.646454ZM4.5 195L4.49999 1L3.49999 1L3.5 195L4.5 195Z"
          fill={completed ? 'white' : '#7E7E7E'}
        />
      </svg>
    </>
  )
}

export default ArrowUpLong
