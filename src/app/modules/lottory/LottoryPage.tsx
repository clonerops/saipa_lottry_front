import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import PlanColumns from '../../../_cloner/helpers/grid-col-value/plans.json'
import {PlansTable} from './components/PlansTable'
import {useEffect, useState} from 'react'
import {retrieveSalePlansDetailsRequest, retrieveSalePlansRequest} from './core/_requests'
import {SalePlansModel} from './core/_models'
import Backdrop from '../../../_cloner/helpers/components/Backdrop'

const Lottery = () => {
  const [salePlans, setSalePlans] = useState<SalePlansModel[]>([])
  const [salePlansDetails, setSalePlansDetails] = useState([])
  const [selected, setSelected] = useState<number>(21)
  const [loading, setLoading] = useState<boolean>(false)

  const retrieveSalePlans = async () => {
    try {
      const res = await retrieveSalePlansRequest()
      setSalePlans(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const retrieveSalePlansDetails = async() => {
    try {
      const res = await retrieveSalePlansDetailsRequest(selected)
      setSalePlansDetails(res.data.data)
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
      {loading && <Backdrop loading={loading} />}
      <section>
        <Card5
          image='/media/svg/brand-logos/github.svg'
          title='قرعه کشی محصولات گروه خودروسازی سایپا'
        >
          <section className='tw-grid tw-grid-cols-2'>
            <SelectAndLabel title='طرح های فروش' setSelected={setSelected}>
              {salePlans?.map((salePlan) => (
                <option placeholder='طرح مورد نظر را انتخاب کنید' selected={false} className='tw-font-Vazir' key={salePlan.id} value={salePlan.id}>
                  {salePlan.salePlanDescription}
                </option>
              ))}
            </SelectAndLabel>
          </section>
          <section>
            <PlansTable className='' columns={PlanColumns} rows={salePlansDetails} />
          </section>
        </Card5>
      </section>
    </div>
  )
}

export default Lottery
