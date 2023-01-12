import Accordion from '../../../_cloner/helpers/components/Accordion'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'
import {
  TablesWidget1,
  TablesWidget10,
  TablesWidget11,
  TablesWidget12,
  TablesWidget13,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
  TablesWidget5,
  TablesWidget6,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
} from '../../../_cloner/partials/widgets'
import JavaniBody from './components/JavaniBody'

const Lottery = () => {
  return (
    <div>
      <section>
        <Card5
          image='/media/svg/brand-logos/github.svg'
          title='قرعه کشی محصولات گروه خودروسازی سایپا'
        >
            {/* <Accordion title='طرح جوانی جمعیت' body={<JavaniBody />} /> */}
        </Card5>
      </section>
    </div>
  )
}

export default Lottery
