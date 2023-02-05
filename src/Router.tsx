import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Status } from './pages/Status'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/status" element={<Status />} />
      </Route>
    </Routes>
  )
}
