import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { services } from './data/services'
import { HomePage } from './pages/HomePage'
import { ServicePage } from './pages/ServicePage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {services.map((service) => (
            <Route key={service.path} path={service.path} element={<ServicePage />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
