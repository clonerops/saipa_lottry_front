import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_cloner/assets/ts/_utils'
import {WithChildren} from '../../_cloner/helpers'

const PrivateRoutes = () => {
  const LotteryPage = lazy(() => import('../modules/lottory/LottoryPage'))
  const StartLottery = lazy(() => import('../modules/lottory/StartLottery'))

  return (
    <Routes>
      <Route path='auth/*' element={<Navigate to='/landing' />} />
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* Lazy Modules */}
        <Route
          path='lottery/*'
          element={
            <SuspensedView>
              <LotteryPage />
            </SuspensedView>
          }
        />
        <Route
          path='startlottery/:id'
          element={
            <SuspensedView>
              <StartLottery />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
