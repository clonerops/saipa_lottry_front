const Tooltip = () => {
  return (
    <>
      <button
        data-tooltip-target='tooltip-animation'
        type='button'
        className='tw-text-white tw-bg-blue-700 tw-hover:bg-blue-800 tw-focus:ring-4 tw-focus:outline-none tw-focus:ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-dark:bg-blue-600 tw-dark:hover:bg-blue-700 tw-dark:focus:ring-blue-800'
      >
        Animated tooltip
      </button>
      <div
        id='tooltip-animation'
        role='tooltip'
        className='tw-absolute tw-z-10 tw-invisible tw-inline-block tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-transition-opacity tw-duration-300 tw-bg-gray-900 tw-rounded-lg tw-shadow-sm tw-opacity-0 tooltip tw-dark:bg-gray-700'
      >
        Tooltip content
        <div className='tooltip-arrow' data-popper-arrow></div>
      </div>
    </>
  )
}

export default Tooltip
