import {FC} from 'react'
import {KTSVG} from './KTSVG'

interface IProps {
  children: React.ReactNode
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<IProps> = ({children, showModal, setShowModal}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className='tw-fixed tw-inset-0 tw-z-50 tw-overflow-y-auto'>
            <div
              className='tw-fixed tw-inset-0 tw-h-full tw-w-full tw-bg-black tw-opacity-40'
              onClick={() => setShowModal(false)}
            ></div>
            <div className='tw-flex tw-min-h-screen tw-items-center tw-px-4 tw-py-8'>
              <div className='tw-relative tw-mx-auto tw-w-full tw-max-w-xl tw-rounded-md tw-bg-white tw-p-4 tw-shadow-lg'>
                <span onClick={() => setShowModal(false)}>
                  <KTSVG path='/media/icons/duotune/coding/cod011.svg' className='svg-icon-3'/>
                </span>
                {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Modal
