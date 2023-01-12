/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useState} from 'react'
import {KTSVG} from '../../../helpers'
import { CreateAppModal } from '../../../partials'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1 = () => {
  const {classes} = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <>
    <div className='toolbar py-5 py-lg-15' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />

        {/* begin::Actions */}
        <div className='d-flex align-items-center py-1'>
          {/* end::Button */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
    <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />

    </>
  )
}

export {Toolbar1}
