/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {toast} from 'react-toastify'
import {PlansTableModel, WinnersList} from '../../../../app/modules/lottory/core/_models'
import {KTSVG} from '../../../../_cloner/helpers'
import {DownloadExcelFile} from '../../../../_cloner/helpers/downloadExcel'
import {Table} from '../../../../_cloner/helpers/models/_table'
import {useNavigate} from 'react-router-dom'
import {
  downloadLotteryAllValidApplicant,
  downloadLotteryInValidApplicant,
  downloadLotteryValidApplicant,
  downloadWinners,
  lotteryMessApplicants,
  showWinnersList,
} from '../core/_requests'
import Modal from '../../../../_cloner/helpers/components/Modal'
import InputAndLabel from '../../../../_cloner/helpers/components/Modules/InputAndLabel'
import WinnersUser from '../../../../_cloner/helpers/components/WinnersUser'
// import SwiperComponent from '../../../../_cloner/helpers/components/Swiper'

type Props = {
  className: string
  columns: Table[]
  rows: PlansTableModel[]
  setLoad?: React.Dispatch<React.SetStateAction<boolean>> | undefined
}

const PlansTable: React.FC<Props> = ({className, columns, rows, setLoad}) => {
  // start: Define Hooks
  let navigate = useNavigate()
  const [selectedRow, setSelectedRow] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showWinnersListId, setShowWinnersListId] = useState<number>(0)
  const [winnerList, setWinnersList] = useState<WinnersList[]>([])
  const [showWinnersListCount, setShowWinnersListCount] = useState<string>('3')
  const [showProductName, setShowProductName] = useState<string>('')

  // end: Define Hooks
  // start: Define Functions
  const handleLotteryWinners = (
    salePlanDetailId: number,
    title: string,
    winDistance: number
  ): void => {
    navigate(`/startlottery/${salePlanDetailId}`, {state: {title: title, winDistance: winDistance}})
  }
  // start: Functions
  const handleCheck = (rowId: number): void => setSelectedRow(rowId)
  // end: Functions
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
      toast.error('خطا در دانلود لیست متقاضیان', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })

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
      toast.error('خطا در دانلود لیست واجدین شرایط', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })

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
      toast.error('خطا در دانلود لیست فاقدین شرایط', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })
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
  const MessAndDownloadValidApplicantList = (salePlanDetailId: number) => {
    if (setLoad) setLoad(true)
    setTimeout(async () => {
      const sendData = {
        salePlanDetailId: salePlanDetailId,
      }
      try {
        const res = await lotteryMessApplicants(sendData)
        if (res.data.Succeeded === false) {
          toast.error(res.data.Message, {
            bodyClassName: 'tw-font-Vazir',
            position: 'top-right',
            theme: 'dark',
          })
        }
          const result = await downloadLotteryValidApplicant(salePlanDetailId)
          const outputFilename = `LotteryMessApplicants${Date.now()}.csv`
          DownloadExcelFile(result.data, outputFilename)
          toast.success('بهم ریختگی لیست واجدین شرایط انجام شد', {
          bodyClassName: 'tw-font-Vazir',
          position: 'top-right',
          theme: 'dark',
        })
        if (setLoad) setLoad(false)
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
  // end: Download Excel Files
  // start: Handle Show Winners List

  const handleShowWinnerList = async (rowId: number, productName: string) => {
    if (setLoad) setLoad(true)
    setShowWinnersListId(rowId)
    const res = await ShowWinnerListCallApi(rowId, showWinnersListCount, setWinnersList)
    if (res?.status === 200) {
      setShowModal(true)
      setShowProductName(productName)
      if (setLoad) setLoad(false)
    } else {
      if (setLoad) setLoad(false)
    }
  }
  const handleShowWinnerListWithInput = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await ShowWinnerListCallApi(showWinnersListId, showWinnersListCount, setWinnersList)
  }
  // end: Handle Show Winners List

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bold fs-3 mb-1'>خودروهای طرح {title}</span> */}
          <span className='tw-text-xl tw-font-VazirBold'>
            تعداد کل خودروهای موجود در قرعه کشی{' '}
            <span className='tw-text-white tw-text-3xl tw-bg-green-700 tw-px-4 tw-rounded-full'>
              {rows.length}
            </span>{' '}
            عدد می باشد{' '}
          </span>
          {/* <span className='tw-text-5xl tw-font-VazirBold'>
            تعداد کل خودروهای موجود در قرعه کشی{' '}
            <span className='tw-text-green-700 tw-text-5xl'>{rows.length}</span> عدد می باشد{' '}
          </span> */}
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
          {/* {rows.length === 0 && (
            <section className='tw-bg-sky-200 tw-w-full tw-rounded-lg tw-py-4 tw-px-8 tw-text-black tw-font-VazirBold tw-text-lg tw-mb-8'>
              لطفا یکی از طرح های فروش سایپا را انتخاب نمایید!
            </section>
          )} */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-2'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className='min-w-120px tw-text-center tw-font-VazirBold text-dark'
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {rows.map((row, index) => (
                // <tr key={row.id}  className={`${checked ? 'tw-bg-slate-200' : ''}`}>
                <tr
                  key={index}
                  id={index.toString()}
                  onClick={() => handleCheck(index)}
                  className={`${selectedRow === index ? 'tw-bg-slate-300' : ''} tw-cursor-pointer`}
                >
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-dark fw-bold fs-6'>{row.circulationNo}</span>
                      </div>
                    </div>
                  </td>
                  {/* <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold  fs-6'>
                          {row.circulationDesc}
                        </a>
                      </div>
                    </div>
                  </td> */}
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-dark fw-bold fs-6'>{row.description}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-dark fw-bold fs-6'>{row.mainCapacity}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-dark fw-bold fs-6'>{row.reserveCapacity}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex tw-justify-center align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-dark fw-bold fs-6'>{row.winDistance}</span>
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
                        className={`${'btn-active-color-primary'} btn btn-icon btn-bg-light  btn-lg`}
                        // className={`${
                        //   row.lotteryStatusId === 0
                        //     ? 'btn-color-primary'
                        //     : 'btn-active-color-primary'
                        // } btn btn-icon btn-bg-light  btn-lg`}
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
                        className={`${'btn-active-color-primary'} btn btn-icon btn-bg-light  btn-lg`}
                        // className={`${
                        //   row.lotteryStatusId === 0
                        //     ? 'btn-color-primary'
                        //     : 'btn-active-color-primary'
                        // } btn btn-icon btn-bg-light  btn-lg`}
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
                        className={`${'btn-active-color-primary'} btn btn-icon btn-bg-light  btn-lg`}
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen009.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      {/* {row.lotteryStatusId === 0 && ( */}
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        disabled={row.lotteryStatusId !== 0}
                        title='بهم ریختگی'
                        onClick={() => MessAndDownloadValidApplicantList(row.id)}
                        className={`${'btn-active-color-primary'} btn btn-icon btn-bg-light  btn-lg`}
                        // className={`${
                        //   row.lotteryStatusId === 0
                        //     ? 'btn-color-primary'
                        //     : 'btn-active-color-primary'
                        // } btn btn-icon btn-bg-light  btn-lg`}
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen011.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      {/* )} */}
                      <button
                        data-toggle='tooltip'
                        data-placement='top'
                        title='قرعه کشی'
                        onClick={
                          row.lotteryStatusId === 0
                            ? () => handleLotteryWinners(row.id, row.description, row.winDistance)
                            : () => DownloadWinners(row.id)
                        }
                        className={`${
                          row.lotteryStatusId === 0
                            ? 'tw-bg-orange-600 hover:tw-bg-orange-700'
                            : 'tw-bg-indigo-600 hover:tw-bg-indigo-700'
                        } tw-font-VazirBold tw-text-white tw-rounded-md tw-w-[90px] tw-transition`}
                      >
                        {row.lotteryStatusId === 0 ? 'قرعه کشی' : 'لیست منتخبین'}
                      </button>
                      {row.lotteryStatusId !== 0 && (
                        <button
                          data-toggle='tooltip'
                          data-placement='top'
                          title='قرعه کشی'
                          onClick={() => handleShowWinnerList(row.id, row.description)}
                          className={`${
                            row.lotteryStatusId === 0
                              ? 'tw-bg-orange-600 hover:tw-bg-orange-700'
                              : 'tw-bg-indigo-600 hover:tw-bg-indigo-700'
                          } tw-font-VazirBold tw-text-white tw-rounded-md tw-w-[90px] tw-transition`}
                        >
                          نمایش منتخبین
                        </button>
                      )}
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
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <h3 className='tw-font-VazirBold tw-py-4 tw-text-2xl'>
            {`برندگان خودروی ${showProductName}`}
          </h3>
          <form onSubmit={(e) => handleShowWinnerListWithInput(e)}>
            <p>
              <span className='tw-text-red-600'>نکته:</span> بصورت پیشفرض 3 نفر اول برندگان هر طرح
              نمایش داده می شود برای نمایش اطلاعات برندگان بیشتر لطفا تعداد آن را در فیلد زیر وارد
              کنید
            </p>
            <section className='tw-flex'>
              <InputAndLabel
                lottery
                title='تعداد نمایش برندگان'
                valueData={showWinnersListCount}
                onChangeData={(e) => setShowWinnersListCount(e.target.value)}
              />
              <button className='tw-bg-indigo-500 tw-text-white tw-py-0 tw-px-4 tw-rounded-md tw-h-[40px] tw-mt-2'>
                نمایش
              </button>
            </section>
          </form>
          {winnerList.map((i) => (
            <div key={i.nationalcode} className='tw-mt-4 tw-mb-4'>
              <WinnersUser
                nationalCode={i.nationalcode}
                trackingCode={i.trackingcode}
                gender={i.gender}
              />
            </div>
          ))}
          {/* <SwiperComponent /> */}
        </Modal>
        {/* end: Modal Lottery */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {PlansTable}
async function ShowWinnerListCallApi(
  showWinnersListId: number,
  showWinnersListCount: string,
  setWinnersList: React.Dispatch<React.SetStateAction<WinnersList[]>>
) {
  try {
    const res = await showWinnersList(showWinnersListId, parseInt(showWinnersListCount))
    if (res.status === 200) {
      setWinnersList(res.data.data)
    }
    return res
  } catch (error) {
    console.log(error)
  }
}
