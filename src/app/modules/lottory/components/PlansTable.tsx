/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, {useState} from 'react'
import {toast} from 'react-toastify'
import {PlansTableModel} from '../../../../app/modules/lottory/core/_models'
import {KTSVG} from '../../../../_cloner/helpers'
import Modal from '../../../../_cloner/helpers/components/Modal'
import ActionButton from '../../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../../_cloner/helpers/components/Modules/InputAndLabel'
import {DownloadExcelFile} from '../../../../_cloner/helpers/downloadExcel'
import {Table} from '../../../../_cloner/helpers/models/_table'
import {useNavigate} from 'react-router-dom'
import {
  downloadLotteryAllValidApplicant,
  downloadLotteryInValidApplicant,
  downloadLotteryValidApplicant,
  downloadWinners,
  lotteryMessApplicants,
  lotteryWinners,
} from '../core/_requests'

type Props = {
  className: string
  columns: Table[]
  rows: PlansTableModel[]
  setLoad?: React.Dispatch<React.SetStateAction<boolean>> | undefined
  title: string
}

const PlansTable: React.FC<Props> = ({className, columns, rows, setLoad, title}) => {
  // start: Define Hooks
  let navigate = useNavigate()
  // end: Define Hooks
  //start: Define States
  const [showModal, setShowModal] = useState<boolean>(false)
  const [lotteryWinnersSalePlanDetailId, setLotteryWinnersSalePlanDetailId] = useState<number>(0)
  const [lotteryRoundValue, setLotteryRoundValue] = useState<string>('')
  //end: Define States

  // start: Define Functions
  const handleLotteryWinners = (salePlanDetailId: number, title: string): void => {
    navigate(`/startlottery/${salePlanDetailId}`, {state: {title: title}})
    // setLotteryRoundValue('')
    // setShowModal(true)
    // setLotteryWinnersSalePlanDetailId(salePlanDetailId)
  }
  // start: Download Excel Files
  const DownloadAllApplicant = async (salePlanDetailId: number) => {
    if (setLoad) setLoad(true)
    try {
      const res = await downloadLotteryAllValidApplicant(salePlanDetailId)
      const outputFilename = `LotteryAllValidApplicants${Date.now()}.csv`
      DownloadExcelFile(res.data, outputFilename)
      toast.success('خروجی لیست تمامی متقاضیان با موفقیت دانلود شد', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })
      if (setLoad) setLoad(false)
    } catch (error) {
      console.log(error)
      if (setLoad) setLoad(false)
    }
  }
  const DownloadValidApplicant = async (salePlanDetailId: number) => {
    if (setLoad) setLoad(true)
    try {
      const res = await downloadLotteryValidApplicant(salePlanDetailId)
      const outputFilename = `LotteryValidApplicants${Date.now()}.csv`
      DownloadExcelFile(res.data, outputFilename)
      toast.success('خروجی لیست واجدین شرایط با موفقیت دانلود شد', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })
      if (setLoad) setLoad(false)
    } catch (error) {
      console.log(error)
      if (setLoad) setLoad(false)
    }
  }
  const DownloadNotValidApplicant = async (salePlanDetailId: number) => {
    if (setLoad) setLoad(true)
    try {
      const res = await downloadLotteryInValidApplicant(salePlanDetailId)
      const outputFilename = `LotteryInValidApplicants${Date.now()}.csv`
      DownloadExcelFile(res.data, outputFilename)
      toast.success('خروجی لیست فاقدین شرایط با موفقیت دانلود شد', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })
      if (setLoad) setLoad(false)
    } catch (error) {
      console.log(error)
      if (setLoad) setLoad(false)
    }
  }
  const DownloadWinners = async (salePlanDetailId: number) => {
    if (setLoad) setLoad(true)
    try {
      const res = await downloadWinners(salePlanDetailId)
      const outputFilename = `LotteryWinners${Date.now()}.csv`
      DownloadExcelFile(res.data, outputFilename)
      toast.success('لیست برندگان با موفقیت دانلود شد', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })
      if (setLoad) setLoad(false)
    } catch (error) {
      console.log(error)
      if (setLoad) setLoad(false)
    }
  }
  const MessValidApplicantList = (salePlanDetailId: number) => {
    if (setLoad) setLoad(true)
    setTimeout(async () => {
      const sendData = {
        salePlanDetailId: salePlanDetailId,
      }
      try {
        const res = await lotteryMessApplicants(sendData)
        toast.success('بهم ریختگی لیست واجدین شرایط انجام شد', {
          bodyClassName: 'tw-font-Vazir',
          position: 'top-right',
          theme: 'dark',
        })
        if (setLoad) setLoad(false)
        console.log(res)
      } catch (error) {
        toast.error('مشکلی پیش آمده! دوباره سعی کنید', {
          bodyClassName: 'tw-font-Vazir',
          position: 'top-right',
          theme: 'dark',
        })
        if (setLoad) setLoad(false)
        console.log(error)
      }
    }, 2000)
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bold fs-3 mb-1'>خودروهای طرح {title}</span> */}
          <span className='text-muted mt-1 fw-semibold fs-7'>تعداد کل خودروهای موجود در قرعه کشی <span className='tw-text-green-700 tw-text-lg'>{rows.length}</span> عدد می باشد </span>
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
          {/* {rows.length == 0 && (
            <section className='tw-bg-sky-200 tw-w-full tw-rounded-lg tw-py-4 tw-px-8 tw-text-black tw-font-VazirBold tw-text-lg tw-mb-8'>
              لطفا یکی از طرح های فروش سایپا را انتخاب نمایید!
            </section>
          )} */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                {columns.map((column) => (
                  <th key={column.id} className='min-w-150px tw-text-center tw-font-VazirBold'>
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
                          {row.id}
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
                        title='لیست کل متقاضیان'
                        onClick={() => DownloadAllApplicant(row.id)}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg me-1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/communication/com006.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        title='لیست واجد شرایط ها'
                        onClick={() => DownloadValidApplicant(row.lotterySalePlanId)}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg me-1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen005.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        title='لیست فاقد شرایط ها'
                        onClick={() => DownloadNotValidApplicant(row.id)}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg me-1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen009.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        title='بهم ریختگی'
                        onClick={() => MessValidApplicantList(row.id)}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-lg'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen011.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        title='قرعه کشی'
                        onClick={row.lotterySalePlanId == 1 ? () => handleLotteryWinners(row.id, row.description) : () => DownloadWinners(row.id)}
                        className='tw-bg-orange-600 tw-font-VazirBold tw-text-white tw-rounded-md tw-w-[80px] hover:tw-bg-orange-700 tw-transition'
                      >
                       {row.lotterySalePlanId == 1 ? 'قرعه کشی' : 'لیست برندگان'}
                      </button>
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
        {/* start: Modal Lottery */}
        {/* <Modal showModal={showModal} setShowModal={setShowModal}>
          <form onSubmit={Execution}>
            <InputAndLabel
              title='عدد گردونه'
              lottery
              valueData={lotteryRoundValue}
              onChangeData={(e) => setLotteryRoundValue(e.target.value)}
            />
            <ActionButton title='اجرا' />
          </form>
        </Modal> */}
        {/* end: Modal Lottery */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {PlansTable}
