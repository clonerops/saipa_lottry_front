import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import PlanColumns from '../../../_cloner/helpers/grid-col-value/plans.json'
import PlansRows from '../../../_cloner/helpers/fakedata/plansData.json'
import { PlansTable } from './components/PlansTable'
import { useEffect, useState } from 'react'
import { retrieveSalePlansDetailsRequest, retrieveSalePlansRequest } from './core/_requests'
import { SelectModel } from '../../../_cloner/helpers/models/_select'
import salePlansFakeData from '../../../_cloner/helpers/fakedata/plans.json'

const Lottery = () => {

  const [salePlans, setSalePlans] = useState<SelectModel[]>([])
  const [salePlansDetails, setSalePlansDetails] = useState({})
  const [selected, setSelected] = useState<string>('')

  const retrieveSalePlans = async() => {
    try {
      const {data} = await retrieveSalePlansRequest()
      setSalePlans(data)
    } catch (error) {
      console.log(error)
    }
  }
  const retrieveSalePlansDetails = async() => {
    try {
      const {data} = await retrieveSalePlansDetailsRequest()
      setSalePlansDetails(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    retrieveSalePlans()
    retrieveSalePlansDetails()
  }, [])



  return (
    <div>
      <section>
        <Card5
          image='/media/svg/brand-logos/github.svg'
          title='قرعه کشی محصولات گروه خودروسازی سایپا'
        >
          <section className='tw-grid tw-grid-cols-2'>
            <SelectAndLabel title='طرح های فروش' options={salePlansFakeData} setSelected={setSelected} />
          </section>
          <section>
            <PlansTable className='' columns={PlanColumns} rows={PlansRows} />
          </section>
        </Card5>
      </section>
    </div>
  )
}

export default Lottery
