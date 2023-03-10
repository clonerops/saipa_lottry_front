import {FC, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider, useLayout} from './core'
import {useLocation} from 'react-router-dom'
import {DrawerMessenger, ActivityDrawer, InviteUsers} from '../partials'
import {MenuComponent} from '../../_cloner/assets/ts/components'
import clsx from 'clsx'
import {WithChildren} from '../helpers'
import {themeModeSwitchHelper, useThemeMode} from '../partials/layout/theme-mode/ThemeModeProvider'

const MasterLayout: FC<WithChildren> = ({children}) => {
  const {classes} = useLayout()
  const {mode} = useThemeMode()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  useEffect(() => {
    themeModeSwitchHelper(mode)
  }, [mode])

  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />
          <div className='tw-text-center tw-flex tw-justify-center tw-items-center tw-font-VazirBold pt-8 pb-0'>
            {/* <span className='tw-text-9xl text-white'>سیستم قرعه کشی محصولات گروه خودروسازی سایپا</span> */}
            <span className='tw-text-4xl text-white'>سیستم قرعه کشی محصولات گروه خودروسازی سایپا</span>
          </div>
          <div id='kt_content' className='d-flex flex-column flex-column-fluid'>
            <Toolbar />
            <div
              className={clsx(
                'd-flex flex-column-fluid align-items-start',
                classes.contentContainer.join(' ')
              )}
              id='kt_post'
            >
              <AsideDefault />
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      {/* <UpgradePlan /> */}
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
