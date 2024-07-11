const ArrowUp: React.FC<{ completed?: boolean; className: string }> = ({
  completed,
  className
}) => {
  return (
    <>
      <svg
        className={className}
        width="8"
        height="92"
        viewBox="0 0 8 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 91C3.5 91.2761 3.72386 91.5 4 91.5C4.27614 91.5 4.5 91.2761 4.5 91L3.5 91ZM4.35355 0.646446C4.15828 0.451187 3.8417 0.451187 3.64644 0.646446L0.46446 3.82843C0.269197 4.02369 0.269197 4.34027 0.46446 4.53554C0.659722 4.7308 0.976304 4.7308 1.17157 4.53554L3.99999 1.70711L6.82842 4.53554C7.02368 4.7308 7.34027 4.7308 7.53553 4.53554C7.73079 4.34027 7.73079 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 91L4.49999 1L3.49999 1L3.5 91L4.5 91Z"
          fill={completed ? 'white' : '#7E7E7E'}
        />
      </svg>
    </>
  )
}

export default ArrowUp
