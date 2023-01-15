import {FC} from 'react'
import {SelectModel} from '../../models/_select'

interface IProps {
  title: string
  width?: string
  options?: SelectModel[]
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const SelectAndLabel: FC<IProps> = ({options, setSelected, title, width = 'w-[14rem]'}) => {
  return (
    <section className='tw-flex tw-items-center tw-p-1 tw-py-2'>
      <label className='tw-font-Vazir tw-text-md tw-inline-block tw-w-[150px] tw-pl-2 tw-text-left'>
        {title}:
      </label>
      <select
        onChange={(e) => setSelected(e.target.value)}
        className={`form-select tw-border tw-border-gray-400 tw-form-select-sm tw-form-select-white tw-p-2 ${width}`}
        defaultValue='Active'
      >
        {options?.map((option) => (
          <option className='tw-font-Vazir' key={option.Id} value={option.Id}>
            {option.Description}
          </option>
        ))}
      </select>{' '}
    </section>
  )
}

export default SelectAndLabel
