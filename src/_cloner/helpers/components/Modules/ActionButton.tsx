import {FC} from 'react'

interface IProps {
  title: string
}

const ActionButton: FC<IProps> = ({title}) => {
  return (
    // <button className='font-IRANSans w-[10rem] rounded-lg border border-indigo-300 bg-indigo-700 p-3 text-white'>
    //   {title}
    // </button>
    <section className='tw-flex tw-items-center tw-p-1 tw-py-2'>
      <label className='tw-font-Vazir tw-text-md tw-inline-block tw-w-[150px] tw-pl-2 tw-text-left' />
      <input
        type='submit'
        value={title}
        className='tw-font-Vazir tw-float-left tw-m-0 tw-inline-block tw-w-[14rem] tw-rounded-md tw-border tw-border-gray-400 tw-bg-indigo-500 tw-p-1 tw-text-lg tw-text-white tw-outline-none'
      />
    </section>
  )
}

export default ActionButton
