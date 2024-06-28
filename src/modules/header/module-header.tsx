const ModuleHeader: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <div className="min-h-[50px] flex sticky top-0 bg-white w-[100vw]">
        <div
          onClick={onClick}
          className="flex active:opacity-[0.8] justify-center items-center w-[56px]"
        >
          <svg
            width="12"
            height="24"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0062 23.9999C9.7501 24.0008 9.49708 23.9442 9.2657 23.8345C9.03433 23.7247 8.83049 23.5645 8.66916 23.3657L0.389943 13.0809C0.137826 12.7742 0 12.3895 0 11.9924C0 11.5954 0.137826 11.2107 0.389943 10.904L8.96056 0.619231C9.25152 0.269179 9.66961 0.0490432 10.1229 0.00725332C10.5761 -0.0345366 11.0274 0.105442 11.3775 0.396395C11.7275 0.687348 11.9477 1.10544 11.9895 1.5587C12.0312 2.01196 11.8913 2.46326 11.6003 2.81331L3.93818 12.001L11.3432 21.1887C11.5528 21.4403 11.686 21.7467 11.7269 22.0716C11.7678 22.3965 11.7148 22.7264 11.5742 23.0221C11.4335 23.3178 11.2111 23.5671 10.9332 23.7404C10.6553 23.9137 10.3336 24.0037 10.0062 23.9999Z"
              fill="#261F19"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default ModuleHeader