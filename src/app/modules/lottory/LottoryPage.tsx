import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import PlanColumns from '../../../_cloner/helpers/grid-col-value/plans.json'
import PlansRows from '../../../_cloner/helpers/fakedata/plansData.json'
import { PlansTable } from './components/PlansTable'

const Lottery = () => {
  return (
    <div>
      <section>
        <Card5
          image='/media/svg/brand-logos/github.svg'
          title='قرعه کشی محصولات گروه خودروسازی سایپا'
        >
          <section className='tw-grid tw-grid-cols-2'>
            <SelectAndLabel title='طرح های فروش' />
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
