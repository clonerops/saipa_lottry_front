const Toast = () => {
  return (
    <div
      id='toast-default'
      className='tw-flex tw-items-center tw-w-full tw-max-w-xs tw-p-4 tw-text-gray-500 tw-bg-white tw-rounded-lg tw-shadow tw-dark:text-gray-400 tw-dark:bg-gray-800'
      role='alert'
    >
      <div className='tw-inline-flex tw-items-center tw-justify-center tw-flex-shrink-0 tw-w-8 tw-h-8 tw-text-blue-500 tw-bg-blue-100 tw-rounded-lg tw-dark:bg-blue-800 tw-dark:text-blue-200'>
        <svg
          aria-hidden='true'
          className='tw-w-5 tw-h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <span className='sr-only'>Fire icon</span>
      </div>
      <div className='tw-ml-3 tw-text-sm tw-font-normal'>Set yourself free.</div>
      <button
        type='button'
        className='tw-ml-auto tw--mx-1.5 tw--my-1.5 tw-bg-white tw-text-gray-400 tw-hover:tw-text-gray-900 tw-rounded-lg tw-focus:ring-2 tw-focus:tw-ring-gray-300 tw-p-1.5 tw-hover:tw-bg-gray-100 tw-inline-flex tw-h-8 tw-w-8 tw-dark:tw-text-gray-500 tw-dark:hover:tw-text-white tw-dark:tw-bg-gray-800 tw-dark:hover:tw-bg-gray-700'
        data-dismiss-target='#toast-default'
        aria-label='Close'
      >
        <span className='sr-only'>Close</span>
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Toast
