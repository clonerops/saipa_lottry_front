import { Link } from "react-router-dom"
import { toAbsoluteUrl } from "../../../_cloner/helpers"

const LandingPage = () => {
  return (
    <div className="container tw-pt-8 tw-h-screen">
        <header className="tw-flex tw-flex-col">
            <img alt="saipa logo" src={toAbsoluteUrl('/media/logos/saipa-image.png')} width={180} height={180} />
            <h1 className="tw-font-VazirBold tw-text-3xl tw-pt-8 tw-self-start">قرعه كشي دومين طرح پيش فروش مشاركت در توليد محصولات گروه خودروسازي سايپا  در سال 1400</h1>
        </header>
        <main className="tw-grid tw-grid-cols-2 tw-pt-8">
            <section className="tw-flex tw-justify-center tw-items-center">
                <Link to='/lottery' className="tw-text-white tw-border-0 tw-bg-[#8FD821] tw-rounded-full tw-text-xl tw-px-24 tw-py-4 hover:tw-bg-[#84C91B] hover:tw-text-white tw-shadow-lg">شروع</Link>
            </section>
            <section>
                <img alt="shahin" src={toAbsoluteUrl('/media/illustrations/img/Car2.png')}  />
            </section>
        </main>
        <footer>
            <h1 className="tw-font-VazirBold tw-text-2xl tw-pt-8 tw-self-start tw-text-[#ABABAB]">سیستم قرعه کشی محصولات گروه خودروسازی سایپا</h1>
        </footer>
    </div>
  )
}

export default LandingPage