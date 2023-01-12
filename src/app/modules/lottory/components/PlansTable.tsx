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
                {columns.map((c) => (
                  <th key={c.id} className='min-w-150px tw-text-center'>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {rows.map((r) => (
                <tr>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {r.PlansNumber}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.NoticeNumber}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.NoticeRowNumber}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.CircularNumber}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.CarName}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.OriginalCapacity}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.ReserveCapacity}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.BeginDate}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.EndDate}</span>
                  </td>
                  <td className='text-end'>
                    <span className='text-dark tw-text-center fw-bold d-block fs-6'>{r.LotteryDate}</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-center flex-shrink-0 tw-gap-2'>
                        {/* <button className='tw-p-1 tw-bg-indigo-500 tw-text-white tw-rounded-md tw-outline-none '>واجد شرایط</button>
                        <button className='tw-p-1 tw-bg-pink-600 tw-text-white tw-rounded-md tw-outline-none '>فاقد شرایط</button>
                        <button className='tw-p-1 tw-bg-green-600 tw-text-white tw-rounded-md tw-outline-none '>بهم ریختگی</button> */}
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen019.svg'
                          className='svg-icon-3'
                        />
                      </a>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </a>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen027.svg'
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
