import './App.css'
import SelectecProductsCarousel from './components/SelectecProductsCarousel/SelectecProductsCarousel'
import Claim from './components/Claim/Claim'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Navigation />
      <Claim />
      <SelectecProductsCarousel />
      <AppRoutes />
      <Footer />

    </>
  )
}

export default App
