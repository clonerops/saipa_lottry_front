import {FC} from 'react'

interface IProps {
  title: string
  width?: string
}

const SelectAndLabel: FC<IProps> = ({title, width = 'w-[14rem]'}) => {
  return (
    <section className='tw-flex tw-items-center tw-p-1 tw-py-2'>
      <label className='tw-font-Vazir tw-text-md tw-inline-block tw-w-[150px] tw-pl-2 tw-text-left'>
        {title}:
      </label>
      <select
        // name='status'
        // data-control='select2'
        // data-hide-search='true'
        className={`form-select tw-border tw-border-gray-400 tw-form-select-sm tw-form-select-white tw-p-2 ${width}`}
        defaultValue='Active'
      >
        <option value='Active'>راهنمایی</option>
        <option value='Approved'>شکایت</option>
        <option value='Declined'>درخواست</option>
      </select>{' '}
    </section>
  )
}

export default SelectAndLabel
