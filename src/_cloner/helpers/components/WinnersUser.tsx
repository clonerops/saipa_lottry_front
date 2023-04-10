import {FC} from 'react'
import {toAbsoluteUrl} from '../AssetHelpers'

interface IProps {
  gender: string
  nationalCode: string
  trackingCode: string
}

const WinnersUser: FC<IProps> = ({gender, nationalCode, trackingCode}) => {
  return (
    <div className='tw-flex tw-items-center tw-justify-start tw-h-[80px] tw-gap-4 tw-shadow-lg tw-bg-slate-200 tw-rounded-md'>
      <section className='tw-mr-4'>
        <img
          alt='saipa_user'
          src={toAbsoluteUrl(`/media/avatars/${gender === '0' ? 'male' : 'female'}.png`)}
          width={50}
          height={50}
          className='tw-rounded-md'
        />
      </section>
      <section className='information tw-flex tw-flex-wrap  '>
        <h4 className='tw-text-md tw-py-2 tw-font-VazirBold'>
          <span className='tw-text-slate-500 tw-px-3'>کدملی:</span>{' '}
          <span className='tw-text-xl'>{nationalCode}</span>
        </h4>
        <h4 className='tw-text-md tw-py-2 tw-font-VazirBold'>
          <span className='tw-text-slate-500 tw-px-4'>کد رهگیری:</span>{' '}
          <span className='tw-text-xl'>{trackingCode}</span>
        </h4>
      </section>
    </div>
  )
}

export default WinnersUser
