import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
