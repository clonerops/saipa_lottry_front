/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {PlansTableModel} from '../../../../app/modules/lottory/core/_models'
import {KTSVG} from '../../../../_cloner/helpers'
import {Table} from '../../../../_cloner/helpers/models/_table'

type Props = {
  className: string
  columns: Table[]
  rows: PlansTableModel[]
}

const PlansTable: React.FC<Props> = ({className, columns, rows}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>خودروهای طرح 137</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>تعداد کل </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        ></div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                {columns.map((column) => (
                  <th key={column.id} className='min-w-150px tw-text-center tw-font-VazirBold    '>
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {rows.map((row) => (
                <tr>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.lotterySalePlan}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.announceNo}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.announceRowNo}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.circulationNo}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.carRow}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.mainCapacity}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.reserveCapacity}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          1401/10/25
                        </a>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className='d-flex justify-content-center flex-shrink-0 tw-gap-2'>
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        title='لیست واجد شرایط ها'  
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg me-1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen005.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      <a
                        href='#'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='لیست فاقد شرایط ها'  
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg me-1'
                      >
                        <KTSVG path='/media/icons/duotune/general/gen009.svg' className='svg-icon-3' />
                      </a>
                      <a
                        href='#'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='بهم ریختگی'  
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen011.svg'
                          className='svg-icon-3'
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {PlansTable}
