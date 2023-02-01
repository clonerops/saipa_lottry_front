import {useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {toast} from 'react-toastify'
import {toAbsoluteUrl} from '../../../_cloner/helpers'
import Backdrop from '../../../_cloner/helpers/components/Backdrop'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../_cloner/helpers/components/Modules/InputAndLabel'
import {DownloadExcelFile} from '../../../_cloner/helpers/downloadExcel'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {downloadWinners, lotteryWinners} from './core/_requests'

const StartLottery = () => {
  // start: Define Types
  type TParams = {id: string}
  // end: Define Types

  // start: Define Hooks
  const {id} = useParams<TParams>()
  const location = useLocation()
  const {title, winDistance} = location.state as any
  // end: Define Hooks

  // start: Define State
  const [lotteryRoundValue, setLotteryRoundValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  // end: Define State

  const Execution = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (parseInt(lotteryRoundValue) >= 1 && lotteryRoundValue <= winDistance) {
      if (id) {
        const data = {
          salePlanDetailId: parseInt(id),
          lottery_number: parseInt(lotteryRoundValue),
        }
        setLoading(true)
        setTimeout(async () => {
          const res = await lotteryWinners(data)
          try {
            if (res.status === 200) {
              const result = await downloadWinners(parseInt(id))
              const outputFilename = `LotteryWinners${Date.now()}.csv`
              DownloadExcelFile(result.data, outputFilename)
              setLoading(false)
            } else if (res.data.Succeeded === false) {
              setLoading(false)
              toast.error(res.data.Message, {
                position: 'top-right',
                theme: 'dark',
                bodyClassName: 'tw-font-Vazir',
              })
            } else {
              setLoading(false)
            }
          } catch (error) {
            console.log(error)
            setLoading(false)
          }
        }, 1000)
      }
    } else {
      toast.error('بازه عددی نامعتبر می باشد', {
        bodyClassName: 'tw-font-Vazir',
        position: 'top-right',
        theme: 'dark',
      })
  }
  }

  return (
    <>
      {' '}
      {loading && <Backdrop loading={loading} />}
      <Card5 image='/media/svg/brand-logos/github.svg' title={`قرعه کشی خودروی ${title}`}>
        <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2'>
          <section>
            <img
              src={toAbsoluteUrl('/media/illustrations/img/Lotteryballs.png')}
              width={400}
              height={400}
              className='tw-rounded-xl'
              alt='saipa lottery'
            />
            <span className='tw-text-center tw-w-full tw-font-VazirBold tw-block tw-text-3xl'>
              بازه عددی بین عدد [ 1 , {winDistance} ] می باشد
            </span>
            <form onSubmit={Execution}>
              <InputAndLabel
                title='عدد گردونه'
                valueData={lotteryRoundValue}
                onChangeData={(e) => setLotteryRoundValue(e.target.value)}
                lottery
              />
              <ActionButton title='شروع قرعه کشی' />
            </form>
          </section>
          <section className='tw-hidden md:tw-block'>
            <img
              src={toAbsoluteUrl('/media/bg/0007.jpg')}
              width={400}
              height={400}
              className='tw-rounded-xl '
              alt='saipa'
            />
          </section>
        </div>
      </Card5>
    </>
  )
}

export default StartLottery
