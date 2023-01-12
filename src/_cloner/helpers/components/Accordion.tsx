import React, {FC} from 'react'

interface IProps {
  title: string
  body: React.ReactNode
}

const Accordion: FC<IProps> = ({title, body}) => {
  return (
    <>
      <div className='accordion' id='kt_accordion_1'>
        <div className='accordion-item tw-shadow-lg'>
          <h2 className='accordion-header' id='kt_accordion_1_header_1'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_accordion_1_body_1'
              aria-expanded='false'
              aria-controls='kt_accordion_1_body_1'
            >
              {title}
            </button>
          </h2>
          <div
            id='kt_accordion_1_body_1'
            className='accordion-collapse collapse'
            aria-labelledby='kt_accordion_1_header_1'
            data-bs-parent='#kt_accordion_1'
          >
            <div className='accordion-body'>
                {body}
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default Accordion
